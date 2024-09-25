let button= document.querySelectorAll('button')
let in document.querySelector('input')
for(let btn of button)
{
    btn.addEventListener('click',(e)=>{
        console.log('hey')
        let text=  e.target.innerText
        console.log(text);
        if(text==='c')
            {
                inp.value=''

            } 
            else if(text==='=')
        
            {
                inp.value=  eval(inp.value)

            }
            else{
                inp.value=inp.value+text
            }
    })
}