// ================================================================
// SELECT HTML ELEMENTS
// ================================================================

const userForm = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const courseInput = document.getElementById("course");
const searchInput = document.getElementById("searchInput");
const userTableBody = document.getElementById("userTableBody");
const userCount = document.getElementById("userCount");
const statusMessage = document.getElementById("statusMessage");
const emptyMessage = document.getElementById("emptyMessage");
const formMessage = document.getElementById("formMessage");

// ================================================================
// USERS ARRAY
// ================================================================

let users = [];

// ================================================================
// LOCAL STORAGE
// ================================================================

const loadUsersFromLocalStorage = () => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
        users = JSON.parse(savedUsers);
        return true;
    }
    return false;
};

const saveUsersToLocalStorage = () => {
    localStorage.setItem("users", JSON.stringify(users));
};

// ================================================================
// UPDATE FILTER COUNTS
// ================================================================

const updateFilterCounts = () => {
    const allBadge = document.getElementById('allCount');
    const mernBadge = document.getElementById('mernCount');
    const reactBadge = document.getElementById('reactCount');
    const nodeBadge = document.getElementById('nodeCount');
    const cppBadge = document.getElementById('cppCount');
    const pythonBadge = document.getElementById('pythonCount');

    if (allBadge) allBadge.textContent = users.length;
    if (mernBadge) mernBadge.textContent = users.filter(u => u.course?.toLowerCase() === 'mern').length;
    if (reactBadge) reactBadge.textContent = users.filter(u => u.course?.toLowerCase() === 'react').length;
    if (nodeBadge) nodeBadge.textContent = users.filter(u => u.course?.toLowerCase() === 'node.js').length;
    if (cppBadge) cppBadge.textContent = users.filter(u => u.course?.toLowerCase() === 'c++').length;
    if (pythonBadge) pythonBadge.textContent = users.filter(u => u.course?.toLowerCase() === 'python').length;
};

// ================================================================
// ESCAPE HTML
// ================================================================

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ================================================================
// CREATE USER CARD
// ================================================================

const createUserCard = (user, isLocal) => {
    return `
        <div class="user-card">
            <div class="card-name">${escapeHtml(user.name)}</div>
            <div class="card-email">${escapeHtml(user.email)}</div>
            <div class="flex items-center justify-between flex-wrap gap-2">
                <span class="card-course">${escapeHtml(user.course)}</span>
                ${isLocal ? `
                    <div class="card-actions">
                        <button onclick="editUser(${user.id})" class="btn-edit">
                            ✏️ Edit
                        </button>
                        <button onclick="deleteUser(${user.id})" class="btn-danger">
                            🗑️ Delete
                        </button>
                    </div>
                ` : `
                    <span class="text-sm text-gray-400 dark:text-gray-500">API User</span>
                `}
            </div>
        </div>
    `;
};

// ================================================================
// RENDER USERS
// ================================================================

const renderUsers = (usersToDisplay = users) => {

    const container = document.getElementById("userTableBody");
    const emptyMsg = document.getElementById("emptyMessage");

    // Update counters
    document.getElementById("userCount").textContent = users.length;
    
    const apiCount = users.filter(u => u.source === 'api').length;
    const localCount = users.filter(u => u.source !== 'api').length;
    
    const apiEl = document.getElementById("apiUserCount");
    const localEl = document.getElementById("localUserCount");
    if (apiEl) apiEl.textContent = apiCount;
    if (localEl) localEl.textContent = localCount;

    updateFilterCounts();

    // Empty state
    if (usersToDisplay.length === 0) {
        emptyMsg.style.display = "block";
        container.innerHTML = "";
        return;
    }
    emptyMsg.style.display = "none";

    // Separate users
    const localUsers = usersToDisplay.filter(u => u.source !== 'api');
    const apiUsers = usersToDisplay.filter(u => u.source === 'api');

    let html = '';

    // ================================================================
    // LOCAL USERS FIRST
    // ================================================================
    if (localUsers.length > 0) {
        html += `
            <div class="section-divider">
                📋 Local Users (${localUsers.length})
            </div>
        `;
        localUsers.forEach(user => {
            html += createUserCard(user, true);
        });
    }

    // ================================================================
    // API USERS AFTER LOCAL USERS
    // ================================================================
    if (apiUsers.length > 0) {
        html += `
            <div class="section-divider mt-4">
                🌐 API Users (${apiUsers.length})
            </div>
        `;
        apiUsers.forEach(user => {
            html += createUserCard(user, false);
        });
    }

    container.innerHTML = html;
};

// ================================================================
// APPLY FILTERS
// ================================================================

let currentFilter = 'all';

