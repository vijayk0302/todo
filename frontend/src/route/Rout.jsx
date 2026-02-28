import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../page/Home'
import Todo from '../page/Todo'

const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
    </Routes>
    </>
  )
}

export default Rout