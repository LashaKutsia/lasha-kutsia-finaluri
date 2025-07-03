# Lasha Kutsia Finaluri

A modern React application built with Vite, TypeScript, Redux Toolkit, React Router, and i18n. This project follows a modular and scalable architecture suitable for production-grade frontend development.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Project Structure](#project-structure)

## Features

- ⚡ Vite for fast builds and hot module replacement
- ⚛️ React 19 with Hooks
- 🔁 State management using Redux Toolkit
- 🌐 Multilingual support via `i18next` and `react-i18next`
- 🔀 Client-side routing with React Router v7
- 🌍 Country flag support with `react-world-flags`
- 🧠 Modular folder structure with reusable components, hooks, and helpers
- 🛠️ Type-safe with TypeScript
- 💅 SCSS support for component-based styles
---

# Getting Started

## Prerequisites

Make sure you have:

- Node.js (v18+)
- npm or yarn installed globally

## Installation

```bash
git clone https://github.com/LashaKutsia/lasha-kutsia-finaluri.git
cd lasha-kutsia-finaluri
yarn install
yarn dev
```

## 🧱 Project Structure

```bash
lasha-kutsia-finaluri/
├── public/                     # Static public assetsd
├── src/                        # Application source code
│   ├── app/                    # Configuration for global state using react
│   ├── assets/                 # Static files (e.g. images, fonts)d
│   ├── components/             # Reusable UI components
│   │   ├── common/             # Generic components
│   │   └── layout/             # Layout-specific components (e.g. Navbar, Footer)
│   ├── context/                # Custom React Context providers
│   ├── features/               # Redux features slices, thunks and API requests
│   ├── helpers/                # Utility and helper functions
│   ├── hooks/                  # Custom React hooks
│   ├── i18n/                   # i18n configuration and translation files
│   ├── lib/                    # Instance configurations for Axios and other libraries
│   ├── pages/                  # Page components for routes
│   ├── routes/                 # Routing configuration
│   ├── scss/                   # Global SCSS styles and variables
│   ├── types/                  # Global TypeScript types and interfaces
│   ├── App.tsx                 # Root React component
│   ├── main.tsx                # React app entry point
│   └── index.scss              # Root stylesheet
├── .env                        # Environment variables
├── .gitignore                  # Files and folders to ignore in Git
├── index.html                  # HTML template used by Vite
├── package.json                # Project metadata and scripts
├── README.md                   # Project documentation
├── tsconfig.json               # Base TypeScript configuration
├── tsconfig.app.json           # App-specific TypeScript config
├── tsconfig.node.json          # Node-specific TypeScript config
├── vite.config.ts              # Vite configuration file
├── yarn.lock                   # Yarn lockfile
                 # Project documentation

