# ITsYourBuddy 🚀

> Your ultimate companion for Java scripting in ITs Magic Engine

A beautiful, modern web application showcasing the comprehensive scripting reference for ITs Magic Engine. Built with React, featuring glassmorphism design and a stunning dark blue cyber theme.

![ITsYourBuddy](https://img.shields.io/badge/ITs-Magic-00BFFF?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Glassmorphism UI** - Modern, frosted glass design with smooth animations
- 🌌 **Dark Blue Cyber Theme** - Sleek and futuristic color palette
- 📚 **2000+ Methods & Classes** - Complete scripting reference for ITs Magic Engine
- 🔍 **Smart Search** - Quickly find classes and methods
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎯 **Category Filtering** - Organized by functionality
- ⚡ **Fast Performance** - Optimized for speed

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and Yarn
- Python 3.8+ (for backend, if needed)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/BludosDevv/ITsYourBuddy.git
cd ITsYourBuddy
```

2. **Install dependencies**
```bash
# Frontend
cd frontend
yarn install
```

3. **Run the development server**
```bash
yarn start
```

The application will open at `http://localhost:3000`

## 📦 Building for Production

```bash
cd frontend
yarn build
```

The production-ready files will be in the `frontend/build` directory.

## 🎨 Design System

### Color Palette

The application uses a carefully crafted dark blue cyber theme:

- **Background**: Deep navy (`#0F1729`)
- **Primary**: Electric blue (`#00BFFF`)
- **Secondary**: Cyan (`#00FFFF`)
- **Accent**: Purple (`#8A2BE2`)
- **Glass Effect**: Semi-transparent with blur

### Typography

- **Headers**: Space Grotesk
- **Body**: Inter

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Shadcn/UI** - UI components
- **Lucide React** - Icons
- **Sonner** - Toast notifications

### Backend (Optional)
- **FastAPI** - API framework
- **MongoDB** - Database
- **Python 3.8+**

## 📱 Pages

1. **Home** - Landing page with app download links
2. **Scripting** - Comprehensive scripting reference with search and filtering
3. **About Me** - Developer information and social links
4. **GitHub** - Link to repository

## 🚢 Deploying to Vercel

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/BludosDevv/ITsYourBuddy)

### Manual Deployment

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
cd frontend
vercel
```

4. **Configure Build Settings** (if needed)
   - **Framework Preset**: Create React App
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
   - **Install Command**: `yarn install`

### Environment Variables

If you need environment variables, create a `.env` file:

```env
REACT_APP_BACKEND_URL=your_backend_url_here
```

## 🎯 Features Breakdown

### Scripting Reference
- Browse 2000+ Java classes and methods
- Search functionality for quick access
- Category-based filtering
- Detailed method signatures
- Copy-to-clipboard functionality

### Glassmorphism Design
- Frosted glass cards with backdrop blur
- Smooth hover animations
- Glowing effects on interactive elements
- Responsive design for all screen sizes

### Navigation
- Bottom navigation bar with glass effect
- Active state indicators
- Smooth page transitions

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Customization Guide

### Changing Colors

Edit `/frontend/src/index.css` to customize the color scheme:

```css
:root {
    --primary: 200 100% 50%;  /* Electric Blue */
    --secondary: 180 100% 50%; /* Cyan */
    --accent: 270 80% 60%;     /* Purple */
}
```

### Adding More Classes

Edit `/frontend/src/data/scriptingData.js` to add more scripting references:

```javascript
{
  className: "YourClass",
  category: "Your Category",
  methods: [
    { name: "method()", description: "Description" }
  ]
}
```

### Styling Components

All styling uses Tailwind CSS. The glassmorphism effects are defined in `index.css`:

```css
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

## 📱 ITs Magic Apps

Download the ITs Magic Engine apps:

- **ITs Magic 2.0** - [Play Store](https://play.google.com/store/apps/details?id=com.itsmagic.engine2)
- **ITs Magic 1.0** - [Play Store](https://play.google.com/store/apps/details?id=com.itsmagic.enginestable)

## 👤 Author

**Bludos Dev**

- GitHub: [@BludosDevv](https://github.com/BludosDevv)
- Instagram: [@gorthodoxie](https://instagram.com/gorthodoxie)
- Discord: greek_orthodoxy

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- ITs Magic Engine community
- All contributors to this project
- Shadcn/UI for the amazing component library
- Tailwind CSS for the utility-first CSS framework

## 📸 Screenshots

### Home Page
Beautiful landing page with app download links and feature highlights.

### Scripting Reference
Comprehensive reference with search, filtering, and detailed method information.

### About Page
Developer information with social links and project details.

---

Made with 💙 by Bludos Dev
