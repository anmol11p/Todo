import React, {useState } from "react";
import "./Todo.css";

const Todoform = ({onTodo}) => {
  const [inputvalue, setinputvalue] = useState({});
  
      const handleOnchange = (value) => {
        setinputvalue({id:value,content:value,checked:false});

      };

      const handeleformSubmit = (e) => {
        e.preventDefault();
            onTodo(inputvalue);
            setinputvalue({id:'',content:"",checked:false});
      };

  return (
    <>
    <form action="" className="form" onSubmit={handeleformSubmit}>
    <div>
      <input
        className="Todo-input"
        type="text"
        placeholder="enter task"
        value={inputvalue.content || ""}
        onChange={(e)=>handleOnchange(e.target.value)}  
      />
    </div>
    <div>
      <button
     disabled={!inputvalue.content || inputvalue.content.length < 1}
        type="submit"
        className={`todo-btn ${inputvalue.length < 1 ? "" : "Hover"}`}
      >
        Add Task
      </button>
    </div>
  </form>
  </>
  )
}

export default Todoform