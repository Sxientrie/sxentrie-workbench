// @ts-check

// This file is the source of truth for the portfolio's tailwind configuration.
// It imports the base configuration from the UI package and extends it with
// the content paths for this specific application.

import path from 'node:path'
import { createRequire } from 'node:module'
import uiConfig from '@sxentrie/ui/tailwind.config'

const require = createRequire(import.meta.url)
const uiPath = path.dirname(require.resolve('@sxentrie/ui/package.json'))

/** @type {import('tailwindcss').Config} */
export default {
  presets: [uiConfig],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // Use the resolved path to the UI package to ensure Tailwind
    // can find the component source files.
    path.join(uiPath, 'src/**/*.{js,ts,jsx,tsx}'),
  ],
}