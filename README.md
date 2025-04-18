BetterBlues - Charity Organization Website
📝 Project Summary
BetterBlues is a responsive charity organization website focused on improving children's lives through education, nutrition, and clean water initiatives. The platform showcases upcoming events, past achievements, and provides donation functionality.

✨ Key Features
Responsive design for all devices

Interactive event listings with hover effects

Donation functionality via Razorpay integration

Beautiful UI with smooth animations

Multiple pages (Home, About, Events, Blog, Contact)

Statistics visualization for fundraising goals

🛠️ Technologies Used
Frontend
React.js - JavaScript library for building user interfaces

Vite - Next generation frontend tooling

Tailwind CSS - Utility-first CSS framework

React Icons - Popular icons library

React Router - Client-side routing

Payment Integration
Razorpay - Payment gateway for donations

Deployment
Vercel:- https://better-blues-neon.vercel.app/

📂 Project Structure
src/
├── assets/
│   └── images/          # All project images
├── components/          # Reusable components
│   ├── Header.jsx       # Navigation header
│   ├── StatsCard.jsx    # Fundraising progress cards
│   ├── DonationButton.jsx # Razorpay integration
│   └── TeamMember.jsx   # Team member display
├── pages/               # Page components
│   ├── Home.jsx         # Landing page
│   ├── About.jsx        # About us page
│   ├── Events.jsx       # Events listing
│   ├── Blog.jsx         # Blog page
│   ├── Contact.jsx      # Contact form
│   └── Donate.jsx       # Donation page
├── App.jsx              # Main app with routes
└── main.jsx             # Entry point
🧑‍💻 Development Setup
Clone the repository

bash
git clone:- https://github.com/Sapna44Y/BetterBlues
cd betterblues
Install dependencies

bash
npm install
Run development server

bash
npm run dev
Build for production

bash
npm run build
🔧 Configuration
Razorpay Setup

Create a Razorpay account

Get your test API key

Replace in DonationButton.jsx:

js
key: 'rzp_test_YOUR_TEST_KEY'
Environment Variables
Create .env file:

VITE_RAZORPAY_KEY=your_razorpay_key
🌟 Special Features
Interactive UI Elements:

Hover animations on cards and buttons

Smooth transitions between pages

Responsive image galleries

Donation System:

Secure payment processing

Test mode available for development


Vercel:- https://better-blues-neon.vercel.app/
