const express=require('express');
const cors=require('cors');

const dotenv=require('dotenv')
const mongoose=require('mongoose')
const errorController=require('./controller/error')
const router=require('./Routes/todoRoute')


dotenv.config();

const app=express();

app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.json({
        msg:'welcome to home page'
    })
})

app.use('/api/todo',router)

app.use(errorController.pageNotFound)

port=process.env.port;

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on http://localhost${port} & connected to DB`);
        
    })

}).catch((err)=>{
    console.log(err);
    
})