import { useTask } from "@/redux/slice";
import { useSelector } from "react-redux";
import { IoIosClose } from "react-icons/io";

const handleDelete = (e: any) => {
 console.log(e.target)
}

const List = () => {

 const task = useSelector(useTask)

 return (

  <div className="">
   {task.map((task) => (
    <div id={task.id} key={task.id} className="mt-2 flex w-1/2 m-auto justify-around">
     <input type="checkbox" id={task.id} className="mr-3" />
     <h1 className="grow" id={task.id}>{task.title}</h1>
     <IoIosClose onClick={handleDelete} className="text-2xl cursor-pointer"  />
    </div>
   ))}
  </div>

 )
}

export default List;