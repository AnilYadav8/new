// import axios from 'axios'
// import React, { useEffect,useState } from 'react'
// import  './App.css'
// const Api = () => {
  
//     let[data,SetData]=useState([])
//     async function call(){
//         let apiData= await  axios('https://dummyjson.com/recipes')
//         SetData(apiData.data.recipes)
//         console.log(apiData.data.recipes,'helloo');


        
//     }
    
//     useEffect(()=>{
//         call()
//     },[])
//   return (
//     <div>
//         {
//   data.map((a)=>{
// console.log("koi mil jaye");
// return(<>

// <h1>{a.id}</h1>
// <h2><img height="200px" src={a.image}/></h2>
// <h1>{a.name}</h1>
// </>)
//    }) 
// }
//     </div>
//   )
// }

// export default Api




import React, { useEffect,useState } from 'react'
import axios from 'axios'

const Api = () => {
  let[input,SetInput]= useState({
    search:"",
    dinner:"",
    breakfast:""

  })
  let[data,SetData]=useState([])
  async function call(){
 let apiData =await axios('https://dummyjson.com/recipes')
 SetData(apiData.data.recipes)
 console.log(apiData.data.recipes,'helooooo');
  }
  function fun1(e){
    let{name,value}= e.target
    SetInput({...input,[name]:value})
    }
    function fun2(a){
        a.preventDefault()
        console.log('helloooo',input);
  }
 useEffect(()=>{
  call()
 },[])
  
  return (
    <div>
      
      
      <input type="text" name="search" value={input.search}  onChange={fun1} placeholder='search'/>
      <input type="text"name="dinner" value={input.dinner}  onChange={fun1} placeholder='Dinner'/>
      <input type="text" name="breakfast" value={input.breakfast}  onChange={fun1} placeholder='Breakfast'/><br />
      <button type="submit">click     </button><br />
      {
      
        data.map((anil)=>{
          console.log('Anil yadav');
          return(<>
          <h1>{anil.id}</h1>
          <h2>{anil.name}</h2>
          <h3><img height="150px"src={anil.image}/></h3>
          </>)
        })
      
      }


    </div>
  )
}

export default Api