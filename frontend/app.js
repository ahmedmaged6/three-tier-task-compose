// app.js
const apiUrl = 'http://localhost:5000/tasks';  // Update this URL to match your backend API

// Fetch and display tasks
async function loadTasks() {
    try {
        const response = await fetch(apiUrl);
        const tasks = await response.json();
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${task.name} - ${task.description}</span>
                <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            `;
            taskList.appendChild(taskItem);
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

// Create a new task
async function createTask() {
    const name = document.getElementById('task-name').value;
    const description = document.getElementById('task-description').value;

    if (!name || !description) {
        alert('Please fill in all fields');
        return;
    }

    const newTask = { name, description };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask)
        });
        const task = await response.json();
        loadTasks();  // Refresh task list after adding a new task
    } catch (error) {
        console.error('Error creating task:', error);
    }
}

// Delete a task
async function deleteTask(id) {
    try {
        await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE'
        });
        loadTasks();  // Refresh task list after deleting
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}

// Edit a task
async function editTask(id) {
    const name = prompt('Enter new task name:');
    const description = prompt('Enter new task description:');

    if (!name || !description) {
        alert('Please fill in both fields');
        return;
    }

    const updatedTask = { name, description };

    try {
        await fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTask)
        });
        loadTasks();  // Refresh task list after editing
    } catch (error) {
        console.error('Error editing task:', error);
    }
}

// Initial load
loadTasks();
