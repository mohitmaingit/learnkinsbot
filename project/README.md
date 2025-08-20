# LearnerBot - AI Learning Assistant

A modern, interactive AI learning companion designed specifically for young learners aged 10-15. Built with React, TypeScript, and powered by GPT-4 through OpenRouter.

## ✨ Features

- 🤖 **Interactive AI Chat** - Real-time conversations with an enthusiastic AI tutor
- 🎨 **Beautiful Dark Theme** - Modern gradient design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- 🏆 **Gamification** - XP points, levels, badges, and learning streaks
- 📊 **Progress Tracking** - Visual progress dashboard with detailed stats
- 🎯 **Interactive Quizzes** - Built-in quiz system with explanations
- ✨ **Smooth Animations** - Framer Motion powered transitions and effects
- 📝 **Markdown Support** - Rich text formatting in AI responses
- 🔒 **Secure API Integration** - Environment-based configuration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenRouter API key

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd learnerbot-ai-assistant
   npm install
   ```

2. **Configure your API key:**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your OpenRouter API key:
   ```env
   VITE_OPENROUTER_API_KEY=your_actual_api_key_here
   VITE_SITE_URL=https://learnerbot.ai
   VITE_SITE_NAME=LearnerBot AI Assistant
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Badge.tsx
│   ├── Avatar.tsx             # User/bot avatar component
│   ├── ChatInput.tsx          # Message input with voice support
│   ├── ChatInterface.tsx      # Main chat container
│   ├── LandingScreen.tsx      # Welcome/onboarding screen
│   ├── MessageBubble.tsx      # Individual message display
│   ├── ProgressBar.tsx        # Progress visualization
│   ├── ProgressScreen.tsx     # Detailed progress dashboard
│   └── TypingIndicator.tsx    # Loading animation
├── data/
│   ├── badges.ts              # Available badges configuration
│   └── quizQuestions.ts       # Sample quiz questions
├── services/
│   ├── apiService.ts          # OpenRouter API integration
│   └── progressService.ts     # Progress tracking & storage
├── types/
│   └── index.ts               # TypeScript type definitions
├── App.tsx                    # Root component with screen routing
└── main.tsx                   # Application entry point
```

## 🎮 Features Overview

### 🤖 AI Chat Interface
- Real-time conversations with GPT-4
- Contextual responses tailored for young learners
- Markdown formatting support
- Quick reply options for common questions

### 🏆 Gamification System
- **XP Points**: Earn points for every interaction
- **Levels**: Progress through learning levels
- **Badges**: Unlock achievements for milestones
- **Streaks**: Maintain daily learning habits

### 📊 Progress Tracking
- Visual progress bars and statistics
- Learning accuracy tracking
- Badge collection display
- Motivational insights and tips

### 🎯 Interactive Learning
- Built-in quiz system
- Topic-based learning paths
- Voice input support (planned)
- Personalized learning recommendations

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_OPENROUTER_API_KEY` | Your OpenRouter API key | Yes |
| `VITE_SITE_URL` | Your site URL for API attribution | No |
| `VITE_SITE_NAME` | Your site name for API attribution | No |

### API Integration

The app uses OpenRouter to access GPT-4. You can easily modify `src/services/apiService.ts` to work with other AI providers:

```typescript
// Example for different model
model: 'anthropic/claude-3-sonnet'

// Example for custom API endpoint
const response = await fetch('https://your-api.com/chat', {
  // your configuration
});
```

## 🎨 Customization

### Styling
- Built with Tailwind CSS
- Custom color system with gradients
- Responsive breakpoints
- Dark theme optimized

### AI Personality
Modify the system prompt in `apiService.ts` to customize LearnerBot's personality and teaching style.

### Badges & Rewards
Add new badges in `src/data/badges.ts` and implement earning logic in `progressService.ts`.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Strict mode enabled

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenRouter** for AI API access
- **Framer Motion** for smooth animations
- **Tailwind CSS** for styling system
- **Lucide React** for beautiful icons
- **React Markdown** for rich text rendering

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

---

**Made with ❤️ for young learners everywhere**