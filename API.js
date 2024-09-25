// .dummy ke liye h
 let img= document.querySelector('img')
 let = document.querySelector('div')

fetch('https://dummyjson.com/recipes').then((res)=>{
    // console.log('res');
    return res.json();

}).then((data)=>{
    // console.log(data.recipes,'hello');
    // data.recipes.map((a)=>{
        // console.log(a);
        // console.log(a.cuisine,a.name);

    // })
    console.log(data.recipes[0].id,'hyyy');
    console.log(data.recipes[0],'helooo');
    console.log(data.recipes[0].name,'helllo');
    let h1= document.createElement('h1')
    // let img= ducument.createElement('img')
    h1.innerText=data.recipes[0]
    img.setAttribute('src',data.recipes[0].image


    )
  
})

.catch((error)=>{
    console.log(error);

})


// .movies ke liye h

// let movie = document.querySelector('movie')
// fetch('https://www.allmovie.com/').then((res)=>{
// console.log('res');


// return res.allmovie();
// }).then((data)=>{
//        console.log(data.recipes,'hello');
//     // data.recipes.map((a)=>{
//         // console.log(a);
//         // console.log(a.cuisine,a.name);
//     // })
//     console.log(data.recipes[0].movie,'helooo');
//     let h2= document.createElement('h2')
//     // let img= ducument.createElement('img')
//     h2.innerText=data.recipes[0]
//     movie.setAttribute('src',data.recipes[0].movie


//     )
//     div.appendChild(movie)
// })

// .catch((error)=>{
//     console.log(error);

// })
