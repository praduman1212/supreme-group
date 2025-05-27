# Supreme Group - Interactive Car Showcase

A modern, interactive web application built with Next.js that showcases car components and features through an engaging user interface.

## 🚀 Features

### Navigation System
- Vertical navigation bar positioned on the left center
- Progress indicator showing current page position
- Previous page button with hover effects
- Smooth page transitions
- Responsive design for all screen sizes

### Page Structure
1. **FirstPage**: Introduction page
2. **SecondPage**: Complete Body showcase
3. **ThirdPage**: Additional car component
4. **FourthPage**: Front component showcase
5. **FifthPage**: Additional car feature
6. **SixthPage**: Trunk component showcase
7. **SeventhPage**: Exterior component showcase

### Component Features

#### Navigation Elements
- Fixed vertical navigation line
- Progress indicator with dynamic height
- Previous page button with backdrop blur effect
- Responsive positioning for different screen sizes

#### Page Components
Each page includes:
- Main heading with responsive typography
- Section title with description
- Large car component image
- Bottom navigation icons
- Pause button (hidden on mobile)

#### Bottom Navigation
- Icon row with labels
- Active state indicators
- Responsive sizing
- Smooth opacity transitions
- Horizontal scroll on mobile

### Animations
- Fade-in and scale animations for images
- Smooth page transitions
- Hover effects on interactive elements
- Opacity transitions for navigation items
- Backdrop blur effects

## 🛠️ Technical Implementation

### Component Structure
```
components/
├── MainPage.jsx (Main container and navigation)
├── FirstPage.jsx
├── SecondPage.jsx
├── ThirdPage.jsx
├── FourthPage.jsx
├── FifthPage.jsx
├── SixthPage.jsx
└── SeventhPage.jsx
```

### Key Features
- Intersection Observer for scroll animations
- Responsive image handling with Next.js Image component
- Tailwind CSS for styling
- Custom animations and transitions
- Mobile-first responsive design

### Responsive Design
- Mobile: < 640px
- Tablet: 640px - 768px
- Desktop: > 768px
- Large Desktop: > 1024px

### Navigation Implementation
- Vertical progress bar
- Dynamic height calculation
- Smooth transitions
- Previous page functionality
- Mobile-optimized layout

### Image Handling
- Optimized image loading
- Responsive image sizes
- Priority loading for main images
- SVG support for icons
- Proper aspect ratio maintenance

## 🎨 Styling
- Tailwind CSS for utility-first styling
- Custom animations
- Responsive typography
- Dynamic opacity states
- Backdrop blur effects

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Responsive Features
- Mobile-optimized navigation
- Responsive typography
- Adaptive image sizes
- Touch-friendly interactions
- Optimized layout for all screen sizes

## 🎯 Performance Optimizations
- Image optimization
- Lazy loading
- Smooth animations
- Efficient state management
- Optimized transitions

## 🔧 Dependencies
- Next.js
- React
- Tailwind CSS
- Next/Image
- Custom hooks for animations

## 📄 License
This project is licensed under the MIT License.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
