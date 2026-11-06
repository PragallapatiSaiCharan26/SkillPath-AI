# SkillPath AI 🚀

**SkillPath AI** is an interactive, browser-based career-awareness and job-preparation platform designed specifically for college students. It bridges the gap between academic learning and industry expectations by helping students explore career paths, evaluate their skills, follow structured roadmaps, discover high-quality free learning resources, build standout portfolios, and practice interview questions.

---

## 🎯 Project Objectives

1. **Demystify Tech Careers**: Provide college students with clear, realistic explanations of what different tech roles actually do day-to-day.
2. **Identify Skill Gaps**: Help students assess their current skills against real-world industry requirements through interactive self-assessments.
3. **Curate Free Learning**: Guide learners to high-quality, 100% free tutorials, documentation, and courses without requiring paid subscriptions.
4. **Step-by-Step Roadmaps**: Offer visual, stage-by-stage learning plans (Beginner → Intermediate → Job-Ready).
5. **Practical Portfolio Guidance**: Suggest real-world projects that recruiters actually care about, along with guidance on how to present them.
6. **Confidence in Interviews**: Equip students with common technical and conceptual interview questions with clear explanations.

---

## 🧭 Initial Career Paths

In this first version (v1.0), SkillPath AI focuses on four foundational and high-demand career tracks:

| Career Path | Overview | Core Technologies |
| :--- | :--- | :--- |
| **Python Developer** | Backend development, scripting, automation, and API design. | Python, OOP, Flask/FastAPI basics, Git, SQL basics |
| **Frontend Developer** | Creating responsive, interactive user interfaces for websites and web apps. | HTML5, CSS3, JavaScript (ES6+), Web APIs, Git |
| **Data Analyst** | Analyzing datasets to extract meaningful business insights and trends. | Python/R, SQL, Excel/Google Sheets, Data Viz (Tableau/PowerBI/Matplotlib) |
| **Java Developer** | Enterprise software, backend web services, and robust application architecture. | Java, OOP, Core Collections, Basic Spring Boot concepts, SQL |

---

## 🌟 Planned Features

- **Career Path Explorer**: Interactive cards detailing what each role entails, daily responsibilities, and key prerequisites.
- **Skill Gap Self-Assessment**: A quick interactive quiz/checklist where students mark what they already know and instantly see what they still need to learn.
- **Structured Learning Roadmaps**: Visual milestones breaking down learning into manageable phases.
- **Free Resource Library**: Curated links to free, high-quality documentation, YouTube playlists, interactive websites, and open textbooks.
- **Portfolio Project Ideas**: Beginner to intermediate project blueprints complete with problem statements and suggested features.
- **Interview Preparation Corner**: Frequently asked conceptual and coding questions with beginner-friendly explanations.
- **Progress Tracking (Local)**: Allows students to save their checklist progress directly in their web browser using localStorage without needing a database login.

---

## 🛠️ Technology Stack

We are intentionally keeping the technology stack lightweight, accessible, and 100% free:

- **HTML5**: Provides the structural backbone of all web pages.
- **CSS3**: Styles the platform (colors, typography, responsive mobile-friendly layouts, and cards).
- **Vanilla JavaScript**: Handles interactivity (interactive quizzes, filtering resources, dynamic progress calculation, and tabs) without complex external frameworks.
- **Browser LocalStorage**: Stores the user's checklist progress directly in their browser—no backend server, database, or account registration required.
- **Zero Paid Dependencies**: No paid APIs, no paid libraries, no cloud subscriptions.

---

## 📂 Project Structure

```text
SkillPath-AI/
│
├── index.html              # Main landing page and layout
├── css/
│   └── style.css           # Global styles, typography, layout, and theme variables
├── js/
│   ├── app.js              # Interactivity, event handling, and logic
│   └── data.js             # Career paths, roadmaps, quiz datasets, and resources
├── assets/                 # Icons, illustrations, and images
└── README.md               # Project overview and documentation
```

---

## 👥 Team & Collaboration (5 Members)

Because our team consists of five college students, dividing the work cleanly helps everyone contribute effectively without conflicts:

| Member / Role Focus | Primary Areas | Key Files |
| :--- | :--- | :--- |
| **Member 1 (Lead & Architecture)** | Navigation, global layout, and project coordination | `index.html`, `css/style.css` |
| **Member 2 (Career Data & Explorer)** | Career profiles, requirements, and explorer UI | `pages/explorer.html`, `js/data.js` |
| **Member 3 (Assessment & Logic)** | Skill gap quiz and progress calculation | `pages/assessment.html`, `js/app.js` |
| **Member 4 (Roadmaps & Resources)** | Learning roadmaps and curated free learning links | `pages/roadmap.html`, `pages/resources.html` |
| **Member 5 (Portfolio & Interview Prep)**| Project recommendations and interview Q&A | `pages/portfolio.html`, `pages/interview.html` |

---

## 🚀 How to Run the Project

No installation, build tools, or command-line commands are required!

1. Open your code editor (e.g., VS Code).
2. Open the `SkillPath-AI` folder.
3. Open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Firefox, etc.) or use the **Live Server** extension in VS Code.
