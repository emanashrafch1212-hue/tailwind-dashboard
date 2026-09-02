# 📊 User Management Dashboard v2 - Tailwind CSS

A complete user management system built with **HTML, Tailwind CSS, and JavaScript**, featuring local storage persistence, API integration, and a fully responsive design. This is the second version of the dashboard, re-styled using **Tailwind CSS** utility-first framework.

---

## ✨ Features

### Core Features

| Feature | Description |
|---------|-------------|
| ➕ **Add User** | Add new users with name, email, and course |
| 👁️ **Display Users** | View all users in beautiful cards with gradient text |
| 🔍 **Search User** | Real-time search by name |
| 🗑️ **Delete User** | Remove users with confirmation dialog |
| ✏️ **Edit User** | Update user information with a professional modal |
| 💾 **Local Storage** | Data persists after page refresh |
| 🌐 **API Integration** | Auto-loads users from JSONPlaceholder |

### Bonus Features

| Feature | Description |
|---------|-------------|
| 🎯 **Course Filter** | Filter users by course (MERN, React, Node.js, C++, Python) |
| 📊 **User Counter** | Total, API, and Local user counts |
| ✅ **Form Validation** | Required fields and email format validation |
| 🌙 **Dark Mode** | Toggle between light and dark themes with persistence |
| 🎨 **Professional UI** | Glass-morphism effects, gradients, and animations |
| 📱 **Responsive Design** | Works on mobile, tablet, and desktop |

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic structure |
| **Tailwind CSS** | Utility-first styling |
| **JavaScript (ES6+)** | Application logic |
| **JSONPlaceholder** | Fake REST API for users |
| **Local Storage** | Data persistence |

### Tailwind CSS Concepts Applied

- ✅ Utility-first approach
- ✅ Responsive prefixes (`sm:`, `md:`, `lg:`)
- ✅ State variants (`hover:`, `focus:`, `dark:`)
- ✅ `@apply` directive for reusable classes
- ✅ Flexbox and Grid utilities
- ✅ Dark mode variant

---

## 📂 Project Structure
  
  ```
  
tailwind-dashboard/
├── 📄 index.html # Main HTML file with Tailwind CDN
├── 📄 script.js # JavaScript logic (unchanged from previous assignment)
└── 📄 README.md # Project documentation

   ```

---

## 🚀 How to Run the Project

1. **Clone or download** this repository
2. **Open `index.html`** in your browser
3. **Start managing users!**

No build tools or installation required.

---

## 🎨 Design Features

### Professional UI Elements

| Element | Design |
|---------|--------|
| **Cards** | Glass-morphism with multi-layer shadows |
| **Buttons** | Gradient backgrounds with hover effects |
| **User Names** | Gradient text (blue to purple) |
| **Badges** | Gradient backgrounds for Local/API users |
| **Stat Cards** | Color-coded gradients |
| **Dark Mode** | Smooth transition with persistence |

### Responsive Grid

| Breakpoint | Columns |
|------------|---------|
| Mobile (sm) | 1 column |
| Tablet (md) | 2 columns |
| Desktop (lg) | 3 columns |
| Large Desktop (xl) | 4 columns |

---

## 📱 Responsive Design

| Device | Layout | Search Bar |
|--------|--------|------------|
| **Mobile** | 1 column cards | Full width |
| **Tablet** | 2 columns | Full width |
| **Desktop** | 3-4 columns | Fixed width |

---

## 🎯 Learning Outcomes

| Concept | Practiced |
|---------|-----------|
| Utility-first CSS | Styling with Tailwind classes |
| Responsive Design | `sm:`, `md:`, `lg:` prefixes |
| State Variants | `hover:`, `focus:`, `dark:` |
| `@apply` Directive | Reusable component classes |
| Dark Mode | `dark:` variant with toggle |
| Flexbox & Grid | Layout structures |
| DOM Manipulation | Dynamic card rendering |
| CRUD Operations | Add, Edit, Delete, Display |
| API Integration | `async/await` with error handling |
| Local Storage | Data persistence |

---

## 🔧 Reusable Component Classes

Using Tailwind's `@apply` directive:

```css
.btn-primary   /* Gradient primary button */
.btn-edit      /* Gradient edit button */
.btn-danger    /* Gradient delete button */
.glass-card    /* Glass-morphism card */
.input-field   /* Styled input fields */
.user-card     /* Professional user card */
  ## User flow
### online mode
1. Page Loads
   
2. "Loading users..." appears
   
3.  Local users load from localStorage
   
4.  API users load from JSONPlaceholder
   
5.  All users appear in cards
   
6. User can Add, Edit, Delete, Search, Filter
### offline mode
1. Page Loads
   
2. "Loading users..." appears
   
3. Local users load from localStorage
   
4. API call fails
   
5. "Unable to load users." appears
   
6.  Local users still show
link
🔗 Links
GitHub Repository: https://github.com/emanashrafch1212-hue/tailwind-dashboard