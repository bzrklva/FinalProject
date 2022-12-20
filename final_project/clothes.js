let cardIcon = document.querySelector('#card-icon');
let card = document.querySelector('.card');
let closeCard = document.querySelector("#close-card");

cardIcon.onclick = () =>{
    card.classList.add('active');
};
closeCard.onclick = () =>{
    card.classList.remove("active");
}
if(document.readyState=='loading'){

    document.addEventListener('DOMContentLoaded', ready)

}else{
    ready();
}


function ready(){
    var removeCardButtons = document.getElementsByClassName('card-remove')
    for(var i =0; i < removeCardButtons.length;i++){
       var button = removeCardButtons[i];
       button.addEventListener("click", removeCartItem);
    }  
    var quantityInputs = document.getElementsByClassName('card-quantity')
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener("change", quantityInputs)
    }
    var addCart = document.getElementsByClassName('add-card')
    for(var i = 0; i < addCart.length; i++){
        var button = addCart[i]
        button
        .addEventListener('click', addCardClicked)
    }
   }

   function removeCartItem(event){
        var buttonclicked = event.target;
        buttonclicked.parentElement.remove();
        updateTotal();
   }
   function quantityChanged(event){
        var input = event.target
        if(isNaN(input.value) || input.value <= 0){
            input.value = 1
        }
        updateTotal();
   }

   function addCardClicked(event){
        var button = event.target
        var shopProducta = button.parentElement;
        var title = shopProducta.getElementsByClassName("product-title")[0].innerText;
        var price = shopProducta.getElementsByClassName("price")[0].innerText;
        var productImg = shopProducta.getElementsByClassName("product-img")[0].src;
        addProductToCard(title, price,productImg);
        updateTotal();
   }


   
//ADD PRODUCT TO CARD
function addProductToCard(title,price, productImg){
    var cardShopBox = document.createElement('div')
    cardShopBox.classList.add('card-box')

    var cardItems = document.getElementsByClassName('card-content')[0]
    var cardItemsNames = cardItems.getElementsByClassName('cart-product-title')
    for(var i = 0; i < cardItemsNames.length;i++){
        alert('You have already added this item to cart');
        return;
    }

    var cardBoxContent = 
    `<img src="${productImg}" alt="" class="card-img"></img><div class="detail box">
      <div class="card-product-title">${title}</div>
      <div class="card-price">${price}</div>
      <input type="number" value="1" class="card-quantity">
      </div><i class='bx bxs-trash-alt cart-remove'></i></>`

    cardShopBox.innerHTML = cardBoxContent
    cardItems.append(cardShopBox)
    cardShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
}
   

// TOTAL
function updateTotal(){
    console.log("Nakhuy");
    var cartContent = document.getElementsByClassName('card-content')[0]
    var cardBoxes = cartContent.getElementsByClassName('card-box')
    let total = 0;
    for(var i = 0; i <  cardBoxes.length; i++){
        var cartBox = cardBoxes[i];
        var priceElement = cartBox.getElementsByClassName('card-price')[0];
        var quantityElement = cartBox.getElementsByClassName('card-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$" , ""));
        var quantity = quantityElement.value
        total  = total + (price*quantity);
        total = Math.round(total * 100) /100;
        document.getElementsByClassName('total')[0].innerText=`${total}$`
    }
}
