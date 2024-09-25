// var a=5
// let b=5
// const c=10
// console.log(a)
// console.log(b)
// console.log(c)
// neww1
// let firstName='anil'
// let lastName='yadav'
// console.log(' my first name is:${firstName} my last name is:${lastName}')
// console.log(firstName+"  "+lastName)
// console.log('anil\yadav');


// let score=100
// let to=score==100
// console.log(to);


// Number
// String
// Boolean
// Symbol
// null
// BigInt

// day2


// var arr=[11,22,33,44,55,66,'string',true]
// console.log(arr);
// for(let i in arr){
//     console.log(i);
// }

// for(let i of arr){
//     console.log(i)
// }

//conditional operator
// let a=80
// let c=20
// if(a>90||c==20){      //or operator
// console.log('A')

// }
// else if(a>=85){
//     console.log('B')

// }
// else if(a>=70){
//     console.log('C')
// } 
//     else if(a>=70){
//         console.log('D')
//     }
//     else{
//         console.log('fail')

//     }     
// //tarnary oparator
// let b=true
// b?console.log("true"):console.log("false")



// //function 1.

// function add(){
//     console.log('helllo');
// }
// add()
//2.
// const add=() =>{
// console.log('hee');
// return 'hello'

// }
// add()


// //3.PARAMERIZED CONSTRUCTOR 
// function add(a,b){
//     console.log(a+b);
//     return 5

// }
// add(5,6)



// new 
// let add=add()
// console.log(a);
// let add=(a,b)=> a+b
// conspke.log(add(5,6));
// day4



// let arr=[1,2,3,4,5,6,7,8]
// arr.pop()
// arr.push()
// arr.push(8)
// arr.shift()
// arr.unshift(400)
// console.log(arr.length);


// let arr=[12,3,4,5,66,8]
// arr.pop()
// arr.push(8)
// arr.shift()
// arr.unshift(400)
// console.log(arr.length);
// console.log(arr.includes(5));


// function sum(a){
    // console.log
// }


// let obj={
//     id:10,
//     firstName :'hello',
//     isPass:true

// }


// function cal(num1,num2){
//     let obj={
//         sum:num1+num2,
//         minus:num1-num2,
//         malti:num1*num2
//     }
//     return obj
// }
// let a= cal(5,6)
// console.log(a.sum);

// let obj={
// a:10,
// b:40,
// sum:function(){
    // console.log(this,"yha pee");
    // return this.a+this.b

// }
// }
// console.log(obj.sum());

// var a=10
// function add(){
    // console.log(a);

// }
// add()



// let b
// console.log(b);
//  b=10
//  let b = 10

// add()
// let add=()=>{
// console.log('hayy anil ');
// }
// add()


// let arr2=[1,2,3,4,5,6]
// arr2.forEach((a,b,c)=>{
    
// console.log(a)
// })


// let arr3=[1,2,3,4,5,6]
// let a=  arr3.filter((a,b,c)=>{
//     return a>2

// })
// console.log(a);

// let arr4=[1,2,3,4,5,6]
// let a1=  arr4.find((a,b,c)=>{
//     return a>2

// })
// console.log(a1);

// let arr=[1,2,3,4,5,6]
// arr.filter((a,b,c)=>{
//     let d=5;
//     let e=15;
//     let sum=d+e;
// console.log(sum)
// })


// let arr=[1,2,3,4,5,6,7]
//  let sum=arr.reduce((a,b,c,d)=>{
//     return a+b
//  })
// console.log(sum);

// let arr1=[1,2,3,4,5,6,7]
//  let sub=arr.reduce((a,b,c,d)=>{
//     return a-b
//  })
// console.log(sub);





// let data=[
//    {
//       id:1,
// name:'rahul'
//    },
// {
// id:2,
// name:"anil"
// },
// {
// id:3,
// name:"sunil"
// }
// ]
// let newData=data.filter((a)=>{
//    return a.id>1
// })
// newData.map((value)=>{
//    console.log(value.name)
// })

// console.log(newData,"new");
// data.filter((a)=>{
//    returna.id>1

// }).map((b)=>{
//    console.log(b.id)
// })
// data.filter((a)=>{
   
   // console.log(a.id);
// })



// let arr2=[1,2,3,4,5,6,7]
//  let product=arr.reduce((a,b,c,d)=>{
//     return a*b
//  })
// console.log(product);



// let arr3=[1,2,3,4,5,6,7]
//  let kya=arr.find((a,b,c)=>{
//     return a==5
//  })
// console.log(kya);




// let arr=[1,2,3,4,5,6,7,21,9,19,11,12,13,14,15,16,]
// let newD=arr.filter((a)=>{
//    return a>2
// })
// console.log(newD,"2222")
//    let newDD=newD.filter((data)=>{
//       return data%2==0
//    })
//    console.log(newDD,"even");
   
//    let sum=newD.reduce((acc,b,c,d)=>{
//       return acc+b
//    })
//    let number=Math.random()*100
//    console.log(Math.floor(number)*50);
//    console.log(sum)
//    let date=new Date().toLocaleDateString()
// console.log(date);
// let date1=new Date().toLocaleTimeString()
// console.log(date1);
// let date2=new Date().toTimeString()
// console.log(date2);


   // let dataa=[
   //    {
   //       "id":1,
   //       "name":"anil",
   //       "email"
   //    }
   // ]




   // {
// var b=20
      // console.log('hello');
      // let a=10
// console.log(a);

   // }
   // console.log(b);


//    function outer(a){
//       console.log('hey');
//       console.log(a);
//       a()

//    }
// outer(function inner(){
// console.log('inner');
// })

// console.log('two');
// setTimeout(()=>{
// console.log('one');
// },)
// console.log('three');


