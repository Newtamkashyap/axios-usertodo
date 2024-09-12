import { useState } from "react";
import axios from "axios";


export const TodoUpdate=()=>{

    const[id,setId]=useState('');


    const handleIdChange=(e)=>{
        setId(e.target.value);
        console.log('task id',e.target.value);
    }



    function handleSubmit(event){
        event.preventDefault();
    }

    const changeTask={
        "title":"i m changed"
    };

    axios.put('https://jsonplaceholder.typicode.com/posts',changeTask)
    .then(res=>{
        console.log(res);
        console.log(res.data);
    })
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Updating the task by id :</label>
                <input type="number" name='id' value={id} onChange={handleIdChange}/>
                <button>Update Id</button>
            </form>
        </div>
    )
}