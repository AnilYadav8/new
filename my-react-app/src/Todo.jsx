
// import React, {useState} from 'react'
// const Todo = () => {
//     let [input,SetInput]= useState('')
//   let [data,SetData]= useState([])
//   function fun1(a){
//   SetInput(a.target.value)
//   }
//   function fun2(){
//     SetData([...data,input])
//     SetInput('')
//   }
//   function remove(id){
//     let newData = data.filter((x,y)=>{
//         return y!=id
//     })
//     SetData(newData)
//   }

//   return (
//     <div>
//         <h1>Todo List</h1>
//         <input value={input} onChange={fun1}/>
//         <button onClick={fun2}>Add</button>
//         {
          
//             data.map((a,b)=>{
//                 return(<>
//                 <li>{a}</li>
//                 <button onClick={()=>remove(b)}>remove</button>
//                 </>)
//             })
//         }
//     </div>
//   )
// }

// export default Todo




import React,{useState} from 'react'

const Todo = () => {
  let [input,SetInput] = useState('')
  let [data,SetData] = useState([])

  function fun1(a){
  SetInput(a.target.value)

  }
  function fun2(e){
    SetData([...data,input])
    SetInput('')


  }
  
  function remove(id){
    let newData=data.filter((x,y)=>{
      return y!=id
    })
    SetData(newData)
  }
  return (
    <div>

         <input onClick={input} onChange={fun1}/>
         
          <button onClick={fun2}>Add</button>
          {
            data.map((a,b)=>{
              return(<>
              <li>{a}</li>
              <button onClick={()=>remove(b)}>Remove</button>
              </>)
            })
          }

          

          
    </div>
  )
}

export default Todo