# Project Overview: ElderCode Website

This project is the official website for ElderCode services, a service that transforms no-code applications into high-quality, engineered services. The website is a single-page application built with a modern frontend stack.

**Author:** Benny Daon

## Key Technologies

- **Build Tool:** Hugo
- **Language:** TypeScript
- **Styling:** Tailwind CSS with `tailwindcss-animate`
- **UI:** Go HTML templates with Tailwind CSS.
- **Forms:** netlify forms
- **Linting:** ESLint

## Available Scripts

- `hugo server -D &`: Starts the development server.
- `hugo`: Creates a production-ready build of the application.
- `hugo server`: Serves the production build locally for previewing.

## Project Structure Highlights

- **Content:** Markdown files in `content/` and data in `data/*.yaml`.
- **Layout:** Go HTML templates in `layouts/`.
- **Styling:** Tailwind CSS configured in `tailwind.config.js` and `assets/css/`.

## Local Development
- The dev server runs on `http://localhost:1313`

## Styles
- Avoid using `any` in TypeScript. Prefer specific types or `unknown` for better type safety.

## TODO 

- Replace "Ready to Scale up" With "Coming Soon" and a subtitle: "launching this september" And a single field form the email with a button: "Keep Me Posted". 
