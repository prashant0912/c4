import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

export const Login = () => {
  const navigate = useNavigate();
  const [formdata,setFormdata] = useState({})


  const handlechange = (e)=>{
    const {name,value} = e.target;

    setFormdata({
      ...formdata,
      [name]:value
    })
    

  }


  const check = async ()=>{
    const data = await fetch("http://localhost:8080/users").then((d)=>d.json());
    data.map((e)=>{
      if(e.username === formdata.username&&e.password === formdata.password){
        if(e.username === "admin"){
          navigate("/orders")
        }
        else{
          navigate('/neworder')
        }
      }
    })
    

  }

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange ={handlechange}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange ={handlechange}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" >Login</button>
      
      
    </div>
  );
};
