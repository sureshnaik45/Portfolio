# 👨‍💻 Portfolio - KIMAVATH SURESHNAIK

A modern, responsive personal portfolio website built to showcase my Full Stack MERN development skills, projects, and research publications. Designed with a focus on performance, aesthetics, and user experience.

## Key Features

* **Fully Responsive Design:**
    * Mobile-first architecture using **Tailwind CSS**.
    * Custom hamburger menu for mobile navigation.
    * Adapts seamlessly to tablets, laptops, and large desktops.

* **Interactive UI Elements:**
    * **Typing Animation** in the Hero section to highlight roles (Full Stack Dev, MERN Dev, etc.).
    * **Scroll Animations** using `Framer Motion` for smooth entry effects.
    * **Smooth Scrolling** navigation between sections.

* **Project Showcase:**
    * Dynamic project cards displaying tech stacks and descriptions.
    * Smart linking: Displays "See Files" for research papers and "Live Demo/Code" for web apps.
    * Optimized image handling with hover zoom effects.

* **Contact Integration:**
    * **Mailto Form:** Contact form directly opens the user's default email client with pre-filled subject and body.
    * **Direct Links:** Quick access to GitHub, LinkedIn, and Phone.
    * **Resume Download:** Direct integration with Google Drive for CV download.

## Tech Stack

* **Framework:** React.js + Vite (for fast build tool).
* **Styling:** Tailwind CSS (Utility-first styling).
* **Animations:**
    * `framer-motion` (Scroll reveal animations).
    * `react-type-animation` (Typing effect).
* **Navigation:** `react-scroll` (Smooth scrolling).
* **Icons:** `lucide-react` (Lightweight, consistent icons).

## Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/sureshnaik45/portfolio.git](https://github.com/sureshnaik45/portfolio.git)
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the local server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## Project Structure

* **`src/components/`**: Contains all modular UI sections.
    * `Navbar.jsx`: Responsive navigation.
    * `Hero.jsx`: Main landing area with typing effect and resume link.
    * `About.jsx`: Professional summary.
    * `Skills.jsx`: Categorized technical skills (Frontend, Backend, Tools).
    * `Projects.jsx`: Grid layout of projects with image handling.
    * `Education.jsx`: Timeline of education and certifications.
    * `Contact.jsx`: Contact form and social links.
* **`public/images/`**: Stores local static assets (project screenshots).

## Deployment

This project is optimized for deployment on **Vercel**.

1.  Push code to GitHub.
2.  Import repository to Vercel.
3.  Framework Preset: **Vite**.
4.  Deploy.