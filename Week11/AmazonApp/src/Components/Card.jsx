import React from 'react'
import { cartItemState } from '../Stores/cartItemState'
import { wishItemState } from '../Stores/wishItemState'
import { useRecoilState } from 'recoil'
const Card = ({ wishItems }) => {

  const [cartItem, setCartItem] = useRecoilState(cartItemState);
  const [wishItem, setWishItem] = useRecoilState(wishItemState);
  console.log(cartItem)

  function clickHandler(id) {
    let foundItem = cartItem.find(item => item.id == id);
      
    if (foundItem) {
      setCartItem(prevCart => {
        return prevCart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      });
    } else {

      let result2 = wishItem.find(item => item.id == id);
      if (result2) {
        setCartItem(prev => [...prev, { ...result2, quantity: 1 }]);
      }
    }
  }


  return (
    <>
      {wishItems.map((item) => {
        return (
          <div className="card bg-base-100 w-72 shadow-xl m-4" key={item.id}>
            <figure className='h-48   w-full'>
              <img
                src={item.image}
                alt="Shoes" className='object-contain ' />
            </figure>
            <div className="card-body">
              <h2 className="card-title"></h2>
              <p>{item.title}</p>
              <p>${item.price}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary" onClick={() => clickHandler(item.id)}>Add To Cart</button>
              </div>
            </div>
          </div>

        )
      })}
    </>
  )
}

export default Card
