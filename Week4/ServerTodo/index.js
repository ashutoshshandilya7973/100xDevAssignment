import express from 'express'
import fs from 'fs'
const app = express();

app.use(express.json())


app.post('/post', (req, res) => {
    let todo = []
    const body = req.body;
    const data = fs.readFileSync('todo.json', 'utf-8')

    todo = data ? JSON.parse(data) : []

    const id = todo.length + 1;
    const upload = {
        id: id,
        title: body.title,
        isComplete: false
    }
    todo.push(upload);
    try {
        fs.writeFileSync('todo.json', JSON.stringify(todo, null, 2), 'utf-8');
        console.log("Todo successfully added to the file");
        res.status(200).send({ message: "Todo successfully added to the file" });
    } catch (error) {
        console.error("Error writing file:", error);
        res.status(500).send({ message: "Error saving todo" });
    }
})

app.get('/getTodo', (req, res) => {

    const data = fs.readFileSync('todo.json', 'utf-8');
    const todo = data ? JSON.parse(data) : [];

    res.status(201).send({ data: todo })

})

app.post('/complete', (req, res) => {
    const id = Number(req.body.id);

    const data = fs.readFileSync('todo.json', 'utf-8')
    const todo = data ? JSON.parse(data) : [];
    const newTodo = todo.map(item => {
        if (item.id === id) {
            item.isComplete = true;
        }
        return item
    })

    fs.writeFileSync('todo.json', JSON.stringify(newTodo, null, 2), 'utf8')
    console.log("todo status is updated");
    res.status(200).send({ data: newTodo, message: "todo status is updated" })

})

app.post('/todoDelete', (req, res) => {
    const id = Number(req.body.id);
    const data = fs.readFileSync('todo.json', 'utf-8');
    const newdata = data ? JSON.parse(data) : [];
    const upload = newdata.filter(item => item.id != id);
    fs.writeFileSync('todo.json', JSON.stringify(upload, null, 2), 'utf-8');
    console.log("todo is successfully deleted from the file ");
    res.status(200).send({ data: upload, message: "todo is successfully deleted from the file" })
})



const port = 4000;

app.listen(port, () => {
    console.log(`app is running on the server whose port is ${port}`)
})

