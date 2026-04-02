# Chef-Claude 🧑‍🍳

[![React](https://img.shields.io/badge/React-19.2.0-brightgreen)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-orange)](https://vitejs.dev)

## Description
Chef-Claude is an interactive web application built with React and Vite. Users can add cooking ingredients to a dynamic list and, once they have 3 or more ingredients, unlock a personalized recipe recommendation (currently a hardcoded Beef Bolognese Pasta recipe tailored to common ingredients like pasta, ground beef, and tomato paste). The app features a clean UI with a globe icon header, accessible form inputs, and live updates.

![App Demo](image.png)

## Features
- **Dynamic Ingredient List**: Add ingredients via form; list updates live with `aria-live="polite"` for screen readers.
- **Conditional Recipe Unlock**: "Get Recipe" button appears after 3+ ingredients.
- **Recipe Display**: Toggles detailed recipe (ingredients, instructions) for Beef Bolognese Pasta.
- **Responsive Design**: Uses Inter font, simple CSS styling.
- **State Management**: React `useState` hooks for ingredients and recipe visibility.

## Tech Stack
- **Frontend**: React 19.2.0 (with React Compiler via Babel)
- **Build Tool**: Vite 7.3.1
- **Linting**: ESLint 9.39.1 (with React hooks/refresh plugins)
- **Styling**: CSS (src/index.css), Google Fonts (Inter)
- **Assets**: Local images (globe.png, react.svg)

## Installation
1. Clone the repo or navigate to the project directory.
2. Install dependencies:
   ```
   npm install
   ```
3. Start development server:
   ```
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage
1. Enter an ingredient (e.g., "oregano") and click "Add Ingredient".
2. Watch the list grow.
3. After 3+ ingredients, click "Get a recipe" to reveal Chef-Claude's Beef Bolognese recommendation.
4. Toggle recipe visibility as needed.

![Ingredients List](image-1.png)
![Recipe](image-2.png)

## Development Scripts
- `npm run dev` - Start dev server with HMR.
- `npm run build` - Build for production (`dist/` folder).
- `npm run lint` - Lint code.
- `npm run preview` - Preview production build.

## Future Enhancements
- Integrate real recipe API (e.g., Spoonacular) for dynamic recipes.
- Persist ingredients (localStorage).
- Add delete/edit ingredients.
- More recipes based on ML/ingredients matching.

## Learnings
See [learnings.md](learnings.md) for development notes.
- Event Listners
- State
- Conditional rendering
- Forms
- State Management Strategies

## License
MIT License - feel free to use and modify!
