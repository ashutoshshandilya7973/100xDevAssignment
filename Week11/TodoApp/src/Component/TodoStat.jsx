import React from 'react'
import { todoListStat } from '../Store/TodoStore'
import { useRecoilValue } from 'recoil'
const TodoStat = () => {
    const {totalTodo,completedTodo,incompletedTodo,percentCompleteTodo}=useRecoilValue(todoListStat);
    return (
        <div className='flex flex-col items-center gap-3'>
            <h1 className='text-3xl'>Todo Stats</h1>
            <p>Total Todos: {totalTodo}</p>
            <p>Completed Todos: {completedTodo}</p>
            <p>Incompleted Todos: {incompletedTodo}</p>
            <p>Percent Completed: {percentCompleteTodo}%</p>
        </div>
    )
}

export  {TodoStat}
