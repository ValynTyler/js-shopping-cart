export default class ShoppingCart {
  contents = [];

  constructor() {
    this.contents = [];
  }

  add(entry) {
    for (var i in this.contents) {
      if (entry.id == this.contents[i].id) {
        this.contents[i].quantity = parseInt(this.contents[i].quantity) + parseInt(entry.quantity);
        return;
      }
    }
    
    this.contents.push(entry)
    this.contents.sort((a) => {return a.id})
  }
}
