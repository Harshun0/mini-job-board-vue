
# Mini Job Board

A simple job board web application built with React, TypeScript, and Tailwind CSS.

## Setup Instructions

### Prerequisites
- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone this repository
```sh
git clone <repository-url>
cd mini-job-board
```

2. Install dependencies
```sh
npm install
# or
yarn install
```

3. Start the development server
```sh
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
mini-job-board/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── JobCard.tsx
│   │   ├── JobFilters.tsx
│   │   ├── Pagination.tsx
│   │   └── EmptyState.tsx
│   ├── data/           # Static data files
│   │   └── jobs.json
│   ├── hooks/          # Custom React hooks
│   │   └── useJobs.ts
│   ├── pages/          # Page components
│   │   ├── Index.tsx
│   │   ├── JobListingsPage.tsx
│   │   ├── JobDetailPage.tsx
│   │   └── NotFound.tsx
│   ├── types/          # TypeScript type definitions
│   │   └── job.ts
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
└── README.md           # Project documentation
```

## Features

- View all job listings with pagination (5 jobs per page)
- Filter jobs by location and job type
- View detailed information for each job
- URL-based filter persistence
- Responsive design for mobile and desktop

## Known Issues

- The "Apply Now" button on the job details page is currently non-functional
- No form validation or error handling for filters
- No loading states for data fetching
