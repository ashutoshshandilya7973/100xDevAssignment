import React from 'react'

const Header = ({ message }) => {
    return (
        <div className="bg-red-500 h-22 w-full flex justify-center items-center">
            <div className="text-blue-500 font-bold text-2xl">
                <h1 >{message}</h1>
            </div>

        </div>
    )
}

export default Header
