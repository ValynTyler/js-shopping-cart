import ShoppingCartItem from "./ShoppingCartItem.js";

export default class ShoppingCart {
  contents = [];

  constructor() {
    this.contents = [];
  }

  add(entry) {
    for (let i in this.contents) {
      if (entry.id == this.contents[i].id) {
        const entry_quantity = parseInt(entry.quantity);
        const cart_quantity = parseInt(this.contents[i].quantity);
        this.contents[i].quantity = cart_quantity + entry_quantity;
        return;
      }
    }
    this.contents.push(entry);
  }

  remove(id) {
    for (let i in this.contents) {
      if (this.contents[i].id == id) {
        this.contents.splice(i, 1);
        break;
      }
    }
  }

  writeLocal() {
    localStorage.clear();
    this.contents.forEach((item) => {
      localStorage.setItem(item.id, item.quantity);
    });
  }

  readLocal() {
    for (var i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const val = localStorage.getItem(key);
      this.add(new ShoppingCartItem(key, val));
    }
  }
}
