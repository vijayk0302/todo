import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../page/Home'
import Todo from '../page/Todo'
import Notfound from '../page/Notfound'

const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='*' element={<Notfound/>}/>
    </Routes>
    </>
  )
}

export default Rout