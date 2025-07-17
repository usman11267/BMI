import React, { useState, useEffect } from 'react'
import InputForm from './components/InputForm'
import ResultCard from './components/ResultCard'
import Button from './components/Button'
import LoadingPage from './components/LoadingPage'
import { 
  calculateBMI, 
  validateWeight, 
  validateHeight, 
  validateAge 
} from './utils/unitConversions'

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [weightUnit, setWeightUnit] = useState('kg')
  const [heightUnit, setHeightUnit] = useState('cm')
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')
  const [isCalculating, setIsCalculating] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  // Initialize height object when switching to feet/inches
  useEffect(() => {
    if (heightUnit === 'ft-in' && (typeof height === 'string' || !height)) {
      setHeight({ feet: '', inches: '' })
    } else if (heightUnit === 'cm' && typeof height === 'object') {
      setHeight('')
    }
  }, [heightUnit])

  // Show loading page on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000) // Extended to 4 seconds for better visibility
    return () => clearTimeout(timer)
  }, [])

  // BMI calculation function
  const calculateBMIResult = () => {
    // Reset errors
    setErrors({})
    
    // Validation
    const newErrors = {}
    
    // Age validation
    const ageError = validateAge(age)
    if (ageError) newErrors.age = ageError
    
    // Weight validation
    const weightError = validateWeight(weight, weightUnit)
    if (weightError) newErrors.weight = weightError
    
    // Height validation
    const heightError = validateHeight(height, heightUnit)
    if (heightError) newErrors.height = heightError
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Start calculation with loading state
    setIsCalculating(true)
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      try {
        // Calculate BMI using utility function
        const bmiValue = calculateBMI(
          parseFloat(weight), 
          heightUnit === 'ft-in' ? {
            feet: parseFloat(height.feet),
            inches: parseFloat(height.inches)
          } : parseFloat(height),
          weightUnit,
          heightUnit
        )
        
        // Determine category
        let bmiCategory = ''
        if (bmiValue < 18.5) {
          bmiCategory = 'Underweight'
        } else if (bmiValue >= 18.5 && bmiValue < 25) {
          bmiCategory = 'Normal weight'
        } else if (bmiValue >= 25 && bmiValue < 30) {
          bmiCategory = 'Overweight'
        } else {
          bmiCategory = 'Obese'
        }
        
        setBmi(bmiValue)
        setCategory(bmiCategory)
        setIsCalculating(false)
      } catch (error) {
        console.error('BMI calculation error:', error)
        setErrors({ general: 'An error occurred during calculation. Please try again.' })
        setIsCalculating(false)
      }
    }, 1800) // Extended calculation time for better UX
  }

  // Reset function
  const resetForm = () => {
    setWeight('')
    setHeight(heightUnit === 'ft-in' ? { feet: '', inches: '' } : '')
    setAge('')
    setBmi(null)
    setCategory('')
    setErrors({})
    setIsCalculating(false)
    
    // Show loading page briefly on reset
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  // Unit change handlers
  const handleWeightUnitChange = (unit) => {
    setWeightUnit(unit)
    setWeight('') // Clear weight when unit changes
  }

  const handleHeightUnitChange = (unit) => {
    setHeightUnit(unit)
    setHeight(unit === 'ft-in' ? { feet: '', inches: '' } : '') // Clear height when unit changes
  }

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-fuchsia-500/10 to-violet-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-lg w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold text-white mb-3 drop-shadow-xl">
            🏥 Smart BMI Calculator
          </h1>
          <p className="text-white/95 text-xl drop-shadow-lg font-medium mb-2">
            Calculate your Body Mass Index with multiple units
          </p>
          <p className="text-white/80 text-sm drop-shadow-md">
            Professional • Accurate • Easy to Use
          </p>
        </div>

        {/* Main Card */}
        <div className="glass-effect rounded-3xl p-8 shadow-2xl backdrop-blur-lg animate-slide-up border-2 border-white/30 hover:shadow-3xl hover:scale-105 transition-all duration-500">
          {/* General Error */}
          {errors.general && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl">
              <p className="text-red-300 text-sm">{errors.general}</p>
            </div>
          )}

          {/* Input Form */}
          <InputForm
            weight={weight}
            height={height}
            age={age}
            weightUnit={weightUnit}
            heightUnit={heightUnit}
            setWeight={setWeight}
            setHeight={setHeight}
            setAge={setAge}
            setWeightUnit={handleWeightUnitChange}
            setHeightUnit={handleHeightUnitChange}
            errors={errors}
            isCalculating={isCalculating}
          />

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <Button
              onClick={calculateBMIResult}
              disabled={isCalculating}
              variant="primary"
              className="flex-1"
            >
              {isCalculating ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-800 mr-2"></div>
                  Calculating...
                </>
              ) : (
                <>
                  <span className="mr-2">🧮</span>
                  Calculate BMI
                </>
              )}
            </Button>
            
            <Button
              onClick={resetForm}
              variant="secondary"
              className="flex-1"
            >
              <span className="mr-2">🔄</span>
              Reset
            </Button>
          </div>

          {/* Result Card */}
          {bmi && !isCalculating && (
            <ResultCard
              bmi={bmi}
              category={category}
              age={age}
              weightUnit={weightUnit}
              heightUnit={heightUnit}
              weight={weight}
              height={height}
            />
          )}
        </div>

                {/* Footer */}
        <div className="text-center mt-8 animate-fade-in">
          <p className="text-white/60 text-sm flex items-center justify-center">
           ©2025 
           <i className="fa-brands fa-instagram text-white/80 text-lg mx-2 hover:text-pink-400 transition-colors duration-200" aria-hidden="true"></i>
           <a href="https://www.instagram.com/usmaann._._?igsh=ZTgzeGNrdGM1anM4" className="text-white/80 hover:text-white/100 transition-colors hover:scale-110 transform duration-200">Usman</a>
          </p>
          <p className="text-white/40 text-xs mt-2">
            Supports both metric (kg, cm) and imperial (lbs, ft/in) units
          </p>
        </div>
      </div>
    </div>
  )
}

export default App 