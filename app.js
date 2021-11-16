

// the input element
const inputQuantity = document.querySelector('input')
// the value of the input element the user inputs aka quantity
inputQuantity.value 



const productName = document.getElementsByClassName('.productNames')










// const prices = document.querySelector('.price')
// prices.getAttribute('.data-price') 
// alert(prices);



const prices =  document.querySelectorAll('.priced')

prices.forEach(function(price){
    total = price.getAttribute('data-price') * inputQuantity.value 
    console.log(price.innerHTML)
})









/* We grabbed the 'Add to Cart button'*/
const addCart = document.querySelectorAll('.button')




//click button whenever i click the cart btton 
// 3 things:
// 1.times quanity and price
//2. use innerHTML to put the original 
//price, name,quanity and total in 
//the table 
addCart.forEach(function(item){
    item.addEventListener('click', function(){
        console.log("add to cart",productName.innerTEXT);
        
    })
})









































/* We grabbed the 'checkout button'*/

const checkOut = document.getElementById('checkOut')


//the checkout function button when clicked
//will add the total of all 3 table rows
//and use innerHTML to put inside the
//h2 total





  