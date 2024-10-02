import React,{useState} from 'react'
    
const Form = () => {
    let[input,Setinput] = useState({
        name:"",
        password:"",
        email:""
    })


function fun1(e){
let{name,value}= e.target
Setinput({...input,[name]:value})
}
function fun2(a){
    a.preventDefault()
    console.log('helloooo',input);


}
  return (
    <div> FORM

        <fieldset>
            <legend>form</legend>
            <form onSubmit={fun2}>
            <input type="name" name='name' value={input.name}  onChange={fun1} placeholder='Enter your name'/>
            <br />
            <br />
            <input type="password" name="password" value={input.password} onChange={fun1} placeholder='Enter your password'/>
            <br />
            <br />
            <input type="email" name="email" value={input.email} onChange={fun1} placeholder='Enter your email'/>
            <br />
            <br />
            <button type="submit">save</button>
            </form>
        </fieldset>
    </div>
  )
}

export default Form