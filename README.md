# Next.js Claude AI Chatbot

A conversational chat application built with Next.js and Anthropic's Claude AI. This chatbot provides a clean, intuitive interface for interacting with Claude's latest models.

## Features

- 🤖 Full support for Claude 3 models (Opus, Sonnet, and Haiku)
- ⚡ Real-time streaming responses
- 📝 Chat history with persistent storage
- 🎨 Clean, modern UI built with Tailwind CSS
- 🌙 Dark/Light mode support
- 💾 Chat history organization by time periods
- 🔄 New chat creation and history management
- 📱 Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js 18 or later
- PNPM package manager
- Anthropic API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SomeoneInfo143/claude-chatbot/
cd claude-chatbot
```

2. Install dependencies:
```bash
pnpm install
```

3. Install Anthropic SDK:
```bash
pnpm add @anthropic-ai/sdk
```

4. Update the .env.local file in the root directory:
```env
# Get your Anthropic API key here: https://console.anthropic.com/
ANTHROPIC_API_KEY=****

# Generate a random secret: https://generate-secret.vercel.app/32 or `openssl rand -base64 32`
AUTH_SECRET=****
```


4. Start the development server:
```
pnpm dev
```

5. Open http://localhost:3000 in your browser

## Models Available

The chatbot supports all Claude 3 models:

- Claude 3 Opus - Most capable model for complex tasks
- Claude 3 Sonnet - Balanced performance and speed
- Claude 3 Haiku - Fastest model for simple tasks

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Claude AI](https://anthropic.com/claude) - AI model provider
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [Vercel AI SDK](https://sdk.vercel.ai/docs) - AI interaction helpers

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Modified to work exclusively with Claude AI
- UI components from shadcn/ui
