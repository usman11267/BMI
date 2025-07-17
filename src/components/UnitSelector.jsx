import React from 'react'

const UnitSelector = ({ options, selectedUnit, onUnitChange, label }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-white/90 drop-shadow-sm">{label}</label>
      <div className="flex bg-white/15 rounded-xl p-1 backdrop-blur-sm border border-white/30 shadow-lg">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onUnitChange(option.value)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
              selectedUnit === option.value
                ? 'bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white shadow-lg shadow-fuchsia-500/25 transform scale-105'
                : 'text-white/70 hover:text-white hover:bg-white/15 hover:shadow-md hover:scale-102'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default UnitSelector 