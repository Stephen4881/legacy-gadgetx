# Legacy Gadgets - E-commerce Platform

## Overview

Legacy Gadgets is a premium e-commerce website for tech accessories, specializing in UK used iPhones, brand new iPhones, Android phones, Samsung phones, laptops, and gaming accessories. The platform emphasizes a trust-first, luxury-inspired shopping experience with a dark theme and minimalist design aesthetic.

The application features product browsing, category filtering, device swap programs, savings plans, and repair services. It's built as a full-stack TypeScript application with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Session Management**: Express session with connect-pg-simple for PostgreSQL storage
- **Development**: Hot module replacement via Vite middleware

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between client and server)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Storage Interface**: Abstracted storage layer in `server/storage.ts` supporting memory and database implementations

### Project Structure
```
├── client/           # React frontend application
│   ├── src/
│   │   ├── components/   # UI components (layout, home sections, chat)
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities, data, query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage abstraction
│   └── static.ts     # Static file serving for production
├── shared/           # Shared code between client/server
│   └── schema.ts     # Database schema and types
└── migrations/       # Drizzle database migrations
```

### Key Design Patterns
- **Monorepo Structure**: Client, server, and shared code in single repository
- **Type Safety**: End-to-end TypeScript with shared schema types
- **Component Architecture**: Atomic design with shadcn/ui primitives
- **Dark Theme First**: CSS variables configured for dark luxury aesthetic
- **Progressive Loading**: Pagination and lazy loading for product images

## External Dependencies

### Database
- **PostgreSQL**: Primary database via `DATABASE_URL` environment variable
- **Drizzle Kit**: Database migrations and schema push (`npm run db:push`)

### UI Framework
- **Radix UI**: Accessible component primitives (dialogs, dropdowns, tooltips, etc.)
- **Tailwind CSS**: Utility-first styling with custom theme configuration
- **Lucide React**: Icon library

### Third-Party Services
- **Google Fonts**: Inter and Outfit font families for typography
- **WhatsApp Integration**: Direct messaging links for customer support and repairs
- **Gmail Integration**: Email composition for swap program requests

### Development Tools
- **Vite**: Development server and production bundler
- **esbuild**: Server-side TypeScript bundling for production
- **Replit Plugins**: Dev banner, cartographer, and runtime error overlay for Replit environment

### Key NPM Packages
- `@tanstack/react-query`: Server state management
- `framer-motion`: Animation library
- `wouter`: Lightweight routing
- `zod`: Runtime type validation
- `drizzle-orm` / `drizzle-zod`: Database ORM and schema validation
- `express-session` / `connect-pg-simple`: Session management