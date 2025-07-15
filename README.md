# WisdomTree Sanity.io + Next.js Demo

A modern, headless CMS demonstration built with **Next.js 15** and **Sanity.io** to showcase advanced content management capabilities and technical expertise.

## 🚀 Live Demo

- **Frontend**: https://wisdomtree-demo.netlify.app/
- **Sanity Studio**: https://wisdomtree-demo.netlify.app/studio

## 🛠️ Technical Stack

### Core Technologies

- **Next.js 15** - React framework with App Router
- **Sanity.io v3** - Headless CMS with real-time collaboration
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **React 19** - Latest React features

### Advanced Features

- **Internationalization (i18n)** - Multi-language support (EN-US, EN-UK, ES, FR)
- **Real-time Preview** - Live content updates
- **Structured Content** - Modular content blocks
- **Image Optimization** - Sanity's CDN with Next.js Image
- **SEO Optimization** - Dynamic metadata and structured data

## 🏗️ Architecture Overview

### Content Management System

```
Sanity Studio (/studio)
├── Document Internationalization
├── Custom Schema Types
├── Structured Content Blocks
├── Real-time Collaboration
└── Vision Tool (GROQ Queries)
```

### Frontend Architecture

```
Next.js App Router
├── Dynamic Routes ([lang])
├── Middleware (Language Detection)
├── Server Components
├── Content Block Rendering
└── Image Optimization
```

## 📦 Content Types & Blocks

### Schema Types

- **Pages** - Dynamic page content with internationalization
- **Posts** - Blog posts with publish dates and categorization
- **Content Blocks** - Modular, reusable content components

### Available Content Blocks

1. **Hero Video Block** - Featured video content with overlay text
2. **Hero Search Block** - Interactive search interface
3. **What's New Block** - Latest posts and updates carousel

## 🌐 Internationalization

### Supported Languages

- English (US) - `en-us`
- English (UK) - `en-uk`
- Spanish - `es`
- French - `fr`

### Features

- **Automatic Language Detection** - Based on browser preferences
- **Dynamic Language Switching** - URL-based routing (`/en-us/`, `/es/`)
- **Localized Content** - Separate content for each language
- **Fallback Handling** - Graceful degradation for missing translations

## 🔧 Development Setup

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- Sanity account

### Installation

1. **Clone the repository**

   ```bash
   git clone [repository-url]
   cd wisdomtree-sanity-demo
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create `.env.local`:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
   SANITY_API_READ_TOKEN=your_api_read_token
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

5. **Access the applications**
   - Frontend: http://localhost:3000
   - Sanity Studio: http://localhost:3000/studio

### 🏠 Setting Up Your Homepage

**Important**: When connecting to your own Sanity studio, you'll need to create a homepage:

1. **Access Sanity Studio** at `/studio`
2. **Create a new Page** document
3. **Set the slug** to `homepage` (this is required for the homepage to display)
4. **Select your desired language** (en-us, en-uk, es, or fr)
5. **Add content blocks** using the block editor
6. **Publish** the page
7. **Navigate to** `http://localhost:3000/[language]/homepage` (e.g., `http://localhost:3000/en-us/homepage`)

> **Note**: The homepage route is configured to look for pages with the slug `homepage`. Without this page, the frontend will show a 404 error.

## 📝 Content Management

### Sanity Studio Features

- **Real-time Collaboration** - Multiple editors can work simultaneously
- **Version History** - Track all content changes
- **Rich Text Editor** - Portable Text with custom blocks
- **Media Management** - Drag-and-drop image/video uploads
- **GROQ Queries** - Test queries with Vision tool

### Content Creation Workflow

1. Access Studio at `/studio`
2. Create/edit pages with language selection
3. Add content blocks using the block editor
4. Preview changes in real-time
5. Publish content instantly

## 🎨 Styling & UI

### Design System

- **Tailwind CSS v4** - Latest utility classes
- **Responsive Design** - Mobile-first approach
- **Component Architecture** - Reusable UI components
- **Modern Typography** - Optimized font loading

### Component Structure

```
app/components/
├── content/          # Content block components
├── layout/           # Header, footer, navigation
└── ui/              # Reusable UI components
```

## 🔍 GROQ Queries

### Key Queries

- **Dynamic Page Fetching** - Language-aware page queries
- **Content Block Resolution** - Structured content retrieval
- **Language Detection** - Available language discovery
- **Post Aggregation** - Blog post filtering and sorting

### Example Query

```groq
*[_type == "page" && language == $language && slug.current == $slug][0] {
  _id,
  title,
  slug,
  language,
  content[] {
    _type,
    ...
  }
}
```

## 🚀 Performance Optimizations

### Next.js Features

- **App Router** - Improved routing and layouts
- **Server Components** - Reduced client-side JavaScript
- **Image Optimization** - Automatic WebP conversion
- **Static Generation** - Pre-rendered pages where possible

### Sanity Optimizations

- **CDN Integration** - Global content delivery
- **Image Transformations** - On-demand image processing
- **Caching Strategy** - Intelligent content caching
- **Incremental Static Regeneration** - Dynamic content updates

## 📊 Key Technical Highlights

### Advanced Implementations

1. **Middleware-based i18n** - Automatic language routing
2. **Type-safe Sanity Integration** - Generated TypeScript types
3. **Modular Content Architecture** - Flexible content blocks
4. **Real-time Content Updates** - Live preview capabilities
5. **SEO-optimized Structure** - Dynamic metadata generation

### Code Quality

- **TypeScript** - 100% type coverage
- **ESLint** - Code quality enforcement
- **Prettier** - Consistent code formatting
- **Component Testing** - Robust testing strategy

## 🔒 Security & Best Practices

- **Environment Variables** - Secure configuration management
- **API Token Management** - Proper authentication handling
- **Content Validation** - Schema-based content validation
- **CORS Configuration** - Secure cross-origin requests

## 📈 Scalability Considerations

### Performance

- **Edge Caching** - Global content distribution
- **Database Optimization** - Efficient GROQ queries
- **Bundle Optimization** - Tree-shaking and code splitting
- **Image Optimization** - Lazy loading and format optimization

### Maintainability

- **Modular Architecture** - Easy feature additions
- **Type Safety** - Reduced runtime errors
- **Documentation** - Comprehensive code comments
- **Version Control** - Structured commit history

## 🎯 Skills Demonstrated

### Frontend Development

- ✅ Modern React patterns (Server Components, Hooks)
- ✅ Next.js 15 App Router implementation
- ✅ TypeScript integration and type safety
- ✅ Responsive design and mobile optimization
- ✅ Performance optimization techniques

### Backend/CMS Integration

- ✅ Headless CMS architecture
- ✅ GROQ query optimization
- ✅ Real-time data synchronization
- ✅ Content modeling and schema design
- ✅ API integration and error handling

### DevOps & Deployment

- ✅ Environment configuration
- ✅ Build optimization
- ✅ Deployment strategies
- ✅ Performance monitoring
- ✅ Security best practices

## 📞 Contact

Like what I did? Contact me so we can get started on your new Sanity.io and Nextjs Project: [aaronmolina.me](https://www.aaronmolina.me/)

_This demo showcases advanced full-stack development skills with modern technologies, emphasizing performance, scalability, and maintainability - key requirements for enterprise-level applications._
