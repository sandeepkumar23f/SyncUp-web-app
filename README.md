# SyncUp – Social Dashboard UI

SyncUp is a responsive social media dashboard UI that I built using Next.js, TypeScript, and Tailwind CSS.

This project contains two main pages: a Dashboard Page and a JobDashboard Page. The main goal of building this project was to improve my frontend development skills, especially layout structuring, component reusability, and responsive design. I focused on creating a clean UI and organizing the project in a proper and scalable way.

GitHub Repository:
https://github.com/sandeepkumar23f/SyncUp-web-app


## Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Vercel (for deployment)


## What This Project Includes

The Dashboard page includes:

- Responsive dashboard layout
- Sticky header with search and notifications
- Left sidebar with profile and navigation
- Icon rail navigation for desktop view
- Create post section
- Post cards (text and image posts)
- Right sidebar with promo and suggestions
- Vacancy stats section
- Task categories (New, In Progress, Pending)
- Recommended jobs section

Each section is built as a separate component to keep the code modular and reusable.


## Responsive Behavior

The layout adjusts based on screen size:

- On mobile devices, only the main feed is visible.
- On tablet screens, the sidebar and main feed are visible.
- On large screens, the icon rail, sidebar, main feed, and right section are displayed together.

I used CSS Grid and Flexbox with Tailwind utility classes to handle the layout and responsiveness.


## Folder Structure

app/
- page.tsx
- job-dashboard/page.tsx

components/
- layout/
- post/
- profile/
- stories/
- sidebar/

public/
- icons
- profile images

I tried to maintain a clean folder structure so that the project is easy to understand and maintain.


## Why I Built This

I built this project to practice:

- Proper layout composition
- Clean component separation
- Building UI from scratch without templates
- Writing structured and scalable frontend code
- Making everything responsive properly

This project helped me understand how large dashboard applications are structured internally.


## How To Run Locally

1. Clone the repository

git clone https://github.com/sandeepkumar23f/SyncUp-web-app.git

2. Install dependencies

npm install

3. Run the development server

npm run dev

Then open:
http://localhost:3000


## Future Improvements

- Add authentication system
- Connect with a real backend
- Make posts dynamic
- Add dark mode
- Improve mobile navigation
- Add better animations and transitions


Built by Sandeep Kumar
