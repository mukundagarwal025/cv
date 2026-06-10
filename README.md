# Mukund Agarwal — Portfolio Website

Personal portfolio and CV website for **Mukund Agarwal**, Senior DevOps & Platform Engineering Professional.

🌐 **Live Site:** `https://<your-github-username>.github.io/<repo-name>/`

---

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JavaScript (no build tools required)
- Hosted via **GitHub Pages** with automated deployment via GitHub Actions

## Repository Structure

```
├── index.html                    # Main portfolio page
├── css/
│   └── style.css                 # All styles
├── js/
│   └── main.js                   # Scroll animations, navbar, interactions
└── .github/
    └── workflows/
        └── deploy.yml            # GitHub Actions — auto-deploy to Pages
```

## Deploy to GitHub Pages

1. **Create a new GitHub repo** (e.g., `mukund-portfolio`)
2. Push this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In your repo → **Settings → Pages → Source**: select **GitHub Actions**
4. The workflow runs automatically on every push to `main`
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## Features

- Responsive design (mobile, tablet, desktop)
- Animated hero with key metrics
- Scrolling timeline for work experience
- Skill grid with tech categories
- Certifications & education section
- Contact links

---

© 2026 Mukund Agarwal
