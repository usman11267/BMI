import React from 'react'

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false, 
  className = '', 
  type = 'button' 
}) => {
  const baseStyles = 'px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center shadow-lg'
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white hover:from-fuchsia-600 hover:to-cyan-600 hover:shadow-xl hover:shadow-fuchsia-500/25 focus:ring-fuchsia-500/50 hover:-translate-y-1 hover:scale-105',
    secondary: 'bg-white/15 text-white border border-white/30 hover:bg-white/25 hover:border-white/50 focus:ring-white/30 backdrop-blur-sm hover:shadow-xl hover:shadow-white/10 hover:-translate-y-1 hover:scale-105'
  }

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  )
}

export default Button 