// function step1(){
// setTimeout(()=>{
//     console.log('select photo')
// },2000)
// }
// function step2(){
// setTimeout(()=>{
//     console.log('filter')
// },3000)
// }
// function step3(){
// setTimeout(()=>{
//     console.log('captious')
// },4000)
// }
// function step4(){
// setTimeout(()=>{
//     console.log('post ho gya')
// },5000)
// }


// step1()
// step2()
// step3()
// step4()

// function step1(fn){
//     setTimeout(()=>{
//         console.log('select photo')
//         fn()
//     },10000)
//     }
//     function step2(fn){
//     setTimeout(()=>{
//         console.log('filter')
//         fn()
//     },2000)
//     }
//     function step3(fn){
//     setTimeout(()=>{
//         console.log('captious')
//         fn()
//     },5000)
//     }
//     function step4(){
//     setTimeout(()=>{
//         console.log('post ho gya')
//     },2000)
//     }
    

//     step1(()=>{
//         step2(()=>{
//             step3(()=>{
//                 step4()

//                 })
//             })
//         })
    
    
    // step1()
    // step2()
    // step3()
    // step4()
    



//     let promise=  new Promise((res,  rej  )=>{
//         let reason='barish'
//         if(reason==='barish'){
//             rej('error')
//         }
//         else{
// res('resolve')
//         }       
         
//     })
//     promise.then((A)=>{
//         console.log(A);

//     })
//     .catch((error)=>{
//         console.log(error);
//     })
//     console.log(promise,"hello");


    // let step1=  function(){
    //     return new Promise((res, rej)=>{
    //         setTimeout(()=>{
    //             res('photo select ho gya h')

    //         },4000)
    //     })
    // }
    
    // let step2=  function(){
    //     return new Promise((res, rej)=>{
    //         setTimeout(()=>{
    //             res('filter ho gya')

    //         },4000)
    //     })
    // }

    // let step3=  function(){
    //     return new Promise((res, rej)=>{
    //         setTimeout(()=>{
    //             res('post ho gya h')

    //         },4000)
    //     })
    // }

    // let step4=  function(){
    //     return new Promise((res, rej)=>{
    //         setTimeout(()=>{
    //             res('select ho gya')

    //         },4000)
    //     })
    // }
    // step1().then((data)=>{
    //     console.log(data);
    //     return step2().
    //     then((filter)=>{
    //         return step3().
    //         then((post)=>{

            

    
    //     console.log(filter);
    //     console.log(post);
    //         })
    //     })
    // })




    // async function kalajadu(){
    //     let data= await step1()
    //     console.log(data)
    //     console.log('hello')
    //     let data1=await step2()
    //     console.log(data1)
    //     console.log('hii')
    //     let data2= await step3()
    //     console.log(data2)
    //     let data3= await step4()
    //     console.log(data3)
    // }
    // kalajadu()




//    let btn3= document.getElementById('one')
    // let btn= document.getElementsByClassName('two')
    // let btn1= document.querySelector('#one')
    // let btn2= document.querySelectorAll('h1')
    // for(let i of btn2){
    //     i.style.color='red';
    // }
    // console.log(btn,"btnnn");
    // console.log(btn1,"btnnn");
    // console.log(btn2,"btnnn");
    // console.log(btn3,"btnnn");

//  let a =document.querySelector('a')
//  a.setAttribute('href','http://google.com')
//  a.setAttribute('id','http://amezon.com')
//  console.log(a.getAttribute('href'));

// console.log(a.getAttribute('id'));
 

//  let a =document.querySelector('img')
//  for(let i of a)
//     i.style.img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Ffree-images%2F&psig=AOvVaw10bOjEh57XT7n-E5xfcuoZ&ust=1722688974435000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCD5tWq1ocDFQAAAAAdAAAAABAN"
//  Img.setTimeout(() => {
    
//  },4000)
//  console.log(a.getAttribute('img'));



// const arr = [
//     'https://www.pexels.com/photo/close-up-photo-of-glowing-blue-butterflies-326055/',
//     'https://www.pexels.com/photo/brown-hummingbird-selective-focus-photography-1133957/'
// ]
// const imageEl = document.querySelector('img');
// imageEl.style.height='200px'
// let num = 0;
// setInterval(function(){
//     imageEl.setAttribute('src',arr[num]);
//     num = (num+1) % arr.length;
// }, 2000);


// let div=  document.querySelector('div')
// let p=  document.createElement('p')
// let h5= document.createElement('h5')
// p.innerText='hey!'
// h5.innerText='hello'
// div.append(p,h5)
// // p.remove()
// // div.appendChild(p)
// console.log(div);

// eske output lane ke liye


// 1 rule

// function fun1(){
//     console.log('hey!!!!!');
// }
// 2nd rule
// let btn=  document.querySelector('button')
// btn.addEventListener('click',()=>{
//     console.log('anil yadav');

// })

// 3rd rule

// let btn=  document.querySelector('button')
// btn.onclick=function(){
//     console.log('hello');
// }


// let div=  document.querySelector('div')
// let inp=  document.querySelector('input')
// inp.addEventListener('input',(e)=>{
//     // console.log('hey!!!!!');
//     // console.log(e.target.value);
//     div.innerText=e.target.value
// })

// let inp=  document.querySelector('input')
// let form=  document.querySelector('form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     // console.log('anil yadav');
//     console.log(inp.value);
//     // div.innerText=e.target.value

// })


let inp= document.querySelector('input')
let btn= document.querySelector('button')
let ul= document.querySelector('ul')
btn.addEventListener('click',()=>{
// console.log('heyy')
let data= inp.value
// console.log(data,"dekhoo");
let li= document.createElement('li')
li.innerText=data
ul.appendChild(li)
inp.value=''
li.addEventListener('click',()=>{
li.remove()
})
})
