# Project Overview: ElderCode Website

This project is the official website for ElderCode services, a service that transforms no-code applications into high-quality, engineered services. The website is a single-page application built with a modern frontend stack.

**Author:** Benny Daon

## Key Technologies

- **Framework:** React
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS with `tailwindcss-animate`
- **UI Components:**
    - A combination of custom components and primitives from Radix UI.
    - The structure suggests the use of `shadcn/ui` conventions (e.g., `components/ui`, `lib/utils.ts`).
- **Routing:** React Router DOM (`react-router-dom`)
- **State Management/Data Fetching:** TanStack Query (`@tanstack/react-query`)
- **Forms:** React Hook Form (`react-hook-form`) with Zod (`zod`) for validation.
- **Linting:** ESLint

## Available Scripts

The following scripts are defined in `package.json`:

- `npm run dev`: Starts the development server using Vite.
- `npm run build`: Creates a production-ready build of the application.
- `npm run build:dev`: Creates a development build.
- `npm run lint`: Lints the codebase using ESLint to check for errors and style issues.
- `npm run preview`: Serves the production build locally for previewing.

## Project Structure Highlights

- `src/main.tsx`: The main entry point of the application.
- `src/App.tsx`: The root component of the application.
- `src/pages/`: Contains the main page components (`Index.tsx`, `NotFound.tsx`).
- `src/components/ui/`: Contains reusable, generic UI components (e.g., Button, Card, Input), following `shadcn/ui` patterns.
- `src/components/sections/`: Contains larger, page-specific sections composed from the UI components (e.g., HeroSection, ServicesSection).
- `public/`: Contains static assets like `favicon.ico` and `robots.txt`.
