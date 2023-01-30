import Header from "./components/Header";
import Form from "./components/Form";
import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { PostList } from "./components/CodeEvoPostList";
import { CodeEvoForm } from "./components/CodeEvoForm";
import {UseTransitioneffect} from "./components/UseTransitionEffect";
import {Routes,Route} from 'react-router-dom'
import {Home} from './components/Home';
import {About} from './components/About';

function App() {
  const [todo, settodo]=useState("");
  const [todolist,settodolist]=useState([]);
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>

      </Routes>
     {/* <React.Fragment>
      <> */}
      <Header></Header>
      <Form todo={todo} settodo={settodo} todolist={todolist} settodolist={settodolist} ></Form>
      <TodoList todolist={todolist} settodolist={settodolist}></TodoList>
      <PostList/>
      {/* <CodeEvoForm/> */}
      {/* <UseTransitioneffect/> */}
      {/* </>
      </React.Fragment> */}
    </div>
  );
}

export default App;
