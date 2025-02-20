import { atom } from "recoil";

const cartItemState=atom({
    key:'cartItemState',
    default: [{
        id:1,
        title:'The Lean Startup',
        image:'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg',
        price:11.99
    }]
})