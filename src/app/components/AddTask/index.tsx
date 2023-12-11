import { TaskProps } from "@/app/mock/tasks";
import { Tasks, addTask } from "@/redux/slice";
import { Divider } from "@nextui-org/divider";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddTask = () => {
 const [add, setAdd] = useState<string>();
 const dispatch = useDispatch();

 const handleAddtask = () => {
  dispatch(addTask(add as string))
 }


 return (
  <>
   <div className="flex justify-around items-center py-3">
    <h1 className="font-light text-xl">Tasks</h1>
    <div className="flex gap-3">
     <input type="text" className="border border-gray-500 rounded-md px-2 py-1" value={add}  onChange={(e) => setAdd(e.target.value)} />
     <button onClick={handleAddtask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
    </div>
   </div>
   <Divider />
  </>
 )
}

export default AddTask;