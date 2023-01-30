import NAMES from './data.json';
import {useState,useTransition} from'react';

export  const  UseTransitioneffect=()=>{
const [query,setQuery]=useState('');
const [value,setValue]=useState('');
const [isPending,setMethod]=useTransition();

const change=(event)=>{
  setMethod(()=>setQuery(event.target.value))
    // setQuery(event.target.value);
}
const filteredNames=NAMES.filter((item)=>{
  return  item.firstName.includes(query)
})

return <div>
<input type="text" value={query} onChange={change}/>
{isPending && <h1>Updating list</h1>}
{filteredNames.map((item)=>(
    <h1 key={item.userId}>{item.firstName}</h1>
))}
</div>
}