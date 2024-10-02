import React, { useReducer } from 'react'

const Count = () => {
    function reduser (count,action){
        if(action. type==='incre'){
            return count+=1

        }
        else if(action.type==='decre'){
            return count-=1
        }
        else{
            return count
        }
    }
 let [count,dispatch]= useReducer(reduser,0)


  return (
    <div>
<h3>{count}</h3>

<button onClick={()=>dispatch({type:"incre"})}>++</button>
<button onClick={()=>dispatch({type:"decre"})}>--</button>


    </div>
  )
}

export default Count