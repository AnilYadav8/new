import React,{useState} from 'react'

const Todo1 = () => {
    let [input,SetInput] = useState('')
    let [data,SetData] = useState([])


    function fun1(a){
        SetInput(a.target.value)
        

    }
    function fun2(){
        SetData([...data,input])
        SetInput('')
    }
    function remove(id){
        let newData = data.filter((x,y)=>{
            SetData('')
            return y!=id
        })
        SetData(newData)
    }

  return (
    
    <div>

        <h1>ANIL YADAV</h1>
        <input value={input} onChange={fun1}/>
        <button onClick={fun2}>Add</button>
        {
            data.map((a,b)=>{
                return (<>
                <li>{a}</li>
                <button onClick={()=>remove(b)}>Remove</button>
                </>)
                
            
            })
        }
    </div>
  )
}

export default Todo1