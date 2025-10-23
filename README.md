# 🚀 PLP Task Manager & API Dashboard: Mastering Front-End Development

## Project Overview

This is a comprehensive, single-page application (SPA) built with **React.js** and styled exclusively using **Tailwind CSS**. It serves as the final project for Week 3 of the front-end development curriculum, demonstrating core modern web development practices: component architecture, state management with hooks, custom utilities, context-based theming, and API integration.

## ✨ Key Features Implemented

| Feature Area | Implemented Tasks |
| :--- | :--- |
| **Component Architecture** | Reusable `Button`, `Card`, `Navbar`, and `Footer` components built with props for high reusability. Unified via a responsive `AppLayout`. |
| **State & Hooks** | Full **Task Manager** (Add, Toggle, Delete, Filter) using `useState` and `useMemo` for efficient state logic. |
| **Custom Hooks** | **`useLocalStorage`** hook implemented for task persistence across browser sessions. |
| **Context API** | **`ThemeContext`** implemented for a site-wide **Light/Dark Mode** theme switcher using Tailwind's `dark:` classes. |
| **API Integration** | Dedicated API Data page fetching and displaying posts from **JSONPlaceholder**. |
| **Data Handling** | Implements **Loading** and **Error** states, client-side **Search** filtering, and **Pagination** controls for fetched data. |
| **Styling** | Fully **responsive** design implemented with Tailwind CSS utility classes (using `sm:`, `md:`, `lg:` prefixes). |

***

## 🔗 Live Application & Repository

| Type | Link |
| :--- | :--- |
| **Live Demo URL(https://task-manager-orcin-beta.vercel.app/)]** |
| **GitHub Repository** (https://task-manager-orcin-beta.vercel.app/) |

***

## 🖼️ Screenshots

| Task Manager (Light Mode) | API Dashboard (Dark Mode) |
| :---: | :---: |
| [Insert relative path to your Task Manager screenshot here] | [Insert relative path to your API Dashboard screenshot here] |

***

## 🛠️ Tech Stack

* **Frontend Framework:** React.js (with JSX)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **API:** JSONPlaceholder (public test API)
* **Deployment:** GitHub Pages (`gh-pages`)

***

## ⚙️ Setup and Installation

Follow these steps to set up and run the project locally.

### Prerequisites

* Node.js (v18 or higher recommended)
* npm (or yarn/pnpm)

### Steps

1.  **Clone the Repository:**
    ```bash
    git clone [Your Repository URL]
    cd react-js-jsx-and-css-mastering-front-end-development-Duncanmaina58
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Development Server:**
    ```bash
    npm run dev
    ```
    The application will typically open at `http://localhost:5173`.

***

## 🚀 Deployment

The project is configured for deployment to GitHub Pages via the `gh-pages` package.

1.  **Build and Deploy:**
    ```bash
    npm run deploy
    ```
    *(This script executes the build and pushes the contents of the `dist` folder to the `gh-pages` branch.)*

2.  **GitHub Configuration:** Navigate to **Settings > Pages** on your GitHub repository and ensure the source branch is set to **`gh-pages`**.

***

## 📂 Project Structure
