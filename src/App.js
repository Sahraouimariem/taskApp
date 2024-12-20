
import { useState } from 'react'
import './App.css'
import Addtask from './component/Addtask'

function App() {
const [tasks,settasks]=useState([{ id:1,task:"drink coffe",time:"8:00",iscomplete:true}])
const[complete,setcomplete]=useState(false)
console.log(complete);

  return (
    <>
    <Addtask tasks={tasks} settasks={settasks}/>
    {tasks.map(el=>
      <div  style={{width:"18rem",borderRadius:"8px",background:complete?"green":"red",padding:"16px"}}key={el.id}>
        <h2>{el.task}</h2>
        <p>Time: {el.time}</p>
    <input type='checkbox' onChange={(e)=>{setcomplete(!complete)}
    
    }/>
      </div>
    )}
    
    </>
  )
}

export default App
