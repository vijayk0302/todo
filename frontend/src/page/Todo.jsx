import React, { useEffect, useState } from 'react'
import Notask from '../component/Notask'
import TodoList from '../component/TodoList'
import Popup from '../component/Popup'
import api from '../api/api'
import { CiSearch } from "react-icons/ci";


const Todo = () => {
  useEffect(() => {
    fetchalltodo()
  }, [])

  const [todos, setTodos] = useState([])
  const[copytodos,setCopytodos]=useState([])

  const [todoitems, SetTodoitems] = useState({
    task: '',
    description: '',
    date: '',
    completed: false
  })
  const [show, setShow] = useState(false)
  const [popcontent, setPopcontent] = useState(null)

  const fetchalltodo = async () => {
    const res = await api.get('/api/todo')
    setTodos(res.data.todo)
    setCopytodos(res.data.todo)
  }

  const handlesubmit = async (e) => {
    e.preventDefault()

    await api.post('/api/todo/add', todoitems)
    SetTodoitems({
    task: '',
    description: '',
    date: '',
    completed: false
  })

  fetchalltodo()

  }

  const handlesearch=(e)=>{

    const keyword=e.target.value.toLowerCase();
    const oldtasks=[...copytodos]
    const results = oldtasks.filter((item=>item.task.toLowerCase().includes(keyword)))
    setTodos(results)

  }



  return (
    <div className='flex min-h-fit md:flex-row flex-col'>
      <div className="lg:w-1/3 md:w-1/2 sm:w-fit ">
        <div className="m-10 border shadow-lg rounded-lg">
          <h1 className="text-3xl mt-2 text-center font-bold">Add Task</h1>
          <form onSubmit={handlesubmit}>
            <div className="my-8 mx-3">
              <input value={todoitems.task}
                onChange={(e) => {
                  SetTodoitems({ ...todoitems, task: e.target.value })


                }} className="w-full border focus:border-transparent rounded-sm focus:ring-2 focus:ring-[#F43F5E] outline-none p-2" type="text" placeholder="Enter tasks..." />
              <input
                value={todoitems.description} onChange={(e) => {
                  SetTodoitems({ ...todoitems, description: e.target.value })


                }} className="w-full border focus:border-transparent rounded-sm focus:ring-2 focus:ring-[#F43F5E] outline-none p-2 mt-4" type="text" placeholder="Enter description..." />
              <input
                value={todoitems.date}
                onChange={(e) => {
                  SetTodoitems({...todoitems,  date: e.target.value })
                }}
                className="w-full border focus:border-transparent rounded-sm focus:ring-2 focus:ring-[#F43F5E] outline-none p-2 mt-4" type="date" />
            </div>
            <div className="flex gap-2.5 p-2 justify-center">
              <button
                type="submit"
                className="px-4 py-2 cursor-pointer bg-[#F43F5E] text-white rounded hover:bg-[#E11D48] transition"
              >
                Add
              </button>
              <button
                type="reset"
                className="px-4 cursor-pointer py-2 border border-[#F43F5E] text-[#F43F5E] rounded hover:bg-[#F43F5E] hover:text-white transition"
              >
                Clear
              </button>
            </div>
          </form>
        </div>  
        <div className='m-10 p-5 border shadow-lg rounded-lg '> 
          <span>Search tasks <CiSearch className='inline text-lg font-bold' /> </span>
          <input onChange={handlesearch} placeholder='Search.....' className='block w-full p-2 mt-4 border focus:border-transparent rounded-sm focus:ring-2 focus:ring-[#F43F5E] outline-none' type="text" />
        </div>
      </div>

      <div className="lg:w-2/3 md:w-1/2 sm:w-fit">
        <div className="m-10 shadow-lg rounded-lg">
          <h3 className="py-2 text-center">Your task</h3>
        </div>
        <div className="m-4 p-2  min-h-fit rounded-lg grid gap-1 lg:grid-cols-2 md:grid-cols-1">
          {todos.length === 0 ? (
            <Notask />
          ) : (
            <TodoList setShow={setShow} setPopcontent={setPopcontent} fetch={fetchalltodo} data={todos} />
          )}
        </div>
      </div>
      {show && <Popup fetch={fetchalltodo} setPopcontent={setPopcontent} popcontent={popcontent} setShow={setShow}   />}
    </div>
  )
}

export default Todo