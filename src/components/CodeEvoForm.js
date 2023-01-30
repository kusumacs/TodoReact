import { useState,useEffect} from "react";

export const CodeEvoForm=()=>{

    


        const [title,setTitle]=useState('');
        const [userId,setUserId]=useState();
        const [body,setBody]=useState();

        const onTitle=(e)=>{
            setTitle(e.target.value);
        }
        const onUserId=(e)=>{
            setUserId(e.target.value);
        }
        const onBody=(e)=>{
            setBody(e.target.value);
        }

        const submit=(event)=>{
            event.preventDefault();

            fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId:userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json,"sd"));
        }
    return(
    <div>
        <form onSubmit={submit}>
            Title:<input type="text" value={title} onChange={onTitle}></input>
            userId:<input type="text" value={userId} onChange={onUserId}></input>
            body:<input type="text" value={body} onChange={onBody}></input>
            <button type="submit">Submit</button>
        </form>
    </div>
    )
}