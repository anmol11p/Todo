import React from 'react'
const ClearAll = ({task,setTask}) => {
    const handleClearAll=()=>{
        localStorage.removeItem("tasks");
        setTask([])
          }
  return (
    <>
     {task.length>1?<button className="clear_all" onClick={(e)=>handleClearAll(e)}> clear all</button>:""}
    </>
  )
}

export default ClearAll