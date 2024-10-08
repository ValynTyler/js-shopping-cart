const itm_element = document.querySelector("#item-select");
const qty_element = document.querySelector("#quantity");
const cart_element = document.querySelector("#cart");

let cart_items = [];

document.querySelector("#add").addEventListener("click", () => {
  cart_items.push({
    item: itm_element.value,
    quantity: qty_element.value,
  });

  cart_element.innerHTML = "";
  cart_items.forEach((element) => {
    cart_element.innerHTML += `
    <div>
        <div>
            name: ${element.item}
        </div>
        <div>
            quantity: ${element.quantity}
        </div>
    </div>
    `;
  });
});
