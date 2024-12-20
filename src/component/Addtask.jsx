import React, { useState } from 'react'
function Addtask({tasks,settasks}) {
    const [task, settask] = useState('')
    const[time,settime]=useState("")
    console.log(typeof(time));
    
    const handelsubmit=()=>{
        const newtask={id:tasks.length+1,task,time,iscomplete:false}
        if(task=="" ||time==""){ 
            alert("Please enter task and time")
            
        }
        else{
            settasks([...tasks,newtask])
        }
       
    }
  return (
    
    <div style={{display:"flex",justifyContent:"center",gap:"20px",alignItems:"center"}}>
        <input onChange={(e)=>settask(e.target.value)}  style={{textAlign:"center", height:"40px",color:"black",border:"1px solid green",borderRadius:"8px",}}type="text" placeholder="+ Enter task name"/>
        <input onChange={(e)=>settime(e.target.value)} style={{height:"40px"}} type="time" />
        <button onClick={handelsubmit} style={{height:"40px", padding:"10px",color:"white",background:"black",borderRadius:"5px",}}>Add Task</button>
    </div>
  )
}

export default Addtask