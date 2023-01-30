import styles from "../style.module.css";

const Form=({todo,settodo,todolist,settodolist})=>{
 
    const handleChange=(event)=>{
        console.log(event);
        settodo(event.target.value);
    }

    const handlesubmit=(event)=>{
        event.preventDefault();
        settodolist([...todolist,todo]);
        console.log(todolist);
    }
    return(
        <div className={styles.todoform}>
            <form onSubmit={handlesubmit}>
                <input value={todo} onChange={handleChange} className={styles.todoinput} placeholder="Add Todo Item"></input>
                <button className={styles.todobutton}>Add</button>
            </form>
        </div>
    )
}

export default Form;