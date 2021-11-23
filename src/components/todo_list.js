import React, { useState, useEffect } from 'react';
import API from '../api/task';

function TodoList() {
    
    const [todos, setTodos] = useState([]);


    useEffect(() => {

        API.get('/todo')
            .then((response) => {
                setTodos(response.data);
            }).catch((error) => {
                console.log(error);
            });
        
    },[]);

    return (
        <ul className="list-group mt-4">
            {todos.map((res) => (
                <li key={res.id} className="list-group-item list-group-item-info">
                    <span className="input-label">{res.title}</span>
                </li>
            ))}
        </ul>
    )
}

export default TodoList;