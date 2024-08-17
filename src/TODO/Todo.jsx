import React, { useState } from "react";
import "./components/Todo.css";
import DateandTime from "./components/DateandTime";
import Todoform from "./components/Todoform";
import Todolist from "./components/Todolist";
import ClearAll from "./components/ClearAll";
import { getlocalstoragedata,setlocalstoragedata } from "./components/Getlocalstoragedata";
const todo = () => {
  const [task, setTask] = useState(() => getlocalstoragedata());

  //form-submit
  const handeleformSubmit = (inputvalue) => {
    const { id, content, checked } = inputvalue;
    if (!content) return;
    const ifTodoMatched = task.find((currtask) => {
      return currtask.content === content;
    });
    if (ifTodoMatched) {
      return;
    }
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };
  //Add data to localStorage

  setlocalstoragedata(task);

  const handlecheckedtodo = (Task) => {
    const updateCheck = task.map((currTask) => {
      if (currTask.content === Task) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updateCheck);
  };
  return (
    <div className="Todo-Container">
      <h1 className="Todo-heading">Todo List</h1>
      {/* component1 */}
      <DateandTime />
      {/* component2 */}
      <Todoform onTodo={handeleformSubmit} />

      {/* task details */}

      <section className="myUnordList">
        <ul>
          {task.map((currtask) => {
            return (
              // Component3
              <Todolist
                currtask={currtask}
                task={task}
                setTask={setTask}
                key={currtask.id}
                checked={currtask.checked}
                onhandleCheckedtodo={handlecheckedtodo}
              />
            );
          })}
        </ul>
      </section>

      {/* deletebutton */}
      <ClearAll task={task} setTask={setTask} />
    </div>
  );
};

export default todo;
