import React, { useState } from 'react';
import API from '../api/task';

function TodoCreate() {
    
    const [title, setTitle] = useState("");

    const onValChange = ((e) => {
        setTitle(e.target.value );
    });

    const onSubmit = ((e) => {
        const TASK = {
            title: title
        };

        if (TASK.title) {
            API.post('/todo', TASK)
            .then((response) => {
                console.log(response.data)
            }).catch((error) => {
                console.log(error)
            });

           setTitle("");
        }
    });

    return (
        <div>
            <form onSubmit={ onSubmit }>
                <div className="form-group">
                    <label className="mb-2"><strong>Add Task</strong></label>
                    <input type="text" className="form-control" value={ title } onChange = {onValChange} />
                </div>

                <div className="d-grid mt-3">
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default TodoCreate;