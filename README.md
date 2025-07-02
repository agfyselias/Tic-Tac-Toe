# ❌🟢 Tic-Tac-Toe Game (React + TypeScript)

A simple two-player Tic-Tac-Toe desktop game built with React and TypeScript. Played on the same device (no online multiplayer), it supports name editing, move logging, automatic turn switching, and a game-over popup for wins or draws.

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
- CSS
- Vite: v7.0.0

---

## 🧱 Component Overview

- **`App.tsx`** – Main layout and state manager
- **`GameBoard.tsx`** – Renders the 3×3 grid and handles clicks
- **`Players.tsx`** – Lists both players and their symbols
- **`Player.tsx`** – Editable player info
- **`GameLog.tsx`** – Displays move history
- **`GameOver.tsx`** – Shows winner or draw popup with a "Rematch" button

---

## 🚀 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/Tic-Tac-Toe.git
   cd Tic-Tac-Toe
