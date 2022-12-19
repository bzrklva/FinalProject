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
    console.log(removeCardButtons)
    for(var i =0; i < removeCardButtons.length;i++){
       var button = removeCardButtons[i]
       button.addEventListener("click", removeCartItem)
    }   
   }

   function removeCartItem(event){
    var buttonclicked = event.target;
    buttonclicked.parentElement.remove();
    updateTotal();
   }

   function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-container') [0]
    var cartBoxes = cartContent.getElementsByClassName('cart - box')
    for(var i = 0; i <  removeCardButtons; i++){
        var cartBox = cardBoxes[i];
        var priceElement = cardBox.getElementsByClassName('card-price')[0];
        var quantityElement = cartBox.getElementsByClassName('card-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$" , ""));
        var quantity = quantityElement.value
        total  = total +(price*quantity);

        document.getElementsByClassName('total -price')[0]. innerText="$"
    }
   }
   

