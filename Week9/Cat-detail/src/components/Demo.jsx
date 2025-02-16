import {useState} from 'react';
export default function App() {
    const [formData,setformData]=useState([]);
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        phone:"",
    })
    const {name,email,password,phone}=data;
    const ChangeHandler=(e)=>{
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
    }
    const clickHandler=(e)=>{
        e.preventDefault();
        setformData([...formData,data]);
        console.log(formData);
    }
  return (
      <form onSubmit={clickHandler} className="flex flex-col w-1/2 m-auto">
            
                <label htmlFor="name">Whats your name</label><br/>
                <input type="text" name="name" value={name} onChange={ChangeHandler}></input><br/>
                <label htmlFor="email">Whats your email</label><br/>
                <input type="email" name="email" value={email} onChange={ChangeHandler}></input><br/>
                <label htmlFor="password">Whats your password </label><br/>
                <input type="text" name="password" value={password} onChange={ChangeHandler}></input><br/>
                <label htmlFor="phone">Whats your phone</label><br/>
                <input type="text" name="phone" value={phone} onChange={ChangeHandler}></input><br/>
                <button type="submit" >click here</button>
            
      </form>
  )
}