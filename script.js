import ShoppingCart from "./src/ShoppingCart.js";
import ShoppingCartItem from "./src/ShoppingCartItem.js";

const itm_element = document.querySelector("#item-select");
const qty_element = document.querySelector("#quantity");
const cart_element = document.querySelector("#cart");
const cart_item_template = document.querySelector('#cart-item-template')

let cart = new ShoppingCart();

function refresh() {
  cart_element.innerHTML = "";
  cart.contents.forEach((item) => {
    const clone = cart_item_template.content.cloneNode(true)
    clone.querySelector(".cart-item-id").innerHTML = item.id
    clone.querySelector(".cart-item-quantity").innerHTML = item.quantity
    clone.querySelector(".remove").onclick = () => {
      cart.remove(item.id)
      cart.writeLocal()
      refresh()
    }
    cart_element.appendChild(clone)
  });
}

document.querySelector("#add").addEventListener("click", () => {
  cart.add(new ShoppingCartItem(itm_element.value, qty_element.value));
  cart.writeLocal()
  refresh()
});

window.addEventListener("load", () => {
  console.log("Reloading cart contents...");
  cart.readLocal()
  refresh()
});
