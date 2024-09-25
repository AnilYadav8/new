import React,{useState} from 'react'

const Index = () => {
    let [data,SetData]=useState('kuch bhi')
    let [color,Setcolor]=useState('red')
    function fun1(e){
        console.log(e.target.value);
        SetData(e.target.value)
        Setcolor('pink','green')
    }
  return (
    <div style={{backgroundColor:color,height:'700px',width:'700px'}}>
        <h1>{data}</h1>

        <input onChange={fun1} placeholder='Enter the name'/>
        <button onClick={fun1}> click</button>
    </div>
  )
}

export default Index