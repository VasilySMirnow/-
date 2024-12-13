const card = document.querySelector('.container')
const goods = document.querySelector('.container-goods')
const corze = document.querySelector('.container-corz')
const home = document.querySelector('.gl')
const corz = document.querySelector('.cr')
let cards = []
let count = document.querySelector('.counter')
home.addEventListener('click',function(){
     if(goods.className!=='active'){
        corze.classList.remove('active')
    goods.classList.add('active')}

})

corz.addEventListener('click',(event)=>{

    console.dir(event.target)
    if(corze.className!=='active'){
        goods.classList.remove('active');
        corze.classList.add('active')
    }
})

let GOODSS = [
{
    name:'телефон',
    price: 3001,
    imgSrc:'/img/—Pngtree—cartoon pink phone illustration_4696969.png'
    
 },
 {
    name:'телефон2',
    price: 3300,
    imgSrc:'/img/—Pngtree—cartoon pink phone illustration_4696969.png'
    
 },
 {
    name:'телефон3',
    price: 350,
    imgSrc:'/img/—Pngtree—cartoon pink phone illustration_4696969.png'
    
 },
 {
    name:'телефон3',
    price: 350,
    imgSrc:'/img/—Pngtree—cartoon pink phone illustration_4696969.png'
    
 }
]

const queryButton = document.querySelectorAll('button')
for (let i = 0;i < GOODSS.length;i++){

 let prod = createProduct(GOODSS[i])



    renderGoods(prod)
   

    
   
 

}

function createProduct (product){

    return({
        name:product.name?product.name:'Товара не существует',
        price:product.price?product.price:'уточнить цену',
        imgSrc:product.imgSrc?product.imgSrc :'картинка',
    }
    )
}

function clickHandler (prod){
    return function(){
    console.log(prod)
    cards.push(prod)
    console.log(cards)
    count.textContent = cards.length
    renderCard(prod)
     }

}

function renderGoods (element){
   let div = document.createElement('div')
    div.className = 'card'

    let img = document.createElement('img')
    
    img.src =element.imgSrc

    let p = document.createElement('p')
   
    p.textContent = element.name

    let price = document.createElement('span')
   price.textContent = element.price
   
   let button = document.createElement('button')
    button.textContent = 'в корзину'
    button.addEventListener('click', clickHandler(element))
  
   
    div.append(img,p,price,button)
    goods.append(div)
 

}
function renderCard(element){
    
    let p = document.createElement('p')
   
    p.textContent = element.name

    let price = document.createElement('span')
   price.textContent = element.price

   corze.append(p,price)
   
}