const applyFiltersAndRender = () => {
    let filtered = [...users];

    const searchVal = searchInput.value.toLowerCase().trim();
    if (searchVal !== '') {
        filtered = filtered.filter(u => u.name.toLowerCase().includes(searchVal));
    }

    if (currentFilter !== 'all') {
        filtered = filtered.filter(u => u.course?.toLowerCase() === currentFilter.toLowerCase());
    }

    renderUsers(filtered);
};

// ================================================================
// FILTER BUTTONS
// ================================================================

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('filter-btn-active');
            b.classList.add('filter-btn-inactive');
        });
        this.classList.remove('filter-btn-inactive');
        this.classList.add('filter-btn-active');
        currentFilter = this.dataset.filter;
        applyFiltersAndRender();
    });
});

// ================================================================
// ADD USER
// ================================================================

userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const course = courseInput.value.trim();

    if (!name || !email || !course) {
        formMessage.textContent = "⚠️ Please fill all fields.";
        formMessage.className = "message-error";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.textContent = "⚠️ Please enter a valid email.";
        formMessage.className = "message-error";
        return;
    }

    if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        formMessage.textContent = "⚠️ Email already exists.";
        formMessage.className = "message-error";
        return;
    }

    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        course: course,
        source: 'local'
    };

    users.push(newUser);
    saveUsersToLocalStorage();
    applyFiltersAndRender();
    userForm.reset();

    formMessage.textContent = "✅ User added successfully!";
    formMessage.className = "message-success";
    setTimeout(() => {
        formMessage.textContent = "";
        formMessage.className = "";
    }, 2000);
});

// ================================================================
// EDIT USER
// ================================================================

let currentEditId = null;

const editUser = (id) => {
    const user = users.find(u => u.id === id);
    if (!user) {
        alert("User not found!");
        return;
    }
    currentEditId = id;
    document.getElementById("editName").value = user.name;
    document.getElementById("editEmail").value = user.email;
    document.getElementById("editCourse").value = user.course;
    document.getElementById("editModal").style.display = "flex";
    document.getElementById("editName").focus();
};

const closeEditModal = () => {
    document.getElementById("editModal").style.display = "none";
    currentEditId = null;
    document.getElementById("editForm").reset();
};

document.getElementById("editForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("editName").value.trim();
    const email = document.getElementById("editEmail").value.trim();
    const course = document.getElementById("editCourse").value.trim();

    if (!name || !email || !course) {
        alert("All fields are required.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email.");
        return;
    }

    if (users.some(u => u.email.toLowerCase() === email.toLowerCase() && u.id !== currentEditId)) {
        alert("Email already exists.");
        return;
    }

    const user = users.find(u => u.id === currentEditId);
    if (user) {
        user.name = name;
        user.email = email;
        user.course = course;
    }

    saveUsersToLocalStorage();
    applyFiltersAndRender();
    closeEditModal();

    formMessage.textContent = "✅ User updated successfully!";
    formMessage.className = "message-success";
    setTimeout(() => {
        formMessage.textContent = "";
        formMessage.className = "";
    }, 2000);
});

// Close modal on outside click
window.onclick = (e) => {
    if (e.target === document.getElementById("editModal")) {
        closeEditModal();
    }
};

// Close modal on ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeEditModal();
});

// ================================================================
// DELETE USER
// ================================================================

const deleteUser = (id) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    users = users.filter(u => u.id !== id);
    saveUsersToLocalStorage();
    applyFiltersAndRender();
};

// ================================================================
// SEARCH
// ================================================================

searchInput.addEventListener("input", applyFiltersAndRender);

// ================================================================
// FETCH API USERS
// ================================================================

const fetchUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error("Failed to fetch");

        const apiUsers = await response.json();
        const mapped = apiUsers.map(u => ({
            id: 'api_' + u.id,
            name: u.name,
            email: u.email,
            course: "MERN",
            source: 'api'
        }));

        if (!users.some(u => u.source === 'api')) {
            users = [...users, ...mapped];
            saveUsersToLocalStorage();
        }

        applyFiltersAndRender();
        statusMessage.textContent = "";
        statusMessage.className = "";

    } catch (error) {
        console.error(error);
        statusMessage.textContent = "❌ Unable to load users.";
        statusMessage.className = "message-error";
        applyFiltersAndRender();
    }
};

// ================================================================
// START APP
// ================================================================

const startApp = async () => {
    statusMessage.textContent = "⏳ Loading users...";
    statusMessage.className = "message-loading";

    loadUsersFromLocalStorage();
    applyFiltersAndRender();
    await fetchUsers();
};

startApp();