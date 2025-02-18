import React,{useState} from 'react';
import { todoListState,todoStat } from '../Store/TodoStore';
import { useRecoilState } from 'recoil';

const ShowTodo = () => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const [todoStat1, setTodoStat] = useRecoilState(todoStat);
    const [filter,setFilter]= useState('All');
    function checkHandler(id) {
        setTodoList((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, status: !todo.status } : todo
            )
        );
    }
    function clickHandler(id){
        setTodoList((prev)=>{
           return prev.filter((todo)=>todo.id!==id);
        })
    }
    return (
        <div className='flex flex-col items-center gap-3'>
            <div className=" flex gap-2">
                <h1 className='text-3xl'>Todo List</h1>
                <button className='bg-slate-800 text-white p-2 rounded-md' onClick={()=>{setFilter('All');setTodoStat(false)}}>All</button>
                <button className='bg-slate-800 text-white p-2 rounded-md' onClick={()=>setFilter('Completed')}>Completed</button>
                <button className='bg-slate-800 text-white p-2 rounded-md' onClick={()=>setTodoStat(true)}>See stat</button>


            </div>
            <div className='flex flex-col items-center gap-2'>
                {filter==='All'?todoList.map((todo) => (
                    <div key={todo.id} className='flex items-center gap-2'>
                        <input className='cursor-pointer h-5 w-5'
                            type='checkbox'
                            checked={todo.status}
                            onChange={() => checkHandler(todo.id)}
                        />
                        <p className='text-2xl text-violet-900'>{todo.title}</p>
                        <button className='bg-slate-800 cursor-pointer text-white rounded-md p-1' onClick={()=>clickHandler(todo.id)}>Delete</button>
                    </div>
                )):todoList.filter((todo)=>todo.status===true).map((todo)=>{
                    return <div key={todo.id} className='flex items-center gap-2'>
                        <input className='cursor-pointer h-5 w-5'
                            type='checkbox'
                            checked={todo.status}
                            onChange={() => checkHandler(todo.id)}
                        />
                        <p className='text-2xl text-violet-900'>{todo.title}</p>
                        <button className='bg-slate-800 cursor-pointer text-white rounded-md p-1' onClick={()=>clickHandler(todo.id)}>Delete</button>
                    </div>
                })}
            </div>
        </div>
    );
};

export { ShowTodo };
