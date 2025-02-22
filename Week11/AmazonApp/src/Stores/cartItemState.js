import { atom } from "recoil";

 const cartItemState=atom({
    key:'cartItemState',
    default: []
})
export {cartItemState}