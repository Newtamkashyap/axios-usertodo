import { useState } from "react";
import axios from "axios";


export const TodoEdit = () => {

    const [editTask, setEditTask] = useState('');

    const handleChange=(event)=>{
        setEditTask(event.target.value);
        console.log(event.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    axios.post("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{
        console.log(res);
        console.log(res.data)
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Editing :
                    <input type="number" required='' />
                </label>
                <button type="submit" name="editTask" vlaue={editTask} onClick={handleChange}>Edit</button>


            </form>

        </div>
    )
}