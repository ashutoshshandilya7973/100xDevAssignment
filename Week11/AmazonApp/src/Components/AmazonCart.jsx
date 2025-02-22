import React, { useEffect, useState } from 'react'
import { cartItemState } from '../Stores/cartItemState'
import { cartTotalSelector } from '../Stores/cartTotalSelector'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Link } from 'react-router-dom'
const AmazonCart = () => {
  const [cartItem, setCartItem] = useRecoilState(cartItemState);
  const cartTotal = useRecoilValue(cartTotalSelector);
  const [checkOut, setCheckOut] = useState(false);
  function addItem(id) {
    setCartItem((prevItem) => {
      return prevItem.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    })
  }

  function delItem(id) {
    setCartItem(prevItem => {
      return prevItem
        .map(item =>
          item.id === id
            ? item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : null
            : item
        )
        .filter(item => item !== null);
    });
  }

  function handleCheckout() {
    setCheckOut(prev => !prev);
  }
  
  useEffect(() => {
    console.log(checkOut)
    if (checkOut) {
      setCartItem([])

    }
  }, [checkOut])
  return (
    <div>
      <div className="h-full min-h-screen bg-gray-100 pt-20 relative">
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex  md:space-x-6 xl:px-0">
          <div className=" md:flex md:flex-wrap">
            {
             !checkOut&& cartItem.map((item) => {
                return (
                  <div className="rounded-lg md:w-2/3" key={item.id}>
                    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                      <img src={item.image} alt="product-image" className="w-full h-28 rounded-lg sm:w-40" />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2 className="text-lg font-bold text-gray-900">{item.title}</h2>
                          <p className="mt-1 text-xs text-gray-700">{Math.round(item.price * item.quantity)}</p>
                        </div>
                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                          <div className="flex items-center border-gray-100">
                            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => delItem(item.id)}> - </span>
                            <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={item.quantity} min="1" />
                            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={() => addItem(item.id)}> + </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <p className="text-sm text-black">${Math.round(item.price * item.quantity)}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                )
              })
            }
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${Math.round(cartTotal.totalPrice)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">${Math.round(cartTotal.totalPrice + 4.99)}</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={handleCheckout}>Check out</button>
          </div>
        </div>
        {/* purcshe confirmation */}
        {checkOut &&
          <div className="absolute top-[20%] left-[35%] ">
            <div className="flex items-center justify-center  bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
              <div className="w-full max-w-2xl p-4 bg-white shadow-2xl dark:bg-gray-900 sm:p-10 sm:rounded-3xl">
                <div className="text-center">
                  <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full dark:bg-green-700">
                    <svg className="h-12 w-12 text-green-600 dark:text-green-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                  </div>
                  <h1 className="text-4xl font-extrabold text-green-700 dark:text-green-400">Payment Successful!</h1>
                  <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
                    Thank you for your purchase.
                  </p>

                  <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                    Total Amount: $134.98 USD
                  </p>
                </div>
                <div className="mt-8 text-center">
                  <Link to="/"
                    
                    className="inline-block px-6 py-2 text-lg font-medium text-white transition-transform rounded-full shadow-lg bg-gradient-to-r from-indigo-600 to-blue-600 hover:scale-105 hover:from-indigo-700 hover:to-blue-700 dark:from-indigo-500 dark:to-blue-500 dark:hover:from-indigo-600 dark:hover:to-blue-600">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default AmazonCart
