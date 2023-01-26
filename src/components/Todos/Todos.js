import {useEffect, useState} from "react";
import {jsonPlaceHolderService} from "../../services";
import {Todo} from "../Todo/Todo";

export function Todos() {
const [todos, setTodos] = useState([])

    useEffect (() =>{
    jsonPlaceHolderService.getTodos().then(({data})=>setTodos([...data]))
    },[])

    return (
        <div>
            {todos.map(todo =><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
}