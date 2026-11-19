# 🚗 Vehicle Manager

> A dynamic vehicle management system with persistent storage and a modern glass-morphism UI.  
> Built with vanilla **HTML**, **CSS** & **JavaScript** — no frameworks, no dependencies.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![LocalStorage](https://img.shields.io/badge/Storage-localStorage-blue)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **Add Vehicles** | Select type (car, truck, motorcycle, boat), manufacturer, color picker & price |
| **Persistent Storage** | All data saved to `localStorage` — survives page refresh |
| **Dynamic Table** | Real-time table rendering with row animations |
| **Live Stats** | Total vehicle count & combined value, updated instantly |
| **Delete** | Remove a single vehicle or clear the entire list with confirmation |
| **Validation** | Client-side form validation with Hebrew error messages |
| **Responsive** | Mobile-first layout — adapts from phone to desktop |

---

## 🖥️ Demo

Open `index.html` in any modern browser — no build step, no server required.

> To run locally: clone the repo and double-click `index.html`, or use Live Server in VS Code.

---

## 🏗️ Architecture

```
vehicles-manager/
├── index.html      # Markup — form, table structure, semantic layout
├── style.css       # Styling — glass-morphism, grid, animations, responsive
├── script.js       # Logic — CRUD operations, localStorage, DOM rendering
└── README.md
```

**Separation of concerns** — markup, styling and logic are split into three standalone files with zero coupling beyond standard DOM APIs.

---

## 🔧 Technical Highlights

- **DHTML** — Dynamic HTML via pure DOM manipulation (`createElement`, `innerHTML`, `getElementById`)
- **localStorage** — `JSON.stringify` / `JSON.parse` for object array persistence
- **CSS Custom Properties** — Centralized color tokens on `:root` for easy theming
- **Glass-morphism** — `backdrop-filter: blur()` with layered gradient glows
- **CSS Grid** — Two-column responsive form layout
- **Keyframe Animations** — Floating background orbs, gradient title shift, row slide-in
- **RTL Support** — Full right-to-left Hebrew interface using `dir="rtl"` and Heebo font

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/SamuelSion/vehicles-manager.git

# Open
cd vehicles-manager
open index.html        # macOS
start index.html       # Windows
xdg-open index.html    # Linux
```

---

## 📄 License

MIT
