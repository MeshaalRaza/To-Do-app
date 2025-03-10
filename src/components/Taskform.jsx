import React,{useState} from 'react';
import "./Taskform.css";
import Tag from './Tagcomponent'
const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
      task: "",
      status: "todo",
      tags: [],
    });
  
    console.log("Task Data :", taskData);
  
    const checkTag = (tag) => {
      return taskData.tags.some((item) => item === tag);
    };
  
    const selectTag = (tag) => {
      if (taskData.tags.some((item) => item === tag)) {
        const filterTags = taskData.tags.filter((item) => item !== tag);
        setTaskData((prev) => {
          return { ...prev, tags: filterTags };
        });
      } else {
        setTaskData((prev) => {
          return { ...prev, tags: [...prev.tags, tag] };
        });
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setTaskData((prev) => {
        return { ...prev, [name]: value };
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(taskData);
      setTasks((prev) => {
        return [...prev, taskData];
      });
      setTaskData({
        task: "",
        status: "todo",
        tags: [],
      });
    };
    return (
      <header className="application_header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={taskData.task}
            className="task_input"
            placeholder="Enter your task"
            onChange={handleChange}
          />
  
          <div className=".taskform_bottomline">
            <div>
              <Tag
                tagName="HTML"
                selectTag={selectTag}
                selected={checkTag("HTML")}
              />
              <Tag
                tagName="CSS"
                selectTag={selectTag}
                selected={checkTag("CSS")}
              />
              <Tag
                tagName="JavaScript"
                selectTag={selectTag}
                selected={checkTag("JavaScript")}
              />
              <Tag
                tagName="React"
                selectTag={selectTag}
                selected={checkTag("React")}
              />
            </div>
  
            <div>
              <select
                name="status"
                value={taskData.status}
                className="taskstatus"
                onChange={handleChange}
              >
                <option value="todo">To do</option>
                <option value="doing">In Progress</option>
                <option value="done">Completed</option>
              </select>
              <button type="submit" className="task_submission">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    );
  };
  
  export default TaskForm;
// const[task,setTask]=useState("");
    // const[status,setStatus]=useState("todo"); // by-default it would be to-do
    // const handleTaskChange=(e)=>{
    //     setTask(e.target.value);
    // }
    // const handleStatusChange=(e)=>{
    //     setStatus(e.target.value);
    // }
    // console.log(task,status)