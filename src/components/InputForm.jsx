import React from 'react'
import UnitSelector from './UnitSelector'

const InputForm = ({ 
  weight, 
  height, 
  age,
  weightUnit,
  heightUnit,
  setWeight, 
  setHeight, 
  setAge,
  setWeightUnit,
  setHeightUnit,
  errors, 
  isCalculating 
}) => {
  const weightOptions = [
    { value: 'kg', label: 'Kilograms' },
    { value: 'lbs', label: 'Pounds' }
  ]

  const heightOptions = [
    { value: 'cm', label: 'Centimeters' },
    { value: 'ft-in', label: 'Feet & Inches' }
  ]

  const handleHeightChange = (field, value) => {
    if (heightUnit === 'ft-in') {
      setHeight(prev => ({
        ...prev,
        [field]: value
      }))
    } else {
      setHeight(value)
    }
  }

  return (
    <div className="space-y-6 mb-6">
      {/* Age Input */}
      <div>
        <label htmlFor="age" className="block text-sm font-medium text-white/90 mb-2">
          Age (years)
        </label>
        <div className="relative">
          <input
            type="number"
            id="age"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            disabled={isCalculating}
            className={`w-full px-4 py-3 rounded-xl bg-white/15 border backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 shadow-lg hover:shadow-xl ${
              errors.age 
                ? 'border-red-400 focus:ring-red-400' 
                : 'border-white/30 hover:border-white/50 hover:bg-white/20'
            } ${isCalculating ? 'opacity-50 cursor-not-allowed' : ''}`}
            min="1"
            max="120"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 text-sm">
            years
          </div>
        </div>
        {errors.age && (
          <p className="text-red-300 text-sm mt-1 animate-fade-in">{errors.age}</p>
        )}
      </div>

      {/* Weight Section */}
      <div className="space-y-4">
        <UnitSelector
          options={weightOptions}
          selectedUnit={weightUnit}
          onUnitChange={setWeightUnit}
          label="Weight Unit"
        />
        
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-white/90 mb-2">
            Weight ({weightUnit === 'kg' ? 'kg' : 'lbs'})
          </label>
          <div className="relative">
            <input
              type="number"
              id="weight"
              placeholder={`Enter your weight in ${weightUnit === 'kg' ? 'kilograms' : 'pounds'}`}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              disabled={isCalculating}
              className={`w-full px-4 py-3 rounded-xl bg-white/15 border backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 shadow-lg hover:shadow-xl ${
                errors.weight 
                  ? 'border-red-400 focus:ring-red-400' 
                  : 'border-white/30 hover:border-white/50 hover:bg-white/20'
              } ${isCalculating ? 'opacity-50 cursor-not-allowed' : ''}`}
              min={weightUnit === 'kg' ? '1' : '2'}
              max={weightUnit === 'kg' ? '500' : '1100'}
              step="0.1"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 text-sm">
              {weightUnit === 'kg' ? 'kg' : 'lbs'}
            </div>
          </div>
          {errors.weight && (
            <p className="text-red-300 text-sm mt-1 animate-fade-in">{errors.weight}</p>
          )}
        </div>
      </div>

      {/* Height Section */}
      <div className="space-y-4">
        <UnitSelector
          options={heightOptions}
          selectedUnit={heightUnit}
          onUnitChange={setHeightUnit}
          label="Height Unit"
        />
        
        {heightUnit === 'cm' ? (
          <div>
            <label htmlFor="height" className="block text-sm font-medium text-white/90 mb-2">
              Height (cm)
            </label>
            <div className="relative">
              <input
                type="number"
                id="height"
                placeholder="Enter your height in centimeters"
                value={height}
                onChange={(e) => handleHeightChange('cm', e.target.value)}
                disabled={isCalculating}
                className={`w-full px-4 py-3 rounded-xl bg-white/15 border backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 shadow-lg hover:shadow-xl ${
                  errors.height 
                    ? 'border-red-400 focus:ring-red-400' 
                    : 'border-white/30 hover:border-white/50 hover:bg-white/20'
                } ${isCalculating ? 'opacity-50 cursor-not-allowed' : ''}`}
                min="50"
                max="300"
                step="0.1"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 text-sm">
                cm
              </div>
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-white/90 mb-2">
              Height (feet & inches)
            </label>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="number"
                  placeholder="Feet"
                  value={height.feet || ''}
                  onChange={(e) => handleHeightChange('feet', e.target.value)}
                  disabled={isCalculating}
                  className={`w-full px-4 py-3 rounded-xl bg-white/15 border backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 shadow-lg hover:shadow-xl ${
                    errors.height 
                      ? 'border-red-400 focus:ring-red-400' 
                      : 'border-white/30 hover:border-white/50 hover:bg-white/20'
                  } ${isCalculating ? 'opacity-50 cursor-not-allowed' : ''}`}
                  min="1"
                  max="8"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 text-sm">
                  ft
                </div>
              </div>
              <div className="flex-1 relative">
                <input
                  type="number"
                  placeholder="Inches"
                  value={height.inches || ''}
                  onChange={(e) => handleHeightChange('inches', e.target.value)}
                  disabled={isCalculating}
                  className={`w-full px-4 py-3 rounded-xl bg-white/15 border backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 shadow-lg hover:shadow-xl ${
                    errors.height 
                      ? 'border-red-400 focus:ring-red-400' 
                      : 'border-white/30 hover:border-white/50 hover:bg-white/20'
                  } ${isCalculating ? 'opacity-50 cursor-not-allowed' : ''}`}
                  min="0"
                  max="11"
                  step="0.1"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/70 text-sm">
                  in
                </div>
              </div>
            </div>
          </div>
        )}
        
        {errors.height && (
          <p className="text-red-300 text-sm mt-1 animate-fade-in">{errors.height}</p>
        )}
      </div>

      {/* Input Tips */}
      <div className="bg-white/10 rounded-xl p-5 border border-white/20 shadow-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
        <h4 className="text-white/95 font-semibold mb-3 text-sm drop-shadow-sm">📏 Input Guidelines</h4>
        <div className="text-white/80 text-xs space-y-2">
          <p>• <span className="font-medium">Age:</span> Enter your age in years (1-120)</p>
          <p>• <span className="font-medium">Weight:</span> Choose between kg (1-500) or lbs (2-1100)</p>
          <p>• <span className="font-medium">Height:</span> Choose between cm (50-300) or feet & inches (1-8 ft)</p>
          <p>• <span className="font-medium">Precision:</span> Use decimal points for accuracy (e.g., 5.5 ft or 70.5 kg)</p>
        </div>
      </div>
    </div>
  )
}

export default InputForm 