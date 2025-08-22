🐾 Pet Activity Tracker

A responsive mini-application that allows pet owners to log and track their pet’s daily activities.

📌 Features

Log activities: Walk, Meal, Medication

Inputs: Pet name, activity type, duration/quantity, date/time (default = now)

Daily summary with totals (walk minutes, meals, meds)

Simple data-visualisation with progress bars

Reminder prompt if no walk is logged by 18:00 local time

AI chatbot (memory of activity history)

Fully in-memory storage (no database)

🛠️ Tech Stack

Frontend: React (Vite) + TailwindCSS

Backend: Node.js + Express

Data: Stored in-memory (arrays/objects)

▶️ Run Locally
# Clone repo
git clone <repo-link>
cd pet-activity-tracker

# Start backend
cd backend
npm install
npm run dev

# Start frontend
cd ../frontend
npm install
npm run dev


App runs on:

Backend → http://localhost:5000

Frontend → http://localhost:5173

⚖️ Trade-offs

No persistence: all data resets on server restart

Simple validation (future dates, empty fields) handled at backend

Basic visualisation for clarity over complexity
