# RoktoChai: Blood Donation Management System

RoktoChai is a comprehensive blood donation management tool that efficiently connects donors with recipients. Featuring secure role-based access control, personalized user profiles, and intelligent request matching, this tool ensures critical blood supplies reach those in need promptly.
Monitor the complete donation journey, access real-time analytics, and understand your donation's impact with our "lives helped" tracker. BloodLink offers educational resources, anonymous thank-you messaging, and follow-up care information—all accessible through our mobile-responsive interface. This essential tool streamlines donation management while supporting the vital connection between donors and recipients.

## Features

- User registration and authentication
- Role-based access (Super Admin, Admin, User)
- User profiles with history and donation eligibility status
- Smart matching of blood requests with available donors
- Prioritization system for urgent needs
- Detailed donation journey tracking from request to transfusion
- Analytics dashboard with donation metrics
- Social sharing of donation milestones
- Post-donation follow-up system
- Donation impact visualization ("Your donation helped X people")
- Anonymous thank-you messages to donors
- Recovery tracking and outcome reporting
- Follow-up care information
- Educational resources on blood donation
- Community impact statistics
- Mobile-responsive design


# Project Monorepo
This monorepo contains all the components of the of this project project:

- Backend API Service
- Admin Dashboard

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

- `docker-compose -f docker/docker-compose.yaml up -d` - Run database with dokcer-compose
- `npm run dev` - Start all projects in development mode
- `npm run build` - Build all projects
- `npm run start` - Start all projects in production mode
- `npm run lint` - Run linting across all projects
- `npm run lint` - Run linting across all projects


## Package-specific Commands

You can run commands for specific packages using the workspace syntax:

```bash
npm run dev -w @roktochai/backend
npm run dev -w @roktochai/dashboard
```