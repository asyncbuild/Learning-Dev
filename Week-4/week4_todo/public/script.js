/* Function to fetch the list from the server and show it on the page */
async function loadTodos() {
    // 1. Tell the browser to ask the server for the list (/todos)
    const response = await fetch('/todos');
    const todos = await response.json();

    // 2. Clear out the current list on the screen so we don't have duplicates
    const listDiv = document.getElementById('todoList');
    listDiv.innerHTML = '';

    // 3. For each todo item, create a new row with its title and a Delete button
    todos.forEach(todo => {
        const row = document.createElement('div');
        row.innerHTML = `
            <span>${todo.title}</span>
            <button onclick="deleteTodo(${todo.id})">Remove</button>
        `;
        listDiv.appendChild(row);
    });
}

/* Function to send a new todo to the server */
async function addTodo() {
    const input = document.getElementById('todoInput');
    
    // 1. Tell the server to save a new todo ({ title: input.value })
    await fetch('/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: input.value })
    });

    // 2. After it's saved, clear the input box and reload the list to show the new item
    input.value = '';
    loadTodos();
}

/* Function to tell the server to delete a specific item */
async function deleteTodo(id) {
    // 1. Tell the server to delete the todo with this specific ID
    await fetch('/todos/' + id, { method: 'DELETE' });
    
    // 2. Reload the list to show that it's gone
    loadTodos();
}

/* Run this when the page first opens so you see your todos immediately */
loadTodos();
