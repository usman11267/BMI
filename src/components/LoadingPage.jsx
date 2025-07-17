import React from 'react'

const LoadingPage = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-fuchsia-500/20 to-violet-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Main Loading Animation */}
        <div className="relative mb-8">
          <div className="w-40 h-40 border-8 border-white/30 border-t-white rounded-full animate-spin mx-auto shadow-2xl"></div>
          <div className="absolute inset-4 w-32 h-32 border-6 border-fuchsia-300/60 border-b-fuchsia-200 rounded-full animate-spin animate-glow shadow-xl"></div>
          <div className="absolute inset-8 w-24 h-24 border-4 border-cyan-300/60 border-r-cyan-200 rounded-full animate-spin shadow-lg"></div>
          <div className="absolute inset-12 w-16 h-16 border-2 border-violet-300/60 border-l-violet-200 rounded-full animate-spin shadow-md"></div>
          
          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl animate-bounce drop-shadow-lg">🏥</div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4 animate-float">
          <h1 className="text-5xl font-bold text-white animate-pulse drop-shadow-2xl bg-gradient-to-r from-white via-fuchsia-100 to-cyan-100 bg-clip-text text-transparent">
            Smart BMI Calculator
          </h1>
          <p className="text-white/95 text-xl animate-bounce drop-shadow-lg font-medium">
            🚀 Calculating your health insights...
          </p>
          <p className="text-white/80 text-lg drop-shadow-md">
            Please wait while we prepare your experience
          </p>
        </div>

        {/* Enhanced Progress Dots */}
        <div className="flex justify-center space-x-3 mt-10">
          <div className="w-4 h-4 bg-gradient-to-r from-fuchsia-400 to-pink-500 rounded-full animate-pulse delay-0 shadow-lg"></div>
          <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-violet-500 rounded-full animate-pulse delay-150 shadow-lg"></div>
          <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse delay-300 shadow-lg"></div>
          <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse delay-450 shadow-lg"></div>
          <div className="w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse delay-600 shadow-lg"></div>
        </div>

        {/* Animated Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-16 w-8 h-8 bg-gradient-to-br from-fuchsia-400/50 to-pink-500/50 rounded-full animate-float delay-200 shadow-xl"></div>
          <div className="absolute top-32 right-32 w-10 h-10 bg-gradient-to-br from-cyan-400/50 to-blue-500/50 rounded-full animate-bounce delay-400 shadow-xl"></div>
          <div className="absolute bottom-32 left-12 w-6 h-6 bg-gradient-to-br from-violet-400/50 to-purple-500/50 rounded-full animate-float delay-600 shadow-lg"></div>
          <div className="absolute bottom-16 right-16 w-9 h-9 bg-gradient-to-br from-emerald-400/50 to-teal-500/50 rounded-full animate-bounce delay-800 shadow-xl"></div>
          <div className="absolute top-1/2 left-8 w-7 h-7 bg-gradient-to-br from-amber-400/50 to-orange-500/50 rounded-full animate-float delay-1000 shadow-lg"></div>
          <div className="absolute top-1/3 right-8 w-8 h-8 bg-gradient-to-br from-rose-400/50 to-red-500/50 rounded-full animate-bounce delay-1200 shadow-xl"></div>
        </div>

        {/* Enhanced Glowing Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] border border-white/15 rounded-full animate-spin opacity-40 shadow-2xl"></div>
          <div className="absolute w-[400px] h-[400px] border border-fuchsia-300/30 rounded-full animate-spin opacity-50 shadow-xl"></div>
          <div className="absolute w-[300px] h-[300px] border border-cyan-300/30 rounded-full animate-spin opacity-60 shadow-lg"></div>
          <div className="absolute w-[200px] h-[200px] border border-violet-300/30 rounded-full animate-spin opacity-70 shadow-md"></div>
        </div>

        {/* Loading Progress Bar */}
        <div className="mt-12 w-80 mx-auto">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden shadow-inner">
            <div className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 h-full rounded-full animate-pulse shadow-lg loading-bar"></div>
          </div>
          <p className="text-white/70 text-sm mt-3 font-medium">Loading amazing features...</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage 