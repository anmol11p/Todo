import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import "./Todo.css";

const Todolist = ({currtask,task,setTask,checked,onhandleCheckedtodo}) => {
console.log(checked);

    const handledelete=(tasks)=>{
        const filteredArray= task.filter((currtask)=>{ 
           return tasks!== currtask
         })
        
        setTask(filteredArray);
        localStorage.setItem("tasks",JSON.stringify(filteredArray))
       }
  return (
   <>
       <li className="currtask">
                <div className="taskDetails">
                  <div className={checked?"checklist":"notChecklist"} > {currtask.content}</div>
                  <button className="checkBTn" onClick={()=>onhandleCheckedtodo(currtask.content)}>
                    <IoMdCheckmarkCircle
                      style={{ color: "green", fontSize: "20px" }}
                    />
                  </button>
                  <button className="delBTn" onClick={()=>handledelete(currtask)} style={{cursor:'pointer'}}>
                    <MdDeleteForever
                      style={{ color: "red", fontSize: "20px" }}
                    />
                  </button>
                </div>
              </li>
   </>
  )
}

export default Todolist