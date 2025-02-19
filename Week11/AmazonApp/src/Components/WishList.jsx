import React from 'react'
import Card from './Card'

const WishList = () => {
  return (
    <div className="h-screen flex">
        <div className="h-full w-[20%] text-white border-red-950 border-solid border">
            <div className="bg-neutral-800 rounded-md p-3 m-3 ">
                <h1 className='text-xl'>Your Wish List</h1>
                <h3>default list</h3>
            </div>
        </div>
        <div className="h-full w-full text-white border-red-950 border-solid border overflow-y-auto flex flex-wrap gap-4 p-4">
            {
                Array(10).fill(0).map((item, index) => (
                    <Card key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default WishList
