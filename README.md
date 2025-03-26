# Custom 404 Page
# Haapy Your New Year
I wish you good luck
A modern, animated 404 page built with Next.js 14 and Tailwind CSS. This project features a clean, minimalist design with smooth animations and a user-friendly interface.

## 🌟 Features

- **Modern Design**
  - Clean and minimalist layout
  - Gradient background
  - Smooth fade-in animations
  - Responsive design for all devices

- **User Experience**
  - Clear error messaging
  - Easy navigation back to home
  - Smooth animations
  - Mobile-friendly interface

- **Technical Features**
  - Built with Next.js 14
  - Tailwind CSS for styling
  - TypeScript for type safety

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/omidjavaherii/my-404-page.git
   ```

2. Navigate to the project directory:
   ```bash
   cd my-404-page
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 🎨 Customization

### Colors
The theme colors can be customized in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#046D8B',
    dark: '#035A73',
  },
  // ... other colors
}
```

### Content
- Update the error message in `src/app/not-found.tsx`
- Modify the button text and styling
- Customize the background gradient

## 📦 Project Structure

```
my-404-page/
├── src/
│   ├── app/
│   │   ├── not-found.tsx    # 404 page component
│   │   └── layout.tsx       # Root layout
│   ├── components/
│   │   └── ui/             # UI components
│   └── styles/             # Global styles
└── package.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🤝 Contact

Project Link: [https://github.com/omidjavaherii/my-404-page](https://github.com/omidjavaherii/my-404-page)
