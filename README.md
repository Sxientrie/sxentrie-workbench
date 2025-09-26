Sxentrie Workbench! This is the foundational monorepo for the Sxentrie design system, housing a reusable component library built with React and Tailwind CSS, comprehensive Storybook documentation, and the various web applications built upon this system.

## What's Inside?

This repository is a monorepo managed by [Turborepo](https://turbo.build/repo). It contains the following packages and applications:

-   **`packages/ui`**: The core component library, built with React and TypeScript. This is the source for all reusable UI elements.
-   **`packages/config-*`**: Shared configurations for tools like ESLint and TypeScript to ensure consistency across the entire workbench.
-   **`apps/docs`**: The Storybook documentation site, which consumes the `ui` package to provide interactive documentation and examples for every component.
-   **`apps/portfolio`**: An example web application built using the `@sxentrie/ui` component library.

## Tech Stack

This project is built with a modern, performance-oriented technology stack:

-   [React 19](https://react.dev/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Vite](https://vitejs.dev/)
-   [Tailwind CSS 4](https://tailwindcss.com/)
-   [Storybook](https://storybook.js.org/)
-   [Turborepo](https://turbo.build/repo)

## Getting Started

To get the project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Sxientrie/sxentrie-workbench.git](https://github.com/Sxientrie/sxentrie-workbench.git)
    cd sxentrie-workbench
    ```

2.  **Install dependencies:**
    This project uses `npm` as its package manager. The install command will link all the local packages and applications together.
    ```bash
    npm install
    ```

3.  **Run the development servers:**
    This command uses Turborepo to start the development servers for all applications (`portfolio` and `docs`) simultaneously.
    ```bash
    npm run dev
    ```
    -   The portfolio app will be available at `http://localhost:5173` (or the next available port).
    -   The Storybook docs will be available at `http://localhost:6006`.

## Available Scripts

The following scripts can be run from the root of the repository:

-   `npm run dev`: Starts the development servers for all applications.
-   `npm run build`: Builds all packages and applications for production.
-   `npm run lint`: Lints all the code in the monorepo.
