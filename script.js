import ShoppingCart from "./src/ShoppingCart.js";
import ShoppingCartItem from "./src/ShoppingCartItem.js";

const itm_element = document.querySelector("#item-select");
const qty_element = document.querySelector("#quantity");
const cart_element = document.querySelector("#cart");
const cart_item_template = document.querySelector('#cart-item-template')

let cart = new ShoppingCart();

function refresh() {
  cart_element.innerHTML = "";
  cart.contents.forEach((element) => {
    const clone = cart_item_template.content.cloneNode(true)
    clone.querySelector(".cart-item-id").innerHTML = element.id
    clone.querySelector(".cart-item-quantity").innerHTML = element.quantity
    cart_element.appendChild(clone)
  });
}

document.querySelector("#add").addEventListener("click", () => {
  cart.add(new ShoppingCartItem(itm_element.value, qty_element.value));

  cart.contents.forEach(element => {
    localStorage.setItem(element.id, element.quantity)
  });

  refresh()
});

window.addEventListener("load", () => {
  console.log("Reloading cart contents...");
  for (var i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const val = localStorage.getItem(key)
    cart.add(new ShoppingCartItem(key, val))
    refresh()
  } 
});
