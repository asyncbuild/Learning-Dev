const express = require('express')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors({
    origin : "*"
}))

let num = 0;
const users = []
const JWT_SECRET = "asdfg"

function auth(req,res,next){
    const token = req.headers.token
    if(!token){
        return res.status(400).json({
            message : "Token missing"
        })
    }
    try {
        const decodeUser = jwt.verify(token,JWT_SECRET)
        req.username = decodeUser.username
        next();
    } catch (error) {
        return res.status(403).json({
            message : "Invalid token"
        })
    }
}

app.post('/signup',function(req,res){
    const username = req.body.username
    const password = req.body.password
    
    const existingUser = users.find(u=>u.username === username)
    if(existingUser){
        return res.status(409).json({
            message : "User exists"
        })
    }
    try {
            users.push({
                username:username,
                password:password,
                todos : []
            })
            res.status(200).json({
                message : "Signup successfull"
            })
        } catch (error) {
            console.error("Error in signing up ",error)
            res.status(409).json({
                message : "Something went wrong"
            })
        }
})

app.post('/signin', function(req,res){
    const {username,password} = req.body;
    const findUser = users.find(u=>u.username === username && u.password === password)
    if(!findUser){
        return res.status(401).json({
            message : "Unauthorized"
        })
    }
    try {
        const token = jwt.sign({username : findUser.username},JWT_SECRET)
        return res.status(200).json({
            token : token,
            message : "Signin successfull"
        })
    } catch (error) {
        console.error("Error in signing in ",error)
        return res.status(500).json({
            message : "Something went wrong"
        })
    }
})

app.get('/me',auth,function(req,res){
    res.json({
        username : req.username,
    })
})

app.post('/add-todo',auth,function(req,res){
    const currUser = req.username
    const {title} = req.body
    const findUser = users.find(u=>u.username === currUser)

    if(!findUser){
        return res.status(404).json({
            message : "User not found"
        })
    }

    const newTodo = {
        id : num+1,
        title:title,
        done:false
    }
    num++;
    findUser.todos.push(newTodo);
    res.status(200).json({
        message : "Todo added",
        todo : newTodo
    })
})

app.get('/todos',auth,function(req,res){
    const currUser = req.username
    const findUser = users.find(u=>u.username === currUser)

     if (!findUser) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    return res.status(200).json({
        todos: findUser.todos
    });
})

app.patch('/update-todo',auth,function(req,res){
    const currUser = req.username
    const {id,title,done} = req.body;
    const findUser = users.find(u=>u.username === currUser)
    if(!findUser){
        return res.status(404).json({
            message : "User not found"
        })
    }
    const todo = findUser.todos.find(t=>t.id == id)

     if (!todo) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    if (title !== undefined) {
        todo.title = title;
    }

    if (done !== undefined) {
        todo.done = done;
    }

    return res.status(200).json({
        message: "Todo updated",
        todo: todo
    });
})

app.delete('/delete-todo',auth,function(req,res){
    const currUser = req.username;
    const { id } = req.body;

    const findUser = users.find(u => u.username === currUser);

    if (!findUser) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const todoIndex = findUser.todos.findIndex(t => t.id === id);

    if (todoIndex === -1) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }

    findUser.todos.splice(todoIndex, 1);

    return res.status(200).json({
        message: "Todo deleted successfully"
    });
})

app.listen(3000,()=>{
    console.log('Server running on port 3000');
})