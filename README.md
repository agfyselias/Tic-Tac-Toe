# ❌🟢 Tic-Tac-Toe Game (React + TypeScript + SCSS)

A simple two-player Tic-Tac-Toe desktop game built with React and TypeScript, effectively utilizing and handling the state functionality. Played on the same device (no online multiplayer), it supports name editing, move logging, automatic turn switching, and a game-over popup for wins or draws.

---

# ⚠️ **Disclaimer**:
This project is based on the _"React – The Complete Guide (incl. Redux)"_ course by [Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/).The layout, design and CSS are largely derived from the course materials. All logic and components were re-coded in **TypeScript** and **SCSS** and restructured by me during the learning purposes.

---

# 🧠 What I Did Differently

- 🔄 **Converted the entire codebase to TypeScript**, also adding interfaces and enums
- 🧩 **Refactored component structure**, for better separation of concerns
- 🧪 **Handled state immutably and predictably**, using modern React practices
- 📁 **Used Vite for project setup**, instead of Create React App
- 🎨 **Applied global and scoped styles using SCSS**, instead of keeping a global CSS file

---

## 🎮 Features

- ✅ 3×3 game board
- ✅ Two-player gameplay (auto turn switching)
- ✅ Editable player names
- ✅ Move log showing each turn
- ✅ Highlights the active player
- ✅ Game Over popup when someone wins or it’s a draw
- ✅ "Rematch" button resets the game
- ✅ Type-safe with TypeScript
- ✅ Clean component structure using props and state

---

## 📸 Preview

![Game Screenshot](https://github.com/user-attachments/assets/f2c587e1-79e0-4ffb-84e1-ce27e7aa69d5)

---

## 🛠 Tech Stack

- React: v19.1.0
- Node v20.19.3
- TypeScript: v5.8.3
- SCSS
- Vite: v7.0.0

---

## 🧱 Component Overview

- **`App.tsx`** – Main layout and state manager
- **`GameBoard.tsx`** – Renders the 3×3 grid and handles clicks
- **`Players.tsx`** – Lists both players and their symbols
- **`Player.tsx`** – Editable player info
- **`GameLog.tsx`** – Displays move history
- **`GameOver.tsx`** – Shows winner or draw popup with a "Rematch" button
- **`PreGame.tsx`** – TO-DO
- **`GameHints.tsx`** – TO-DO

---

## 🚀 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/Tic-Tac-Toe.git
   cd Tic-Tac-Toe
