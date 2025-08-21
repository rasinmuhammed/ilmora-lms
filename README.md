# Ilmora - AI-Powered Learning Companion Platform 🤖📚

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase"/>
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk"/>
  <img src="https://img.shields.io/badge/Vapi.ai-FF6B35?style=for-the-badge&logo=v&logoColor=white" alt="Vapi"/>
</div>

## 🌟 Overview

**Ilmora** is a revolutionary AI-powered learning platform that transforms education through personalized AI companions. Students can create custom learning companions with unique voices, personalities, and teaching styles to make learning engaging, interactive, and effective.

### ✨ Key Features

- 🗣️ **Real-time Voice Conversations** - Natural voice interactions with AI tutors
- 🎯 **Personalized Learning Companions** - Custom AI tutors tailored to your learning style
- 📊 **Progress Tracking** - Comprehensive analytics and learning insights
- 🔖 **Bookmark System** - Save and organize your favorite companions
- 📱 **Responsive Design** - Seamless experience across all devices
- 🎨 **Beautiful UI** - Modern, dark-themed interface with purple accents

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component library
- **Lottie React** - Smooth animations

### Backend & Services
- **Supabase** - Database and real-time features
- **Clerk** - Authentication and user management
- **Vapi.ai** - Voice AI integration
- **Sentry** - Error monitoring and performance tracking

### AI & Voice
- **OpenAI GPT-4** - Intelligent conversation engine
- **ElevenLabs** - High-quality voice synthesis
- **Deepgram** - Speech-to-text transcription

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ilmora.git
cd ilmora
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Fill in your environment variables:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Vapi.ai
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_token

# Sentry (Optional)
SENTRY_AUTH_TOKEN=your_sentry_token
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
ilmora/
├── app/                      # Next.js App Router pages
│   ├── companions/          # Companion management pages
│   ├── my-journey/          # User profile and progress
│   └── subscription/        # Pricing and billing
├── components/              # Reusable React components
│   ├── ui/                 # shadcn/ui components
│   └── ...                 # Custom components
├── lib/                    # Utility functions and configurations
│   ├── actions/            # Server actions
│   ├── supabase.ts         # Database client
│   └── utils.ts            # Helper functions
└── constants/              # Application constants
```

## 💎 Pricing Plans for the future

### 🆓 Basic Plan - **Free Forever**
- 10 Conversations/Month
- 3 Active Companions
- Basic Session Recaps

### 🚀 Core Learner - **$19/month**
*Billed annually*
- Everything in Free
- Unlimited Conversations
- 10 Active Companions
- Inline Quizzes & Recaps
- Monthly Progress Reports
- Save Conversation History

### ⭐ Pro Companion - **$39/month**
*Billed annually*
- Everything in Core
- Unlimited Companions
- Early Access to New Features
- Full Performance Dashboard
- Daily Learning Reminders
- Priority Support

## 🔧 Development Roadmap

### 🚧 Currently in Development

#### Phase 1: Core Features Enhancement
- [ ] **Advanced Analytics Dashboard**
  - Learning streak tracking
  - Subject mastery visualization
  - Performance insights and recommendations
  
- [ ] **Enhanced Companion Customization**
  - More voice options and accents
  - Personality trait sliders
  - Custom avatar generation

#### Phase 2: Learning Experience
- [ ] **Interactive Quizzes & Assessments**
  - Real-time quiz generation during conversations
  - Adaptive difficulty based on performance
  - Comprehensive knowledge testing

- [ ] **Study Materials Integration**
  - PDF document upload and analysis
  - YouTube video content integration
  - Automatic note generation from sessions

#### Phase 3: Social Learning
- [ ] **Companion Marketplace**
  - Share custom companions with community
  - Rating and review system
  - Featured companions section

- [ ] **Study Groups & Collaboration**
  - Virtual study rooms
  - Group learning sessions
  - Peer progress sharing

#### Phase 4: Advanced AI Features
- [ ] **Multimodal Learning**
  - Image recognition for visual learning
  - Whiteboard integration
  - Screen sharing capabilities

- [ ] **Personalized Learning Paths**
  - AI-generated curriculum
  - Adaptive learning recommendations
  - Goal-oriented session planning

#### Phase 5: Mobile & Platform Expansion
- [ ] **Mobile Applications**
  - iOS native app
  - Android native app
  - Offline learning capabilities

- [ ] **Third-party Integrations**
  - Google Classroom sync
  - Canvas LMS integration
  - Notion workspace connection

### 🎯 Future Enhancements

#### Advanced Features
- [ ] **AR/VR Learning Experiences**
- [ ] **Multi-language Support**
- [ ] **Enterprise/School District Plans**
- [ ] **API for Third-party Developers**
- [ ] **Advanced Parental Controls**

#### Technical Improvements
- [ ] **Performance Optimizations**
- [ ] **Enhanced Security Features**
- [ ] **Advanced Caching Strategies**
- [ ] **Real-time Collaboration Features**

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run type checking
npm run type-check
```

## 🚀 Deployment

The application is optimized for deployment on Vercel:

```bash
# Deploy to production
vercel --prod
```

For other platforms, build the application:

```bash
npm run build
npm start
```


## 🌟 Acknowledgments

- Thanks to all our beta testers and early adopters
- Special thanks to the open-source community
- Inspired by the future of personalized education

---

<div align="center">
  <p>Made with ❤️ by the Ilmora Team</p>
  <p>© 2024 Ilmora. All rights reserved.</p>
</div>
