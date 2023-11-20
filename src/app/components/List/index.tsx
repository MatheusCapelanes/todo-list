import { Divider } from "@nextui-org/divider";
import AddTask from "../AddTask";


const List = () => {
 return (

  <div className="flex justify-center">
   <div className="w-1/2">
    <div  className="my-5 ">
     <AddTask />
     <Divider />
    </div>
    <ul className="list-disc">
     <li className="flex justify-between items-center py-2 border-b">
      <span className="text-xl">Task #1</span>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
     </li>
     <li className="flex justify-between items-center py-2 border-b">
      <span className="text-xl">Task #2</span>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
     </li>
     <li className="flex justify-between items-center py-2 border-b">
      <span className="text-xl">Task #3</span>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
     </li>
    </ul>
   </div>
  </div>

 )
}

export default List;