# 🧮 Smart BMI Calculator

A modern, responsive, and user-friendly BMI (Body Mass Index) calculator built with React, JavaScript, and Tailwind CSS. This application provides instant BMI calculations with beautiful visualizations and health category feedback.

![Smart BMI Calculator](https://img.shields.io/badge/BMI-Calculator-blue?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=for-the-badge&logo=vite)

## ✨ Features

- 🧮 **Real-Time BMI Calculation** - Instant results as you input your data
- 🎨 **Beautiful UI** - Modern glass-morphism design with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🏥 **Health Category Classification** - Visual feedback with color-coded results
- 💡 **Health Advice** - Personalized recommendations based on BMI category
- 🔄 **Reset Functionality** - Clear inputs and results with one click
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast loading
- 🎯 **Input Validation** - Real-time error handling and user feedback
- 📊 **BMI Categories Reference** - Built-in guide for BMI ranges

## 🎯 BMI Categories

| BMI Range | Category | Color | Health Status |
|-----------|----------|-------|---------------|
| Below 18.5 | Underweight | 🔵 Blue | May need to gain weight |
| 18.5 - 24.9 | Normal weight | 🟢 Green | Healthy weight range |
| 25 - 29.9 | Overweight | 🟡 Yellow | May need to lose weight |
| 30 and above | Obese | 🔴 Red | Consult healthcare provider |

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/smart-bmi-calculator.git
   cd smart-bmi-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🏗️ Project Structure

```
smart-bmi-calculator/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── InputForm.jsx       # Weight and height input form
│   │   └── ResultCard.jsx      # BMI result display
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styles and Tailwind imports
│   └── main.jsx                # Application entry point
├── index.html                  # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Vite 5.2
- **Language**: JavaScript (ES6+)
- **Linting**: ESLint
- **Package Manager**: npm

## 🎨 Design Features

### Visual Elements
- **Glass-morphism effects** with backdrop blur
- **Gradient backgrounds** for modern appeal
- **Smooth animations** with CSS transitions
- **Color-coded health categories** for instant recognition
- **Responsive grid layout** for all screen sizes

### User Experience
- **Real-time validation** with error messages
- **Loading states** during calculations
- **Accessibility features** with proper ARIA labels
- **Mobile-first design** approach
- **Intuitive navigation** and interactions

## 🔧 Customization

### Tailwind Configuration
The project uses custom Tailwind configurations for:
- Health category colors
- Custom animations
- Glass-morphism effects
- Responsive breakpoints

### Component Customization
Each component is designed to be easily customizable:
- Modify colors in `tailwind.config.js`
- Update animations in CSS classes
- Change validation rules in `App.jsx`
- Customize health advice in `ResultCard.jsx`

## 📊 Usage

1. **Enter your weight** in kilograms (kg)
2. **Enter your height** in centimeters (cm)
3. **Click "Calculate BMI"** to get instant results
4. **View your health category** with color-coded feedback
5. **Read personalized health advice** based on your BMI
6. **Use "Reset" button** to clear and start over

## 🔒 Input Validation

- Weight: Must be a positive number between 1-500 kg
- Height: Must be a positive number between 50-300 cm
- Real-time error messages for invalid inputs
- Visual feedback with red borders for errors

## 🌟 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Imperial units (lbs/ft) support
- [ ] BMI history tracking
- [ ] Export results as PDF
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) features

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- BMI calculation formula from WHO guidelines
- Design inspiration from modern health apps
- Tailwind CSS for utility-first styling
- React community for excellent documentation

## 📞 Support

If you have any questions or need help with the project:

- Create an issue in the GitHub repository
- Contact the maintainers
- Check the documentation

---

**Made with ❤️ using React, Tailwind CSS, and Vite**

> **Disclaimer**: This BMI calculator is for educational and informational purposes only. BMI is a screening tool and not a diagnostic tool. Always consult with a healthcare professional for medical advice and health assessments. 