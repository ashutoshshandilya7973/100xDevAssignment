import React from 'react'

const Card = ({item}) => {
  return (
    <div className="card bg-base-100 w-72 shadow-xl m-4">
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
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  </div>
</div>
  )
}

export default Card
