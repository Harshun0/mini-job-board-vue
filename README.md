# Mini Job Board

A modern job board web application built with React, TypeScript, Tailwind CSS, and Shadcn UI.

## Prerequisites

- Node.js (v18 or newer)
- npm (v9 or newer)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Harshun0/mini-job-board-vue.git
cd mini-job-board-vue
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Project Structure

```
mini-job-board-vue/
├── public/              # Public assets
│   └── favicon.svg      # Custom favicon
├── src/                 # Source code
│   ├── components/      # Reusable React components
│   │   ├── ui/          # Shadcn UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── JobCard.tsx  # Job listing card component
│   │   ├── JobFilters.tsx  # Filtering components
│   │   └── ...
│   ├── lib/             # Utility functions and helpers
│   │   └── utils.ts     # Utility functions
│   ├── pages/           # Page components
│   │   ├── Index.tsx    # Home/Landing page
│   │   ├── JobListings.tsx  # Job listings page
│   │   └── JobDetails.tsx   # Individual job details page
│   ├── types/           # TypeScript type definitions
│   │   └── job.ts       # Job-related type definitions
│   ├── hooks/           # Custom React hooks
│   │   └── useJobs.ts   # Job-related hooks
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts

```

## Key Technologies

- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Router
- React Query
- Vite

## Features

- Responsive job board interface
- Job listing and filtering
- Modern, clean UI
- TypeScript for type safety

## Known Issues

- The "Apply Now" button is currently non-functional
- No backend integration yet
- Limited job data

## Future Improvements

- Implement backend API integration
- Add user authentication
- Enhance job search and filter functionality
- Implement job application process

## License

[Choose an appropriate license]

## Contact

[Your Name]
[Your Email or GitHub Profile]
