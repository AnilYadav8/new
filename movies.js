// let inp = document.querySelector('inp')

// let div = document.querySelector('div')

// let btn = document.querySelector('button')

// let h2 = document.querySelector('h2')

// let img = document.querySelector('image')

// let h3 = document.querySelector('h3')

// let h4 = document.querySelector('h4')

// let h5 = document.querySelector('h5')


// btn.addEventListener('click',()=>{
//     let searchText=inp.value
//     fetch('http://api.tvmaze.com/search/show?q=${searchText}').then((res)=>{
//     return res.json()

// }).then((data)=>{
//     console.log(data,'dataset');
//      img.setAttribute('src',data[0].show.image.original)
//      div.appendChild(img)

//      h2.innerText=(data[0].show.name)
//      h3.innerText=(data[0].show.genres)
//      h4.innerText=(data[0].show.webChennel.name)

// })  

// })
// .catch((error)=>{
// console.log(error);
// })
// console.log($);
// document.querySelector('h1').style.color="red"

$('h1').css({
    color:"red",
    backgroundColor:"blue"
})
// console.log($('h1').text('hiiiee'));
// let input = document.querySelector('input')
console.log($('input').attr('type','number'));
console.log($('input').attr('type'));

$('button').click(()=>{
//   console.log('hehehe');  
$('div').fadeOut()
// $('h1').fadeIn()
$('div').fadeIn()
// $('h1').fadeOut()
$('div').fadeToggle()
$('div').animate({left:"250px"})
// $('h1').fadeToggle()
// $('body').fadeOut()
})

// inp.getAttribute('type')
// console.log($('#h1'));

