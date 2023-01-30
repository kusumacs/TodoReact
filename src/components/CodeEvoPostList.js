import {useState,useEffect} from 'react';

export const PostList=()=>{
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp=>resp.json())
        .then(data=>setPosts(data))
        .catch(err=>{
            console.log(err)
        })
    },[])

    return <div>
        {
            posts.map(post=>{
                return <li key={post.id}>{post.title}</li>
            })

        }
    </div>
}