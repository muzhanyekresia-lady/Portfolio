# Tanya — Personal Portfolio Website

A static personal portfolio website designed for a **Digital Marketing Specialist & Product Designer**.

Built purely with **HTML5**, **CSS3**, and **Vanilla JavaScript** (zero frameworks, zero build steps, zero backend dependencies). Ready for deployment to **GitHub Pages** and **Vercel**.

---

## 📁 Project Structure

```text
tanya-portfolio/
├── index.html       # Main HTML5 entry point
├── style.css        # Vanilla CSS3 styling & design tokens
├── script.js        # Vanilla JS interactions (nav, modals, form)
├── assets/
│   ├── Tanya-CV.pdf # Resume / CV document
│   ├── images/      # Hero portrait, artwork composition, & project graphics
│   │   ├── hero-portrait.png
│   │   ├── about-composition.png
│   │   ├── project-digital-marketing.jpg
│   │   ├── project-product-design.png
│   │   └── project-case-studies.png
│   └── icons/       # SVG icons
└── README.md        # Documentation & deployment instructions
```

---

## 🎨 Visual Identity & Color Palette

* **Primary Dark Brown:** `#746353` (Hero, Services, Contact, Project Details)
* **Primary Warm Brown / Gold:** `#9D6F3A` (Navigation, Featured Projects, Buttons, Footer)
* **Secondary Warm Gold:** `#A67443` (Service Cards, Badges, Highlights)
* **Light Text / Cream:** `#FFFFFF` / `#F7EFE1`

---

## 🚀 How to Run Locally

### Option 1: Open Directly in Browser
Simply double-click `index.html` to open it in Chrome, Edge, Safari, or Firefox.

### Option 2: Run with any Static Local Server
Run a simple HTTP server from inside the `tanya-portfolio` directory:

```bash
# Using Python built-in HTTP server:
python -m http.server 8080

# Or using Node http-server (if installed):
npx http-server .
```
Then visit: `http://localhost:8080`

---

## 🌐 Deploy to Vercel

1. Push this `tanya-portfolio` folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository.
4. Leave all build settings as default (Framework Preset: **Other**, Build Command: empty, Output Directory: `./`).
5. Click **Deploy**. Your portfolio will be live worldwide in seconds!
