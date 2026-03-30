# PPL Ground School

A UK PPL(A) ground school web application built with Next.js 14, TypeScript, and Tailwind CSS.

## Overview

This application provides an integrated learning platform for UK Private Pilot License (Aeroplane) students, covering all 9 exam subjects:

1. Air Law
2. Operational Procedures
3. Human Performance & Limitations
4. Navigation & Radio Aids
5. Meteorology
6. Aircraft General Knowledge
7. Flight Performance & Planning
8. Principles of Flight
9. Communications

## Features

- **Learn**: Structured lessons with clear explanations, examples, and key takeaways
- **Practice**: Practice questions integrated into lessons
- **Track**: Progress tracking using browser localStorage
- **Clean UI**: Modern, responsive design optimized for learning

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Dashboard
│   ├── subjects/          # Subject pages
│   └── progress/          # Progress tracking
├── components/            # React components
├── data/                  # Static content
│   ├── subjects.ts       # Subject metadata
│   ├── lessons/          # Lesson content by subject
│   └── questions/        # Question banks
├── lib/                   # Utilities
│   └── progress.ts       # Progress tracking
└── types/                 # TypeScript type definitions
```

## Phase 1 Status

### Complete
- ✅ Next.js 14 + TypeScript + Tailwind CSS setup
- ✅ All 9 subjects with exam info
- ✅ Air Law: full topic structure
- ✅ Air Law: first lesson (Rules of the Air - Basics)
- ✅ Air Law: 15 practice questions
- ✅ Dashboard with subject cards
- ✅ Subject detail pages
- ✅ Lesson viewer with content blocks
- ✅ Progress tracking utilities (localStorage)
- ✅ Sidebar navigation
- ✅ Aviation-themed design system

### Coming Next
- Quiz engine and practice quiz pages
- Mock exam mode (timed, exact format)
- Progress dashboard with charts
- More lesson content for all subjects
- Additional question banks

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State**: React hooks + localStorage
- **Deployment**: Vercel

## License

MIT
