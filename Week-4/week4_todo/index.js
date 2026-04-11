/* 1. Load the Express library */
const express = require("express");
const app = express();

/* 2. Our "In-Memory" database (just a simple list) */
let todos = [];

/* 3. Tell Express to understand JSON data and serve our website files */
app.use(express.json());
app.use(express.static('public'));

/* 4. ROUTE: GET /todos (Send the list of todos to the browser) */
app.get('/todos', function(req, res) {
    res.json(todos);
});

/* 5. ROUTE: POST /todos (Save a new todo sent from the browser) */
app.post('/todos', function(req, res) {
    const newTodo = {
        id: Date.now(),    // Use the current time to create a unique ID
        title: req.body.title
    };
    todos.push(newTodo);   // Add it to our list
    res.json(newTodo);     // Send the new todo back to confirm
});

/* 6. ROUTE: DELETE /todos/:id (Remove a todo from the list) */
app.delete('/todos/:id', function(req, res) {
    const idToDelete = parseInt(req.params.id);
    // Keep only the todos that DON'T match this ID
    todos = todos.filter(todo => todo.id !== idToDelete);
    res.json({ message: "Deleted!" });
});

/* 7. Start the server */
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running! Visit http://localhost:${PORT}`);
});