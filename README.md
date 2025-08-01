﻿# 🎬 StoryBuilder - AI-Powered Storytelling Platform

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/jaswanthhitman45/storybuilder)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6.svg)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-2.39.0-3ECF8E.svg)](https://supabase.com/)

> **Transform your imagination into captivating stories with AI-powered writing, voice synthesis, and video generation.**

StoryBuilder is a cutting-edge, full-stack web application that combines artificial intelligence with creative storytelling. Generate stories, convert them to realistic voice narration, and create professional AI-narrated videos - all in one seamless platform.

## 🌟 Live Demo

🔗 **[Try StoryBuilder](https://storybuilder-murex.vercel.app/)** - Experience the future of AI storytelling

## ✨ Key Features

### 🤖 AI-Powered Story Generation
- **Multi-Genre Support**: Fantasy, Sci-Fi, Mystery, Romance, Horror, Adventure, Drama, Comedy, Thriller
- **Multiple Content Types**: Stories, Poems, Scripts, Blog Posts
- **Flexible Length Options**: Micro (50-100 words), Short (200-500 words), Medium (500-1000 words), Long (1000-2000 words)
- **Smart Content Optimization**: Automatically optimizes content for video generation
- **Powered by Google Gemini AI**: Advanced language model for high-quality content generation

### 🎙️ Voice Synthesis & Audio Generation
- **Realistic Voice Narration**: Convert text to natural-sounding speech using ElevenLabs AI
- **Multiple Voice Options**: Choose from various AI voices and languages
- **Audio Quality Controls**: Adjust stability, similarity boost, and speaker enhancement
- **Cloud Storage Integration**: Seamless audio file storage and streaming

### 🎬 AI Video Generation
- **Persona-Based Videos**: Create videos with AI avatars using Tavus technology
- **Real-time Progress Tracking**: Monitor video generation with live progress updates
- **Multi-language Support**: Generate videos in multiple languages with appropriate avatars
- **Professional Quality**: High-definition video output with synchronized audio
- **Video Library Management**: Organize and manage all generated videos

### 🔐 Authentication & User Management
- **Secure Authentication**: Email/password authentication with Supabase Auth
- **User Profiles**: Customizable profiles with avatars, bios, and social links
- **Demo Mode**: Try the platform without registration
- **Role-based Access**: User and admin role management
- **Session Persistence**: Secure session management across page refreshes
- **Admin Panel**: Comprehensive admin dashboard for platform management

### 👑 Admin Features
- **User Management**: View, promote, and moderate all platform users
- **Content Moderation**: Review and manage stories, handle content reports
- **Analytics Dashboard**: Platform statistics and user activity monitoring
- **Admin Promotion**: Promote users to admin roles with email/username
- **System Health**: Monitor database, API status, and storage usage
- **Secure Access Control**: Admin-only routes with proper authentication

### 📱 Modern User Interface
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with system preference detection
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Modern Components**: Custom UI components built with Radix UI and Tailwind CSS

### 💾 Data Management
- **Real-time Database**: Supabase PostgreSQL with real-time subscriptions
- **File Storage**: Secure cloud storage for audio and image files
- **Story Library**: Personal library with filtering and search capabilities
- **Social Features**: Story sharing, likes, views, and interactions
- **Export Options**: Download generated content and media files

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript 5.5.3** - Type-safe development
- **Vite 5.4.2** - Fast build tool and development server
- **React Router DOM 6.20.1** - Client-side routing
- **Framer Motion 10.18.0** - Animation library
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful SVG icons

### Backend & Services
- **Supabase** - Backend-as-a-Service (BaaS)
  - PostgreSQL database with real-time subscriptions
  - Authentication and user management
  - File storage and CDN
  - Row Level Security (RLS) policies
- **Google Gemini AI** - Advanced language model for story generation
- **ElevenLabs API** - Realistic voice synthesis and audio generation
- **Tavus API** - AI video generation with persona avatars

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing with Autoprefixer
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Vite Plugins** - React Fast Refresh and optimization

## 📁 Project Structure

```
StoryBuilder/
├── public/                          # Static assets
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── Layout/                 # Layout components
│   │   │   ├── Footer.tsx          # Footer with social links
│   │   │   ├── Navbar.tsx          # Navigation with auth
│   │   │   └── ProtectedRoute.tsx  # Route protection
│   │   ├── Subscription/           # Subscription components
│   │   ├── ui/                     # Base UI components
│   │   │   ├── Button.tsx          # Customizable button
│   │   │   ├── Card.tsx            # Card layout
│   │   │   ├── Input.tsx           # Form inputs
│   │   │   ├── Modal.tsx           # Modal dialogs
│   │   │   └── ...                 # Other UI components
│   │   └── VideoGeneration/        # Video generation components
│   ├── contexts/                   # React contexts
│   │   ├── AuthContext.tsx         # Authentication state
│   │   └── ThemeContext.tsx        # Theme management
│   ├── lib/                        # Utility libraries
│   │   ├── api/                    # API integrations
│   │   │   ├── elevenlabs.ts       # Voice synthesis API
│   │   │   ├── gemini.ts           # Story generation API
│   │   │   ├── tavus.ts            # Video generation API
│   │   │   └── video.ts            # Video management utilities
│   │   ├── revenuecat.ts           # Subscription management
│   │   ├── supabase.ts             # Database client
│   │   └── utils.ts                # Utility functions
│   ├── pages/                      # Application pages
│   │   ├── auth/                   # Authentication pages
│   │   │   ├── Login.tsx           # Login form
│   │   │   └── Register.tsx        # Registration form
│   │   ├── Admin.tsx               # Admin dashboard
│   │   ├── CreateStory.tsx         # Story creation interface
│   │   ├── Dashboard.tsx           # User dashboard
│   │   ├── Explore.tsx             # Public story exploration
│   │   ├── Landing.tsx             # Landing page
│   │   ├── Library.tsx             # Personal story library
│   │   ├── Profile.tsx             # User profiles
│   │   ├── StoryViewer.tsx         # Story reading interface
│   │   └── VideoLibrary.tsx        # Video management
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   └── index.css                   # Global styles
├── supabase/
│   └── migrations/                 # Database migrations
├── Assets/                         # Project assets
├── .env                           # Environment variables
├── package.json                   # Dependencies and scripts
├── tailwind.config.js             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── vite.config.ts                 # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have:

- **Node.js 18+** - [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **Git** - Version control system

### API Keys Required

You'll need to obtain API keys from the following services:

1. **Supabase Project**: [Create a Supabase project](https://supabase.com/)
2. **Google Gemini API**: [Get Gemini API key](https://ai.google.dev/)
3. **ElevenLabs API**: [Get ElevenLabs API key](https://elevenlabs.io/)
4. **Tavus API**: [Get Tavus API key](https://tavusapi.com/)
5. **RevenueCat** (Optional): [Get RevenueCat API key](https://www.revenuecat.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaswanthhitman45/storybuilder.git
   cd storybuilder
   ```


2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   # Supabase Configuration
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

   # AI APIs
   VITE_GEMINI_API_KEY=your_gemini_api_key
   VITE_ELEVENLABS_API_KEY=your_elevenlabs_api_key
   VITE_TAVUS_API_KEY=your_tavus_api_key
   ```

4. **Set up Supabase database**

   The project includes migration files in `supabase/migrations/`. Run these migrations in your Supabase project:
   - Navigate to your Supabase dashboard
   - Go to the SQL Editor
   - Run the migration files in chronological order

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open in browser**

   Navigate to `http://localhost:5173` to see the application running.

## 📱 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

## 🎯 Core Features Explained

### Story Generation Workflow

1. **Input Creation**: Users provide a prompt, select genre, type, and length
2. **AI Processing**: Google Gemini AI generates content based on parameters
3. **Content Optimization**: Automatic optimization for video generation when needed
4. **Storage**: Stories are saved to Supabase with metadata

### Voice Synthesis Process

1. **Text Processing**: Story content is processed for optimal voice synthesis
2. **Voice Selection**: Users choose from available ElevenLabs voices
3. **Audio Generation**: High-quality audio is generated with custom settings
4. **Storage & Streaming**: Audio files are stored in Supabase Storage

### Video Generation Pipeline

1. **Content Optimization**: Stories are automatically shortened for video format
2. **Voice Synthesis**: Audio narration is generated using ElevenLabs
3. **Video Creation**: Tavus AI creates videos with persona avatars
4. **Progress Tracking**: Real-time progress updates during generation
5. **Final Processing**: Completed videos are stored and linked to stories

### Authentication Flow

1. **Registration**: Email verification with Supabase Auth
2. **Profile Creation**: Automatic profile creation with database triggers
3. **Session Management**: Persistent sessions with refresh token handling
4. **Demo Mode**: Guest access with limited functionality

## 🔧 Configuration

### Tailwind CSS Customization

The project uses a custom Tailwind configuration with:
- **Custom Color Palette**: Primary, secondary, accent colors
- **Dark Mode Support**: CSS variables for theme switching
- **Custom Animations**: Smooth transitions and hover effects
- **Responsive Breakpoints**: Mobile-first design approach

### Supabase Configuration

Database includes:
- **User Profiles**: Extended user information beyond authentication
- **Stories Table**: Story content with metadata and media URLs
- **Story Interactions**: Likes, views, bookmarks, and comments
- **Row Level Security**: Secure data access patterns

### API Integration

Each API is configured with:
- **Error Handling**: Comprehensive error management
- **Rate Limiting**: Respect for API rate limits
- **Retry Logic**: Automatic retry for failed requests
- **Caching**: Optimized API call patterns

## 🎨 UI/UX Features

### Design System
- **Consistent Spacing**: 8px grid system
- **Typography Scale**: Hierarchical text sizing
- **Color Palette**: Carefully selected accessible colors
- **Component Library**: Reusable, composable components

### Accessibility
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Logical focus flow
- **Color Contrast**: WCAG compliant color combinations

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Flexible Layouts**: CSS Grid and Flexbox
- **Touch Interactions**: Mobile-friendly touch targets
- **Performance**: Optimized loading and rendering

## 🔒 Security Features

### Data Protection
- **Row Level Security**: Database-level access control
- **Input Validation**: Client and server-side validation
- **XSS Prevention**: Sanitized user inputs
- **CSRF Protection**: Supabase built-in protections

### Authentication Security
- **JWT Tokens**: Secure session management
- **Password Hashing**: Supabase secure password handling
- **Email Verification**: Confirmed user registrations
- **Session Timeout**: Automatic session management

## 📊 Performance Optimization

### Frontend Optimization
- **Code Splitting**: Route-based code splitting
- **Lazy Loading**: Component lazy loading
- **Image Optimization**: Optimized image delivery
- **Bundle Size**: Minimized bundle size with tree shaking

### Backend Optimization
- **Database Indexing**: Optimized database queries
- **Caching Strategy**: Efficient data caching
- **CDN Integration**: Global content delivery
- **Real-time Updates**: Efficient real-time subscriptions

## 🧪 Testing Strategy

### Development Testing
- **Type Safety**: TypeScript for compile-time error checking
- **Linting**: ESLint for code quality
- **Format Checking**: Consistent code formatting
- **Manual Testing**: Comprehensive feature testing

### Recommended Testing Additions
- **Unit Tests**: Jest + React Testing Library
- **Integration Tests**: API integration testing
- **E2E Tests**: Playwright or Cypress
- **Performance Tests**: Lighthouse CI

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options

#### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

#### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add environment variables in Netlify dashboard

#### Self-Hosted
1. Build the project: `npm run build`
2. Serve the `dist` directory with a web server
3. Configure environment variables on the server

### Environment Variables for Production

Ensure all environment variables are set in your deployment platform:
- Supabase URL and keys
- API keys for all external services
- Any additional configuration variables

## 🤝 Contributing

We welcome contributions to StoryBuilder! Here's how you can help:

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests and linting: `npm run lint`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Write clear commit messages
- Add documentation for new features
- Test your changes thoroughly
- Update the README if needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Jaswanth Pothuru**
- 🌐 Portfolio: [https://my-portfolio-six-alpha-17.vercel.app/](https://my-portfolio-six-alpha-17.vercel.app/)
- 💼 LinkedIn: [https://www.linkedin.com/in/jaswanthpothuru/](https://www.linkedin.com/in/jaswanthpothuru/)
- 🐙 GitHub: [https://github.com/jaswanthhitman45](https://github.com/jaswanthhitman45)
- 📧 Email: [pothurujaswanth@gmail.com](mailto:pothurujaswanth@gmail.com)
- 📱 Phone: +91 9392646349


## 🙏 Acknowledgments

### Technologies & Services
- **Supabase** - For providing an excellent backend-as-a-service platform
- **Google Gemini AI** - For advanced language model capabilities
- **ElevenLabs** - For realistic voice synthesis technology
- **Tavus** - For AI video generation with persona avatars
- **Vercel** - For seamless deployment and hosting
- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework

### Open Source Libraries
- All the amazing open-source contributors whose libraries make this project possible
- The React and TypeScript communities for continuous innovation
- Radix UI team for accessible component primitives

## 📈 Future Roadmap

### Planned Features
- [ ] **Advanced Video Editing**: In-app video editing capabilities
- [ ] **Collaboration Tools**: Multi-user story collaboration
- [ ] **Mobile App**: React Native mobile application
- [ ] **Advanced Analytics**: Detailed usage and performance analytics
- [ ] **API Access**: Public API for third-party integrations
- [ ] **Plugin System**: Extensible plugin architecture
- [ ] **Advanced AI Models**: Integration with additional AI services
- [ ] **Social Features**: Enhanced community and sharing features

### Technical Improvements
- [ ] **Performance Optimization**: Further performance enhancements
- [ ] **Offline Support**: Progressive Web App features
- [ ] **Advanced Caching**: Redis integration for better performance
- [ ] **Microservices**: Backend service separation
- [ ] **GraphQL API**: Enhanced API with GraphQL
- [ ] **Real-time Collaboration**: WebSocket-based real-time features

## 📞 Support

If you encounter any issues or have questions:

1. **Documentation**: Check this README and inline code comments
2. **Issues**: Create a GitHub issue for bugs or feature requests
3. **Discussions**: Use GitHub Discussions for general questions
4. **Email**: Contact the developer directly for urgent matters

## 🌟 Show Your Support

If you found this project helpful:
- ⭐ Star the repository
- 🍴 Fork it for your own use
- 📢 Share it with others
- 🐛 Report bugs or suggest features
- 💝 Contribute to the codebase

---
Thanks to **bolt.new** AI

**Built with ❤️ by [Jaswanth Pothuru](https://github.com/jaswanthhitman45) • © 2025 StoryBuilder**

*Showcasing modern web development and AI integration expertise*
