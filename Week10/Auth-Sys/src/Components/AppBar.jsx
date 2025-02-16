import React,{useContext} from 'react'
import {AuthContext} from '../context/AuthContext.jsx'
// import { Link } from 'react-router-dom';
const AppBar = () => {
     
        
        const {isLogout,isAuthenticated,user}=useContext(AuthContext);

  return (
    <div>
      <nav>
        <div className="flex items-center justify-between px-6 py-4 bg-green-500 border-b border-gray-200">
          <div>
            <a href="#" className="text-lg font-bold text-gray-800">Auth System</a>
          </div>
          <div>
            <a href="#" className="text-sm font-semibold text-gray-800">{isAuthenticated&&<h1>{`Hello ${user} Welcome to Auth System`}</h1>}</a>
            {
                isAuthenticated ? <a className="text-sm font-semibold text-gray-800 ml-4" onClick={isLogout}>Logout</a> : <a href="#" className="text-sm font-semibold text-gray-800 ml-4">Login</a>
            }
            


          </div>
        </div>
      </nav>
      <div className="flex items-end justify-end bg-slate-500">
        <div>
            <input type="checkbox"/>
            <span className="text-2xl">Use Context Api:On</span>
        </div>
      </div>
    </div>
  )
}

export default AppBar
