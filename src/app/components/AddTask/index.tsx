import { Divider } from "@nextui-org/divider";



const AddTask = () => {
 return (
  <>
   <div className="flex justify-around items-center py-3">
    <h1 className="font-light text-xl">New task</h1>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
   </div>
   <Divider />
  </>
 )
}

export default AddTask;