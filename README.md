# Mini Job Board

A simple job board web application built with Vue, TypeScript, and Tailwind CSS.

## About This Project

This is a personal project developed to showcase web development skills and create a practical job board application. The project demonstrates modern web development techniques and responsive design.

## Setup Instructions

### Prerequisites
- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone this repository
```sh
git clone <your-repository-url>
cd mini-job-board-vue
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
mini-job-board-vue/
├── src/
│   ├── components/     # Reusable UI components
│   ├── data/           # Static data files
│   ├── hooks/          # Custom Vue hooks
│   ├── pages/          # Page components
│   ├── types/          # TypeScript type definitions
│   ├── App.vue         # Main application component
│   └── main.ts         # Application entry point
└── README.md           # Project documentation
```

## Features

- View all job listings with pagination
- Filter jobs by location and job type
- View detailed information for each job
- URL-based filter persistence
- Responsive design for mobile and desktop

## Known Issues

- The "Apply Now" button on the job details page is currently non-functional
- No form validation or error handling for filters
- No loading states for data fetching

## Future Improvements

- Implement backend integration
- Add user authentication
- Enhance filter and search functionality

## License

[Choose an appropriate license, e.g., MIT License]

## Contact

[Your Name]
[Your Email or GitHub Profile]
