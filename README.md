# SalonX Monorepo

A complete salon management system with web and mobile applications, built with modern technologies and a scalable monorepo architecture.

## 🏗️ Architecture

```
salonx-monorepo/
├── apps/
│   ├── web/          # React + Vite + Tailwind + Redux
│   └── mobile/       # Expo (React Native) + NativeWind
├── packages/
│   ├── ui/           # Shared UI components (Radix UI)
│   ├── api/          # Supabase + RTK Query integration
│   ├── types/        # Shared TypeScript types
│   ├── lib/          # Utility functions and hooks
│   └── config/       # ESLint, TypeScript, Tailwind configs
└── infra/
    ├── supabase/     # Database schema and migrations
    └── functions/    # Edge functions
```

## 🚀 Tech Stack

### Shared Backend
- **Supabase** - PostgreSQL + RLS + Edge Functions
- **Auth** - Email OTP / Social logins
- **Storage** - Images, files
- **Realtime** - Appointments, messages

### Web App (`apps/web`)
- **React 18** + **Vite** - Fast development and build
- **Redux Toolkit** + **RTK Query** - State management
- **Tailwind CSS** + **shadcn/ui** - Styling
- **React Calendar** - Booking interface

### Mobile App (`apps/mobile`)
- **Expo** - React Native development
- **Redux Toolkit** + **RTK Query** - State management
- **NativeWind** - Tailwind for React Native
- **Expo Notifications** - Push notifications

## 📦 Feature Modules

### Core Features
- **Auth** - Login, signup, profile management
- **Accounts** - Salon owners, business information
- **Staff** - Employees, booth renters
- **Contacts** - Client management
- **Services** - Services + categories + options
- **Appointments** - Booking, reschedule, cancel
- **Payments** - Stripe integration, deposits
- **CRM** - Notes, files, waivers, history
- **Marketing** - SMS, email, social campaigns
- **Analytics** - KPIs, dashboards, reporting

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- pnpm 8+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd salonx-monorepo
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

4. **Start development servers**
   ```bash
   # Start web app
   pnpm web:dev
   
   # Start mobile app
   pnpm mobile:dev
   
   # Start all apps
   pnpm dev
   ```

## 📋 Available Scripts

### Root Level
- `pnpm dev` - Start all development servers
- `pnpm build` - Build all packages and apps
- `pnpm lint` - Lint all packages and apps
- `pnpm test` - Run tests across all packages
- `pnpm clean` - Clean all build artifacts

### App Specific
- `pnpm web:dev` - Start web app development server
- `pnpm mobile:dev` - Start mobile app development server
- `pnpm ui:dev` - Start UI package in watch mode
- `pnpm api:dev` - Start API package in watch mode

## 🏗️ Package Structure

### `@salonx/ui`
Shared UI components built with Radix UI and Tailwind CSS.

```typescript
import { Button, Dialog, Input } from '@salonx/ui'
```

### `@salonx/api`
API layer with Supabase client and RTK Query setup.

```typescript
import { createSupabaseClient, api } from '@salonx/api'
```

### `@salonx/types`
Shared TypeScript types for all entities.

```typescript
import type { User, Appointment, Service } from '@salonx/types'
```

### `@salonx/config`
Shared configurations for ESLint, TypeScript, and Tailwind.

## 🚀 Deployment

### Web App
- **Platform**: Vercel
- **Build Command**: `pnpm build --filter web`
- **Output Directory**: `apps/web/dist`

### Mobile App
- **Platform**: Expo EAS
- **Build Command**: `pnpm build --filter mobile`
- **Output**: APK/IPA files

## 📈 Roadmap

### Phase 1 (MVP - Web)
- [x] Monorepo setup
- [ ] Auth + Accounts + Staff
- [ ] Services + Categories
- [ ] Appointments + Calendar
- [ ] Stripe payments (sandbox)
- [ ] Basic dashboard

### Phase 2 (Web Expansion)
- [ ] CRM (notes, files, waivers)
- [ ] Online booking pages/widgets
- [ ] Marketing (SMS, email)
- [ ] Reporting & Analytics

### Phase 3 (Mobile App)
- [ ] Expo app with same Redux + Supabase backend
- [ ] Push notifications
- [ ] Tap-to-pay (Stripe Terminal)
- [ ] Offline mode (later)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details # salonx-monorepo
