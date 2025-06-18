# 📚 Book Store Front-End

A modern, responsive front-end for an online Book Store application, built with React, Vite, Tailwind CSS, and Redux Toolkit. This UI allows users to explore books, manage orders, and perform administrative tasks.

---

## 🔗 Live Demo

- **User Site**: https://book-store-sage-ten.vercel.app/
- **Admin Panel**: https://book-store-sage-ten.vercel.app/admin
  - **Username**: `admin`
  - **Password**: `123456`

---

## 🛠️ Features

### User Panel

- **Browse Books**: View book listings with details.
- **Search & Filter**: Quickly find books by title, author, or category.
- **Cart Management**: Add/remove books, view cart summary.
- **Checkout & Orders**: Place orders and track order history.
- **Authentication**: Sign up, log in, and log out with protected routes.

### Admin Panel

- **Book Management**: Add, edit, and delete book entries.
- **Order Overview**: View and manage user orders.
- **Dashboard**: Visual stats (e.g., orders per day, top genres) via charts.
- **User-Friendly UI**: Fully responsive for desktop and mobile.

---

## 🧱 Tech Stack

- **Framework**: React + Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Authentication & Backend**: Firebase (Firestore + Auth)
- **Data Visualization**: Chart.js
- **UX Enhancements**: SweetAlert2
- **Components**: Swiper (for image carousels)

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js v16+
- npm or yarn

### Installation & Development

```bash
git clone https://github.com/haroooooold/book-store-front-end.git
cd book-store-front-end
npm install           # or yarn install
cp .env.example .env.local
# Replace placeholder values in .env.local with your Firebase credentials
npm run dev           # starts local dev server
```
