/* ============================================================
   PAWAN BUILDZ — data file. EDIT THIS FILE to manage projects.
   ------------------------------------------------------------
   HOW TO ADD A NEW PROJECT:
   1. Copy one of the objects below, paste it at the top of the
      `projects` list, and change the fields.
   2. status: use "Completed", "In progress", or "Sample".
   3. category: use one of "Python", "Automation",
      "Web Apps", "Data Tools" (these match the filter buttons).
   4. For links you don't have yet, use "#" — the site will
      show that button as "Coming soon" automatically.
   5. Save the file, then republish (see README.md).
   ============================================================ */

const PROJECTS = [
  {
    title: "Code Vexa — AI Debugging Workspace",
    description:
      "A full-stack debugging workspace: paste code plus the error message or stack trace and get a structured analysis — suspected cause, severity, bug location, a fix shown as a diff, step-by-step explanation, prevention tips and a confidence score. Live in production with demo mode.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Netlify Functions", "AI APIs"],
    category: "Web Apps",
    status: "Completed",
    repo: "https://github.com/pawankumar161913-lgtm/code-vexa",
    demo: "https://code-vexa-f4c2.web.app"
  },
  {
    title: "SmartSpend AI — Smart Expense Tracker",
    description:
      "A smart spending-tracker web app that helps you record expenses and understand where your money goes. Installable and shareable, hosted free on GitHub Pages.",
    technologies: ["JavaScript", "HTML/CSS", "GitHub Pages"],
    category: "Data Tools",
    status: "Completed",
    repo: "https://github.com/pawankumar161913-lgtm/smartspend-embed",
    demo: "https://pawankumar161913-lgtm.github.io/smartspend-embed/"
  }
];
