import React from 'react'
import { formatWeight, formatHeight } from '../utils/unitConversions'

const ResultCard = ({ bmi, category, age, weightUnit, heightUnit, weight, height }) => {
  // Get color and emoji based on category
  const getCategoryStyles = (category) => {
    switch (category) {
      case 'Underweight':
        return {
          color: 'text-sky-400',
          bgColor: 'bg-gradient-to-r from-sky-500/20 to-blue-500/20',
          borderColor: 'border-sky-400/50',
          emoji: '⚖️'
        }
      case 'Normal weight':
        return {
          color: 'text-emerald-400',
          bgColor: 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20',
          borderColor: 'border-emerald-400/50',
          emoji: '✅'
        }
      case 'Overweight':
        return {
          color: 'text-amber-400',
          bgColor: 'bg-gradient-to-r from-amber-500/20 to-orange-500/20',
          borderColor: 'border-amber-400/50',
          emoji: '⚠️'
        }
      case 'Obese':
        return {
          color: 'text-rose-400',
          bgColor: 'bg-gradient-to-r from-rose-500/20 to-red-500/20',
          borderColor: 'border-rose-400/50',
          emoji: '🚨'
        }
      default:
        return {
          color: 'text-white',
          bgColor: 'bg-white/20',
          borderColor: 'border-white/30',
          emoji: '📊'
        }
    }
  }

  const getHealthAdvice = (category, age) => {
    const ageNum = parseInt(age)
    
    switch (category) {
      case 'Underweight':
        if (ageNum < 18) {
          return 'For young people, consult a healthcare provider about healthy weight gain and proper nutrition.'
        }
        return 'Consider consulting a healthcare provider about healthy weight gain strategies and balanced nutrition.'
      case 'Normal weight':
        if (ageNum < 18) {
          return 'Great! Continue with healthy eating habits and regular physical activity appropriate for your age.'
        } else if (ageNum > 65) {
          return 'Excellent! Maintain your current lifestyle with regular exercise and balanced nutrition suitable for your age.'
        }
        return 'Great! Maintain your current lifestyle with balanced diet and regular exercise.'
      case 'Overweight':
        if (ageNum < 18) {
          return 'Consider consulting a pediatrician for age-appropriate guidance on healthy lifestyle changes.'
        }
        return 'Consider adopting a healthier lifestyle with balanced nutrition and regular physical activity.'
      case 'Obese':
        if (ageNum < 18) {
          return 'It\'s important to consult a pediatrician for comprehensive health assessment and guidance.'
        }
        return 'It\'s recommended to consult a healthcare provider for a comprehensive health assessment and personalized plan.'
      default:
        return 'BMI calculated successfully.'
    }
  }

  const getBMIRange = (category) => {
    switch (category) {
      case 'Underweight':
        return 'BMI < 18.5'
      case 'Normal weight':
        return 'BMI 18.5 - 24.9'
      case 'Overweight':
        return 'BMI 25 - 29.9'
      case 'Obese':
        return 'BMI ≥ 30'
      default:
        return 'BMI Range'
    }
  }

  const getAgeCategory = (age) => {
    const ageNum = parseInt(age)
    if (ageNum < 18) return 'Youth'
    if (ageNum < 65) return 'Adult'
    return 'Senior'
  }

  const formatHeightDisplay = (height, unit) => {
    if (unit === 'ft-in') {
      return `${height.feet || 0}' ${height.inches || 0}"`
    }
    return `${height || 0} cm`
  }

  const formatWeightDisplay = (weight, unit) => {
    return `${weight || 0} ${unit}`
  }

  const styles = getCategoryStyles(category)

  return (
    <div className="animate-slide-up">
      {/* Main Result */}
      <div className={`rounded-2xl p-6 border-2 ${styles.bgColor} ${styles.borderColor} backdrop-blur-sm mb-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
        <div className="text-center">
          <div className="text-4xl mb-2">{styles.emoji}</div>
          <h3 className="text-white text-lg font-semibold mb-2">Your BMI Result</h3>
          
          {/* BMI Value */}
          <div className="mb-4">
            <div className={`text-4xl font-bold ${styles.color} mb-1`}>
              {bmi.toFixed(1)}
            </div>
            <div className="text-white/70 text-sm">
              Body Mass Index
            </div>
          </div>

          {/* Category */}
          <div className={`inline-block px-6 py-3 rounded-full ${styles.bgColor} ${styles.borderColor} border-2 mb-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}>
            <span className={`font-bold ${styles.color} drop-shadow-sm`}>{category}</span>
          </div>

          {/* Range */}
          <div className="mb-4">
            <span className="text-white/60 text-sm">Range: {getBMIRange(category)}</span>
          </div>

          {/* Personal Info Summary */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
            <div className="text-center">
              <div className="text-white/60 text-xs">Age</div>
              <div className="text-white font-medium">{age} years</div>
              <div className="text-white/50 text-xs">{getAgeCategory(age)}</div>
            </div>
            <div className="text-center">
              <div className="text-white/60 text-xs">Weight</div>
              <div className="text-white font-medium">{formatWeightDisplay(weight, weightUnit)}</div>
            </div>
            <div className="text-center">
              <div className="text-white/60 text-xs">Height</div>
              <div className="text-white font-medium">{formatHeightDisplay(height, heightUnit)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Health Advice */}
      <div className="bg-white/10 rounded-xl p-5 border border-white/20 mb-4 shadow-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:shadow-xl">
        <h4 className="text-white/95 font-semibold mb-3 text-sm flex items-center drop-shadow-sm">
          💡 Personalized Health Advice
        </h4>
        <p className="text-white/80 text-sm leading-relaxed">
          {getHealthAdvice(category, age)}
        </p>
      </div>

      {/* BMI Categories Reference */}
      <div className="bg-white/10 rounded-xl p-5 border border-white/20 shadow-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:shadow-xl">
        <h4 className="text-white/95 font-semibold mb-4 text-sm drop-shadow-sm">📊 BMI Categories</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <span className="text-sky-400 text-sm font-medium">Underweight</span>
            <span className="text-white/70 text-sm">Below 18.5</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <span className="text-emerald-400 text-sm font-medium">Normal weight</span>
            <span className="text-white/70 text-sm">18.5 - 24.9</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <span className="text-amber-400 text-sm font-medium">Overweight</span>
            <span className="text-white/70 text-sm">25 - 29.9</span>
          </div>
          <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <span className="text-rose-400 text-sm font-medium">Obese</span>
            <span className="text-white/70 text-sm">30 and above</span>
          </div>
        </div>
        
        {/* Unit Information */}
        <div className="mt-4 pt-4 border-t border-white/20">
          <p className="text-white/60 text-xs">
            ✨ Calculated using: {weightUnit === 'kg' ? 'Metric' : 'Imperial'} weight units, {heightUnit === 'cm' ? 'Metric' : 'Imperial'} height units
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResultCard 