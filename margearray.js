let arr=[1,2,3,4,5,6]
let num = [6,5,4,32,1,7,...arr]
let obj = {
    id:1,
    name:'heloo'
}
let std={
    id:1,
    lastName:'hehehe',
    ...obj
}
console.log(num,'hieee');
console.log(std,'anil');
// SetData(e.target.value)



// function sum(a,b,...num){
//     console.log(num,'hehehe');
//     console.log(a+b,...num);
// }
// sum(5,6,4,3,2,1,7,8,9)


// let arr=[1,2,3,4,5,6,7,8,9,45]
// let [a,b,c,d,e,f,g]=arr
// console.log(b);




// let obj={
//     id:5,
//     name:'heyyye'
// }
// let {id,name}=obj

// console.log(obj.id,name);





// import {user} from './transfer.js'
// import user from './transfer.js'
// console.log(user,"hieeeeee");

// import {sum,user} from './transfer.js'
// sum(6,5)
// console.log(user);

function outer(){
    let user='helloooo'
     function inner(){
     console.log(user);

     }
     return inner
     
}
let a = outer()
a()



