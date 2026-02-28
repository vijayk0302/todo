const express=require('express')

const router=express.Router();
const {getalltodo,createtodo,updatetodo,deletetodo,markcompleted}=require('../controller/todoController')


router.get('/',getalltodo)

router.post('/add',createtodo)

router.put('/marked/:id',markcompleted)

router.patch('/update/:id',updatetodo)

router.delete('/delete/:id',deletetodo)




module.exports=router;