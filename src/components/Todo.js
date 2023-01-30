const Todo=({item,todolist,settodolist})=>{
    const todoDelete=()=>{
    settodolist(todolist.filter(i=>i !==item ));
    }


    return(
        <div>
          <h1 key={item}>  {item}</h1>
          <button onClick={todoDelete}>Done</button>
        </div>
    )
}

export default Todo;