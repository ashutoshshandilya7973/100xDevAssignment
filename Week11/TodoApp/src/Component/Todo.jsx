import React, { useState,useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState,todoStat } from "../Store/TodoStore.js";
import { ShowTodo } from "./ShowTodo";
import {TodoStat} from "./TodoStat.jsx";
const Todo = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState("");
  const todoStat1=useRecoilValue(todoStat);
  function handleClick() {
    if (!inputValue.trim()) return; 
    setTodoList((prevList) => [
      ...prevList,
      {
        id: Date.now(),
        title: inputValue,
        status: false,
      },
    ]);
    setInputValue("");
    
  }
  useEffect(()=>{
    console.log(todoList)
  },[todoList])

  const ChangeHandler = (e) => setInputValue(e.target.value);

  return (
    <div className="bg-[url('/img1.jpg')] bg-cover bg-center min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-4">This is my Todo Application</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter the todo"
          className="border p-2"
          value={inputValue}
          onChange={ChangeHandler}
        />
        <button className="bg-black text-white p-2" onClick={handleClick}>
          Add
        </button>
      </div>
      {
        todoStat1?<TodoStat/>:<ShowTodo/>
      }
      
    </div>
  );
};

export default Todo;
