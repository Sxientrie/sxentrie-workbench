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
-   [pnpm](https://pnpm.io/)

## Getting Started

To get the project up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Sxientrie/sxentrie-workbench.git
    cd sxentrie-workbench
    ```

2.  **Install pnpm:**
    If you don't have pnpm installed globally, you'll need to install it first.
    ```bash
    npm install -g pnpm
    ```

3.  **Configure the workspace:**
    This project uses pnpm workspaces. Create a `pnpm-workspace.yaml` file in the root of the project with the following content to define the workspace structure:
    ```yaml
    packages:
      - 'apps/*'
      - 'packages/*'
    ```

4.  **Install dependencies:**
    This command will install dependencies and link all the local packages and applications together.
    ```bash
    pnpm install
    ```

5.  **Run the development servers:**
    This command uses Turborepo to start the development servers for all applications (`portfolio` and `docs`) simultaneously.
    ```bash
    pnpm run dev
    ```
    -   The portfolio app will be available at `http://localhost:5173` (or the next available port).
    -   The Storybook docs will be available at `http://localhost:6006`.

## Available Scripts

The following scripts can be run from the root of the repository:

-   `pnpm run dev`: Starts the development servers for all applications.
-   `pnpm run build`: Builds all packages and applications for production.
-   `pnpm run lint`: Lints all the code in the monorepo.
