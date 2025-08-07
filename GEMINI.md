# Project Overview: ElderCode Website

This project is the official website for ElderCode services, a service that transforms no-code applications into high-quality, engineered services. The website is a single-page application built with a modern frontend stack.

**Author:** Benny Daon

## Key Technologies

- **Build Tool:** Hugo
- **Language:** TypeScript
- **Styling:** Tailwind CSS with `tailwindcss-animate`
- **UI Components:**
    - A combination of custom components and primitives from Radix UI.
    - The structure suggests the use of `shadcn/ui` conventions (e.g., `components/ui`, `lib/utils.ts`).
- **Forms:** netlify forms
- **Linting:** ESLint

## Available Scripts

- `hugo server -D &`: Starts the development server.
- `hugo`: Creates a production-ready build of the application.
- `hugo server`: Serves the production build locally for previewing.

## Project Structure Highlights

- `src/main.tsx`: The main entry point of the application.
- `src/App.tsx`: The root component of the application.
- `src/pages/`: Contains the main page components (`Index.tsx`, `NotFound.tsx`).
- `src/components/ui/`: Contains reusable, generic UI components (e.g., Button, Card, Input), following `shadcn/ui` patterns.
- `src/components/sections/`: Contains larger, page-specific sections composed from the UI components (e.g., HeroSection, ServicesSection).
- `public/`: Contains static assets like `favicon.ico` and `robots.txt`.

## Local Development
- The dev server runs on `http://localhost:1313`

## Styles
- Avoid using `any` in TypeScript. Prefer specific types or `unknown` for better type safety.

## TODO 

- ✅ move the form to its own page and in its place in the home page put "Coming soon"
- ✅ remove the border around the section that begins with "Describe the core user flows of your application."
- ✅ Refactor texts our of layout/index.html and into a new data/index.yaml file
- ✅ Add a new section to the home page called "Menu of Services".
- ✅ Change "Request Analysis & quote" to "Menu of Services" and change the link to the menu's anchor
