import React, { useEffect, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import api from '../api/api'
import dayjs from "dayjs";

const Popup = ({ setShow ,fetch ,popcontent ,setPopcontent  }) => {
  
    const handlesubmit = async (e)=>{
        e.preventDefault()
        await api.patch(`/api/todo/update/${popcontent._id}`,popcontent)
        setShow(false)
        fetch()
    }
    



    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                <div className="bg-white w-full max-w-md p-6 rounded shadow relative">
                    <div className="flex justify-between items-center">
                        <h1 className="text-lg text-[#4c0519] font-semibold">Update Task</h1>
                        <RxCross1 onClick={() => setShow(false)} className="cursor-pointer text-xl" />
                    </div>
                    <form onSubmit={handlesubmit} className="mt-4" >
                        <input value={popcontent.task} 
                        type="text" placeholder="Enter text" onChange={(e)=>{setPopcontent({...popcontent,task:e.target.value})}}
                        className="w-full border rounded-sm focus:ring-2 focus:ring-[#F43F5E] outline-none p-2 mt-2" />

                        <input 
                        value={popcontent.description}
                        type="text" 
                        placeholder="Enter desc" onChange={(e)=>{{setPopcontent({...popcontent,description:e.target.value})}}}
                        className="w-full border rounded-sm focus:ring-2 focus:ring-[#F43F5E] outline-none p-2 mt-4" />

                        <input  
                        value={popcontent.date ? dayjs(popcontent.date).format("YYYY-MM-DD"): ""}
                        type="date"  onChange={(e)=>{{setPopcontent({...popcontent,date:e.target.value?dayjs(e.target.value).toISOString():null})}}}
                        className="w-full border rounded-sm focus:ring-2 focus:ring-[#F43F5E] outline-none p-2 mt-4" />

                        <button type="submit" 
                            className="mt-5 w-full p-2 bg-[#F43F5E] text-white rounded">
                            Update
                        </button>
                    </form>

                </div>
            </div>

        </>
    )
}

export default Popup