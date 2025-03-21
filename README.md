# RoktoChai Monorepo

This monorepo contains all the components of the RoktoChai project:

- Backend API Service
- Admin Dashboard
- Landing Page

## Project Structure

```
├── apps/
│   ├── backend/     # Backend API service
│   ├── dashboard/   # Admin dashboard
└── README.md
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development servers:
   ```bash
   npm run dev
   ```

3. Build all packages:
   ```bash
   npm run build
   ```

## Available Scripts

- `npm run dev` - Start all projects in development mode
- `npm run build` - Build all projects
- `npm run start` - Start all projects in production mode
- `npm run lint` - Run linting across all projects

## Package-specific Commands

You can run commands for specific packages using the workspace syntax:

```bash
npm run dev -w @roktochai/backend
npm run dev -w @roktochai/dashboard
```