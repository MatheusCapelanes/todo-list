import { useTask } from "@/redux/slice";
import { useSelector } from "react-redux";


const List = () => {

 const task = useSelector(useTask)

 return (

  <div className="">
   {task.map((task) => (
    <div className="mt-2 flex w-1/2 m-auto ">
     <input type="checkbox" id={task.id} className="mr-3" />
     <h1 id={task.id}>{task.title}</h1>
    </div>
   ))}
  </div>

 )
}

export default List;