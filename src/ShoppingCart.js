export default class ShoppingCart {
  contents = [];

  constructor() {
    this.contents = [];
  }

  add(entry) {
    for (var i in this.contents) {
      if (entry.id == this.contents[i].id) {
        const entry_quantity = parseInt(entry.quantity)
        const cart_quantity = parseInt(this.contents[i].quantity)
        this.contents[i].quantity = cart_quantity + entry_quantity;
        return;
      }
    }
    
    this.contents.push(entry)
    this.contents.sort((a) => {return a.id})
  }
}
