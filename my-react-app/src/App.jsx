
// import Home from "./Home"
// import New from "./assets/component/New"
// export const App = () => {
//   return (
//     <div>App
//       <h1> HELLO</h1>
//       <Home/>
//       <New/>


//     </div>
//   )
// }
// export default App



// import React, { useState } from 'react'

// const App = () => {
//     let [count,SetCount]= useState(0)
//     let [color,SetColor]= useState('pink')
//     function fun1(){
//         SetCount(count+1)
//         SetColor('red')
//     }
//     function fun2(){
//         SetCount(count+2)
//         SetColor('green')
//         // SetColor('blue')
     
//     }
//   return (
//     <div style={{ backgroundColor:color,height:'700px',width:'700px'}}>
//         <p>{count}</p>
//  <button onClick={fun1}>click red</button>
//  <button onClick={fun2}>click green</button>
//  </div>
    
//   )
// }

// export default App





// import React from 'react'
// import Clock from './Clock'
// import Index from './Index'
// const App = () => {
//   return (
//     <div>
//       <Clock/>

//       <Index/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Todo from './Todo'
// import Todo1 from './Todo1'
// import Index from './Index'
// import Clock from './Clock'
// import Home from "./Home"
// import New from "./assets/component/New"

// const App = () => {
  
//   return (
//     <div>
//       <Todo/>
//       <Todo1/>
//       {/* <Index/> */}
//       {/* <Clock/> */}
//       {/* <Home/> */}
//       {/* <New/> */}
//     </div>
//   )
// }

// export default App



// import React, { useEffect , useState } from 'react'

// const App = () => {
//   let [count,SetCount]=useState(0)
//   let [city,SetCity] = useState('bhopal')

//   useEffect(()=>{
//     console.log('heloo');
//     fetch('https://dummyjson.com/recipes').then((res)=>{
//       return res.json()

//     }).then((data)=>{
//       console.log(data,"hehe");
//     })
//   },[count])

//   function fun1(){
//     SetCount(count+1)
//   }
//   function fun2(){
// SetCity('delhi')
//   }
//   return (
//     <div>
//       <h2>{count}</h2>
//       <button onClick={fun1}>click</button>

//       <h1>{city}</h1>
      
//       <button onClick={fun2}>change</button>
//     </div>

  
//   )
// }

// export default App



// import React, { useEffect , useState } from 'react'

// const App = () => {
//   // let [count,Setcounr] = useState(0)/
//   let [Api,SetApi] = useState([])

//   useEffect(()=>{
//     console.log('hello');
//     fetch('https://dummyjson.com/recipes').then((res)=>{
//       return res.json()
//     }).then((data)=>{
//       console.log(data.recipes,"hehheh");
//       SetApi(data.recipes)

//     })

//   },[])

  
//   return (
//     <div>
//       {

        
    
//       Api.map((val)=>{
//         return(<>
//         <h3>{val.id}</h3>
 
//         </>)
//       })
    
//     }
//     </div>
//   )
// }

// export default App



// import React, { useEffect,useState } from 'react'

// const App = () => {
//   // let[count,Setcount]=useState(0)
//   let[Api,SetApi]=useState([])

//   useEffect(()=>{
//     console.log('helllo');
//     fetch('https://dummyjson.com/recipes').then((res)=>{
//       return res.json()

//     }).then((data)=>{
//       console.log(data.recipes,'hehehe');
//       SetApi(data.recipes)
//     })
//   },[])
//   return (
//     <div>
//       {
//         Api.map((value)=>{
//           return(<>
//           <h1>{value.id}</h1>
//           <h2>{value.name}</h2>
//          <h3> <img src={value.img}/></h3>
//           </>)
//         })
//       }

//     </div>
//   )
// }

// export default App






// import NavBar from './NavBar'
 
// import "./App.css"
// import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom'
// import Home from"./Home"
// import About from "./About"
// import Contact from "./Contact"


// const App = () => {
//   return (
//     <div>
//       <Router>
//       <NavBar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//       </Routes>
//       </Router>
     
// </div>
//   )
// }

// export default App



// import React from 'react'
// import NavBar from './NavBar'
// import Photo from './Photo'

// const App = () => {
//   return (
//     <div>
//       <NavBar/>
//       <Photo/>
//     </div>
//   )
// }

// export default App







import React,{useState} from 'react'

const App = () => {
  let [input,Setinput]= useState({
    name:"",
    password:"",
    email:""
  })

  function fun1(e){
    let{name,value}= e.target
 Setinput({...input,[name]:value})

  }
  function done(e){
    e.preventDefault()
    console.log("hehheh",input);
  }    
  return (
    <div>
             <fieldset>
        <legend>form</legend>
        <form onSubmit={done}>
        <input type="name" name="name" value={input.name} onChange={fun1} placeholder='Enter your name' />
        <br></br>
<br />
        <input type="password" name="password" value={input.password} onChange={fun1} placeholder='Enter your password' />
        <br></br>
   <br />
        <input type="text" name="email" value={input.email} onChange={fun1} placeholder='Enter your email' />
        <br></br>
        <br />
        <button tyye="submit">save</button>
        </form>
      </fieldset>
    </div>
  )
}

export default App