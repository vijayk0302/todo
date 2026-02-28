
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import dayjs from 'dayjs'
import api from "../api/api";

const TodoList = ({ data ,fetch,setPopcontent,setShow }) => {

  const deletetask=async(id)=>{
    if (window.confirm("Are you sure you want to delete this Task?")){
      await api.delete(`/api/todo/delete/${id}`)
      fetch()
    }

  }
const toggle=async(id)=>{
    await api.put(`/api/todo/marked/${id}`)
    fetch()
}

const handleEdit=(item)=>{
  setPopcontent(item)
  setShow(true)
}
  
  return (
    <>
      {data.map((item, index) => (
        <div  
          key={index}
          className="m-4 lg:w-full md:w-full min-h-fit p-4 shadow-lg rounded-lg bg-white"
        >
          <div className="mb-3 flex justify-between items-center">
            <h3 className={` text-2xl font-semibold ${ item.completed ? 'line-through text-gray-400' : ''}`} >
            {item.task}
            </h3>
            <div className=' flex gap-3'>
            <FaRegEdit onClick={()=>handleEdit(item)} className='hover:text-[#007bff] cursor-pointer text-2xl' />
            <input type="checkbox" checked={item.completed} onChange={()=>toggle(item._id)} className="w-5 cursor-pointer" />
            </div>
          </div>

          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-sm text-gray-500">{item.date?dayjs(item.date).format("YYYY-MM-DD"):null}</p>
            </div>

            <MdOutlineDeleteForever onClick={()=>deletetask(item._id)}  className="text-4xl text-red-600 cursor-pointer p-1 font-bold hover:bg-gray-100 hover:rounded  hover:text-red-800" />
          </div>
        </div>
      ))
      }

    </>
  )
}

export default TodoList