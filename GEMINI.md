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

- ✅ move the form to its own page and in its place in the home page put "Coming soon"
- ✅ remove the border around the section that begins with "Describe the core user flows of your application."
- ✅ Refactor texts our of layout/index.html and into a new data/index.yaml file
- ✅ Add a new section to the home page called "Menu of Services".
- ✅ Change "Request Analysis & quote" to "Menu of Services" and change the link to the menu's anchor
- ✅ Reformat the menu section:
-- Bring the delivery time up to the Item menu, keeping it's own style
-- Below "Menu of Services", reformat the line as a menu item. the dish is "A la carte services to get you to the next level" and "<delivery time>" is the delivery time