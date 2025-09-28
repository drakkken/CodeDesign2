# Code Export Popup Component

A React application featuring a modal popup component for code export functionality with HTML & CSS and Next.JS options.

## Features

- Interactive popup modal with close functionality
- Tab switching between HTML & CSS and Next.JS export options
- Customizable checkboxes for export preferences
- Responsive design with dark theme
- Clean, modern UI with rounded corners and smooth transitions

## Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js) or yarn

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd <your-project-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you're using yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal) to view the application.

## Project Structure

```
src/
├── components/
│   ├── Button.jsx
│   ├── Popup.jsx
│   └── Popup.css
├── assets/
│   ├── 1.svg
│   ├── 2.svg
│   └── react.svg
├── App.jsx
└── main.jsx
```

## Usage

- Click the "EXPORT CODE" button to open the popup modal
- Switch between "HTML & CSS" and "Next.JS" tabs
- Toggle export options using the checkboxes
- Click the download button or close (X) button to dismiss the modal

## Components

### Popup Component
The main modal component that handles:
- Tab switching functionality
- Checkbox state management  
- Export option selection
- Modal open/close behavior

### Button Component
A reusable button component used to trigger the popup.

## Customization

You can customize the popup appearance by modifying the CSS variables and styles in `Popup.css`. Key customizable elements include:
- Background colors
- Border radius values
- Padding and spacing
- Typography styles

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Technologies Used

- React 18
- Vite
- CSS3
- SVG icons

## License

This project is open source and available under the [MIT License](LICENSE).