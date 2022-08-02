import {useState} from "react"

async function getData(){
    return fetch("https://jsonplaceholder.typicode.com/posts").then(res=>{
        return res.json()
    })
    
}

function Posts(){
    const [post,setPost]=useState([]);

    const handleFetchData=async()=>{
        try{
            let res=await getData();
            // let data=await res.json()
            setPost(res)
            console.log(res)
           
        }catch(err){
            console.log(err)
        }
        
        // console.log("hey")
    }

    return (
        <div>
            <h3>POSTS</h3>
            <button onClick={handleFetchData}>GET POSTS</button>
            <ul>{post.map(el=><li key={el.id}>{el.title}</li>)}</ul>
        </div>
    )
}

export default Posts;