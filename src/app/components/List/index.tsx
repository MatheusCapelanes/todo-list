

import { taskMock, TaskProps } from "@/app/mock/tasks";
import { use, useState } from "react";


const List = () => {
 const [tasks, setTasks] = useState<TaskProps[]>(taskMock)

 return (

  <div className="">
   {tasks.map((task) => (
    <div className="mt-2 flex w-1/2 m-auto ">
     <input checked={task.completed} type="checkbox" id={task.id} className="mr-3" />
     <h1 id={task.id}>{task.title}</h1>
    </div>
   ))}
  </div>

 )
}

export default List;