const bar = document.getElementById(`bar`);
const close = document.getElementById(`close`);
const nav = document.getElementById(`navbar`);
let priceElements = document.getElementsByClassName("cart-item-price"); // مجموعة من العناصر التي تحتوي على الأسعار
let totalElement = document.getElementsByClassName("total-price")[0]; // العنصر الذي يحتوي على الإجمالي
let quantityElements = document.getElementsByClassName("quantity-input");
let pos = document.getElementsByClassName("quantity-btn");
if (bar) {
    bar.addEventListener(`click`, () => {
        nav.classList.add(`active`)
    })
}
if (close) {
    close.addEventListener(`click`, () => {
        nav.classList.remove(`active`)
    })
    
}

function setprice() {
    for (let i = 0; i < priceElements.length; i++) {
        let cost = parseInt(priceElements[i].getAttribute("data-price"));;
        
        let quantity = parseInt(quantityElements[i].value) || 0;

        let totall = cost * quantity;

        priceElements[i].textContent = totall.toFixed(1);
    }
}

for (let i = 0; i < quantityElements.length;i++ ) {
    quantityElements[i].addEventListener("input", setprice);
    window.onload=setprice
}
function ubdate() {
    let total = 0; 
    for (let i = 0; i < priceElements.length; i++) {
    
        let price = parseFloat(priceElements[0].innerHTML)
        let pricee= parseFloat(priceElements[1].innerHTML)

        total = price + pricee; 
    
    }
    
    totalElement.textContent = total.toFixed(1); 

}

for (let i = 0; i < quantityElements.length; i++) {
    quantityElements[i].addEventListener("input", ubdate);
    window.onload=ubdate
};

