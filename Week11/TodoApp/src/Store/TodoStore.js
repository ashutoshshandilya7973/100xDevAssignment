import {atom ,selector} from 'recoil';

export const todoListState = atom({
    key: 'todoListState',
    default: [],                                  
});
 export const todoStat=atom({
    key:'todoStat',
    default:false,
 })

export const todoListStat=selector({
    key:'todoListStat',
    get:({get})=>{
        const list=get(todoListState);
        const totalTodo=list.length;
        const completedTodo=list.filter((todo)=>todo.status===true).length;
        const incompletedTodo=totalTodo-completedTodo;
        const percentCompleteTodo=parseInt(completedTodo/totalTodo*100);
        return {
            totalTodo,
            completedTodo,
            incompletedTodo,
            percentCompleteTodo
        };
    },
});