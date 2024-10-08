const itm_element = document.querySelector("#item-select");
const qty_element = document.querySelector("#quantity");

let cart_items = [];

document.querySelector("#add").addEventListener("click", () => {
  cart_items += {
    item: itm_element.value,
    quantity: qty_element.value,
  };
  console.log(cart_items)
});
