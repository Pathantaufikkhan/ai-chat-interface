# AI Command Chat 💬⚡

A plugin-powered AI-style chat interface where users can type slash commands like:

- `/weather Tokyo`
- `/calc (5 + 2) * 3`
- `/define innovation`

Built with **React + Vite + Tailwind CSS** — styled with dynamic plugin cards and persistent chat history.

---

## 🔧 Tech Stack

- ⚛️ React + Vite
- 🎨 Tailwind CSS
- 💬 Custom command parser + plugin manager
- 🌤️ [OpenWeatherMap API](https://openweathermap.org/)
- 📖 [DictionaryAPI.dev](https://dictionaryapi.dev/)
- 🧮 [Math.js](https://mathjs.org/)
- 💾 LocalStorage for persistence

---

## ✨ Features

- ✅ AI-like chat interface with bubble styling
- ✅ Plugin architecture with `/command [arg]` support
- ✅ Real-time data from public APIs
- ✅ Rich response cards (color-coded and icon-based)
- ✅ Auto-persist chat history using localStorage
- ✅ “Clear Chat” button to reset
- ✅ Responsive design with Tailwind

---

## 🖼️ Screenshots

| Chat UI | Rich Plugin Card |
|--------|------------------|
| ![Chat UI](./screenshots/chat-ui.png) | ![Plugin Card](./screenshots/plugin-card.png) |

> 💡 Place screenshots inside a `/screenshots` folder in your project root.

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/ai-command-chat.git
cd ai-command-chat

# Install dependencies
npm install

# Start the app
npm run dev
