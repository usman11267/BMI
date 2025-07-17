// Unit conversion utilities

// Weight conversions
export const lbsToKg = (lbs) => {
  return lbs * 0.453592
}

export const kgToLbs = (kg) => {
  return kg * 2.20462
}

// Height conversions
export const feetInchesToCm = (feet, inches) => {
  const totalInches = (feet * 12) + inches
  return totalInches * 2.54
}

export const cmToFeetInches = (cm) => {
  const totalInches = cm / 2.54
  const feet = Math.floor(totalInches / 12)
  const inches = totalInches % 12
  return { feet, inches }
}

export const inchesToCm = (inches) => {
  return inches * 2.54
}

export const cmToInches = (cm) => {
  return cm / 2.54
}

// BMI calculation helper
export const calculateBMI = (weight, height, weightUnit, heightUnit) => {
  let weightInKg = weight
  let heightInCm = height

  // Convert weight to kg if needed
  if (weightUnit === 'lbs') {
    weightInKg = lbsToKg(weight)
  }

  // Convert height to cm if needed
  if (heightUnit === 'ft-in') {
    // height should be an object with feet and inches
    heightInCm = feetInchesToCm(height.feet, height.inches)
  }

  // Convert height from cm to meters for BMI calculation
  const heightInMeters = heightInCm / 100

  // Calculate BMI
  return weightInKg / (heightInMeters * heightInMeters)
}

// Format display values
export const formatWeight = (weight, unit) => {
  if (unit === 'kg') {
    return `${weight} kg`
  } else {
    return `${weight} lbs`
  }
}

export const formatHeight = (height, unit) => {
  if (unit === 'cm') {
    return `${height} cm`
  } else {
    return `${height.feet}' ${height.inches}"`
  }
}

// Validate input values
export const validateWeight = (weight, unit) => {
  const numWeight = parseFloat(weight)
  
  if (isNaN(numWeight) || numWeight <= 0) {
    return 'Please enter a valid weight'
  }
  
  if (unit === 'kg' && (numWeight < 1 || numWeight > 500)) {
    return 'Weight must be between 1-500 kg'
  }
  
  if (unit === 'lbs' && (numWeight < 2 || numWeight > 1100)) {
    return 'Weight must be between 2-1100 lbs'
  }
  
  return null
}

export const validateHeight = (height, unit) => {
  if (unit === 'cm') {
    const numHeight = parseFloat(height)
    
    if (isNaN(numHeight) || numHeight <= 0) {
      return 'Please enter a valid height'
    }
    
    if (numHeight < 50 || numHeight > 300) {
      return 'Height must be between 50-300 cm'
    }
  } else {
    const feet = parseFloat(height.feet)
    const inches = parseFloat(height.inches)
    
    if (isNaN(feet) || isNaN(inches) || feet < 0 || inches < 0) {
      return 'Please enter valid feet and inches'
    }
    
    if (feet < 1 || feet > 8) {
      return 'Feet must be between 1-8'
    }
    
    if (inches < 0 || inches >= 12) {
      return 'Inches must be between 0-11'
    }
  }
  
  return null
}

export const validateAge = (age) => {
  const numAge = parseFloat(age)
  
  if (isNaN(numAge) || numAge <= 0) {
    return 'Please enter a valid age'
  }
  
  if (numAge < 1 || numAge > 120) {
    return 'Age must be between 1-120 years'
  }
  
  return null
} 