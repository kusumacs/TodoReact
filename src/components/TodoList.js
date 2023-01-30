import Todo from "./Todo";

const TodoList=({todolist,settodolist})=>{

return(
<div>
{todolist.map((item)=>(
    // <h1>{item}</h1>
    <Todo item={item} todolist={todolist} settodolist={settodolist}></Todo>
))
}
</div>
)
}

export default TodoList;