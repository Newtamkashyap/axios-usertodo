import React, { useState } from 'react';
import axios from 'axios';

export const TodoRemove = () => {
    const [taskId, setTaskId] = useState('');

    const handleTaskIdChange = (event) => {
        setTaskId(event.target.value);
        console.log('Task ID:', event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.delete(`https://jsonplaceholder.typicode.com/posts`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
            })
            .catch((error) => {
                console.error('There was an error deleting the task!', error);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Task ID:
                    <input type="number" name="taskId" value={taskId} onChange={handleTaskIdChange} />
                </label>
           
                <button type="submit">Delete</button>
            </form>
        </div>
    );
};