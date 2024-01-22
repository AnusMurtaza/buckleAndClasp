import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems:  [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { id, color, size ,num } = action.payload;
      console.log(num,"ss")
      const quantityToAdd = typeof num === 'number' ? num : 1;
      const existingItem = state.cartItems.find(
        (item) => item.id === id && item.color === color && item.size === size
      );
    
      if (existingItem) {
        // If the same product with the same color and size exists, increase quantity
        const updatedCartItems = state.cartItems.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, cartQuantity: action.payload.num? item.cartQuantity + num :  item.cartQuantity + 1}
          : item
      );
    
        state.cartItems = updatedCartItems;
        toast.info("Increased product quantity", {
          position: "bottom-right",
        });
      } else {
        // If the product with the same color and size doesn't exist, add a new item
        const newItem = { ...action.payload, cartQuantity: quantityToAdd  };
         state.cartItems.push(newItem);
        toast.success("Product added to cart", {
          position: "bottom-right",
        });
      }
    
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart: (state, action) => {
      const { id, color, size } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === id && item.color === color && item.size === size
      );
    
      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          toast.info("Decreased product quantity", {
            position: "bottom-right",
          });
        } else {
          const nextCartItems = state.cartItems.filter((item) => item.id !== id || item.color !== color || item.size !== size);
          state.cartItems = nextCartItems;
          toast.error("Product removed from cart", {
            position: "bottom-right",
          });
        }
      }
    },
    removeFromCart: (state, action) => {
      const { id, color, size } = action.payload;
      const nextCartItems = state.cartItems.filter(
        (item) => !(item.id === id && item.color === color && item.size === size)
      );
      state.cartItems = nextCartItems;
      toast.error("Product removed from cart", {
        position: "bottom-right",
      });
    },

    getTotals(state, action) {

        let { total, quantity } = state.cartItems.reduce(
          (cartTotal, cartItem) => {
            const { discounted_price,price, cartQuantity } = cartItem;

          let totalPrice = discounted_price===""?price:discounted_price
          const itemTotal = parseFloat(totalPrice) * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error("Cart cleared", { position: "bottom-right" });
    },
    clearCartAll(state, action) {
      state.cartItems = [];
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart,clearCartAll } =
  cartSlice.actions;

export default cartSlice.reducer;

