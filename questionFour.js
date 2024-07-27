function shoppingCart(){
    var cartItems = []
    return {
      addItem : function(newproduct){
        const exsistingProduct = cartItems.find(product => product.id === newproduct.id);
        if(exsistingProduct) {
            exsistingProduct.quantity += newproduct.quantity;
        }
        else cartItems.push(newproduct);
      },
      getCartItems : function(){
        return cartItems;
      }  
    }
}

const cart = shoppingCart();

console.log("Cart Items :", cart.getCartItems());

const product1 = {id: 1, name : "Product 1", Price : 10, quantity : 1};
const product2 = {id: 2, name : "Product 2", Price : 20, quantity : 1};

cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);

console.log("Cart Items :", cart.getCartItems());
