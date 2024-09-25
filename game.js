let canvas=  document.querySelector('canvas')
let pen= canvas.getContext('2d')
pen.fillStyle='red'
let cell=50
let snackecell=[[0,0]]
let id= setInterval(()=>{
    drow()
    update()

},100)


        let direction='right'
        document.addEventListener('keydown',(e)=>{
            // console.groupCollapsed('hyy')
            if(e.key==='ArrowDown'){
                direction='down'


            }
            else if(e.key==='ArrowLeft'){
                direction='left'
            }
           else if(e.key==='ArrowUp'){
                direction='up'

            }
            else{
            direction='right'
            
            }     
        })



    


function update(){
    let HeadX= snackecell[snackecell.length-1][0]
    let HeadY= snackecell[snackecell.length-1][1]


    let newHeadX
    let newHeadY
  if(direction==='down'){
    newHeadX=HeadX
    newHeadY=HeadY+cell
    if(newHeadY===500){
        gameOver=true
    }
  }

   else if(direction==='up'){
    newHeadX=HeadX
    newHeadY=HeadY-cell
    if(newHeadY<0){
        gameOver=true
    }
  }
    else if(direction==='left'){
    newHeadX=HeadX-cell
    newHeadY=HeadY
    if(newHeadX<0){
    gameOver=true
    }
  }
  else{
    newHeadX=HeadX+cell
    newHeadY=HeadY
    if(newHeadX===1500){
        gameOver=true
    }

  }

    snackecell.push([newHeadX,newHeadY])
    snackecell.shift()
}
function drow(){
    pen.clearRect(0,0,1500,500)
    for(let i of snackecell){
        pen.fillRect(i[0],i[1],cell,cell)

    }
}
