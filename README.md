#  User Management Dashboard - React Version

A complete user management system built with **React, Vite, and Tailwind CSS**, featuring local storage persistence, API integration, and a fully responsive design.

---

##  Features

### Core Features
 **Add User** - Add new users with name, email, and course
 **Display Users** - View all users in beautiful cards with gradient text
 **Search User** - Real-time search by name
 **Delete User** - Remove users with confirmation dialog
 **Edit User** - Update user information with a professional modal
 **Local Storage** - Data persists after page refresh
  **API Integration** - Auto-loads users from JSONPlaceholder

### Bonus Features
 **Course Filter** - Filter users by course (MERN, React, Node.js, C++, Python)
 **User Counter** - Total, API, and Local user counts
 **Form Validation** - Required fields and email format validation
 **Dark Mode** - Toggle between light and dark themes with persistence
 **Professional UI** - Glass-morphism effects, gradients, and animations
**Responsive Design** - Works on mobile, tablet, and desktop

---

## ️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React** | Component-based UI |
| **Vite** | Fast build tool |
| **Tailwind CSS** | Utility-first styling |
| **JavaScript (ES6+)** | Application logic |
| **JSONPlaceholder** | Fake REST API for users |
| **Local Storage** | Data persistence |

---

##  Project Structure

tailwind-dashboard/
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── AddUserForm.jsx
│ │ ├── SearchBar.jsx
│ │ ├── UserCard.jsx
│ │ ├── UserList.jsx
│ │ ├── StatusMessage.jsx
│ │ └── EditModal.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .gitignore
└── README.md

---

##  How to Run the Project

### Prerequisites
- Node.js installed on your system

### Installation
```bash
# Clone the repository
git clone https://github.com/emanashrafch1212-hue/tailwind-dashboard.git

# Navigate to project
cd tailwind-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

Links
GitHub Repository: https://github.com/emanashrafch1212-hue/tailwind-dashboard