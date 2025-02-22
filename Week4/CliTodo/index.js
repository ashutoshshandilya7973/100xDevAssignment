import { Command } from "commander";
import fs from "fs";

const program = new Command();

program
    .name("Todo")
    .description("This is a simple Todo app")
    .version("1.0.0");

program
    .command("AddTodo")
    .description("Adds a new todo to the file")
    .argument("<text>", "Todo that would be added in the list")
    .action((text) => {
        const filePath = "todo.json";
        let todos = [];
        const data = fs.readFileSync(filePath, "utf-8");
        if (data.trim()) {
            todos = JSON.parse(data);
        }
        const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

        const newTodo = {
            id: newId,
            title: text,
            isComplete: false
        };

        todos.push(newTodo);
        fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));

        console.log("Todo added successfully!");
    });

program
    .command("complete")
    .description("Mark a task as completed")
    .argument("<id>", "Task ID to mark as completed")
    .action((id) => {
        const taskId = Number(id);
        let data = fs.readFileSync("todo.json", "utf-8");
        let newData = data.trim() ? JSON.parse(data) : [];

        let taskFound = false;
        for (let i = 0; i < newData.length; i++) {
            if (newData[i].id === taskId) {
                newData[i].isComplete = true;
                taskFound = true;
                break;
            }
        }

        if (!taskFound) {
            console.log(`Task with ID ${taskId} not found.`);
            return;
        }

        fs.writeFileSync("todo.json", JSON.stringify(newData, null, 2), "utf-8");
        console.log("Task marked as completed successfully!");
    });

program
    .command("deleteTodo")
    .description("this command will delete the specific todo from the list")
    .argument("<text>", "this is the id of the todo which we are gonna deleted")
    .action((text) => {
          const id=Number(text);
          const data=fs.readFileSync("todo.json","utf-8");
          let newData = data.trim() ? JSON.parse(data) : [];
          let todo=newData.filter((data)=>data.id!=id);
        
          fs.writeFileSync("todo.json",JSON.stringify(todo,null,2),"utf-8");
          console.log("specific todo has been deleted");
          
    })

program.parse(process.argv);
