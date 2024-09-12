import axios from "axios";
import { useEffect, useState } from "react";
import './userData.css'
export const UserData = () => {

    const [datas, setDatas] = useState([]);
    const [isError, setIsError] = useState(''); //Error handling 

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setDatas(res.data))
            .catch((error) =>
                setIsError(error.message)
            )
    }, [])
    return (
        <div >
            <h1>Axios Example</h1>
            {isError !== "" && <h2>{isError}</h2>}
            <div className="grid">
                {datas.map((post) => {
                    // const{id,title,body}=post;-----this way also we can use
                    return <div className="card" key={post.id}>
                        <h2>{post.title.slice(0, 15).toUpperCase()}</h2>
                        <p>{post.body.slice(0, 120)}</p>

                    </div>
                })}
            </div>


        </div>
    )
}