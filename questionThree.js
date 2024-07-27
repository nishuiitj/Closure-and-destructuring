function shoppingCart(){
    var cartItems = []
    return {
      getCartItems : function(){
        return cartItems;
      }  
    }
}

const cart = shoppingCart();

console.log("Cart Items :", cart.getCartItems());