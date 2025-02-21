import { selector } from "recoil";
import { cartItemState } from "./cartItemState";
 const cartTotalSelector = selector({
    key:'cartTotalSelector',
    get:({get})=>{
          const cartItem=get(cartItemState);
            const totalPrice= cartItem.reduce((acc,item)=>acc+item.price*item.quantity,0);
          const totalItem=cartItem.reduce((acc,item)=> acc+item.quantity,0);
          return {
             totalItem,
             totalPrice
          }
    }
})

export {cartTotalSelector}