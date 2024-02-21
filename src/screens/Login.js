import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
export default function Login() {

  const [credentials, setcredentials] = useState({ useremail: "", userpwd: "" })
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response =await fetch("http://localhost:5550/api/loginUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ useremail: credentials.useremail,userpwd: credentials.userpwd })
    });
    const resjson = await  response.json()
        console.log(resjson);

    if (resjson.success) {
      localStorage.setItem("authToken",resjson.authToken);
      console.log(localStorage.getItem("authToken"));
      navigate("/profile");
    }else
    alert("enter valid credentials");
  }


  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input name='useremail' value={credentials.useremail} type='email' placeholder='enter email...' onChange={onChange} />
          <label>Password</label>
          <input name='userpwd' value={credentials.userpwd} type='password' placeholder='enter password...' onChange={onChange} />
          <a href='/createUser'>New user!Register here</a>
          <button type="submit">Login</button>
         
        </form>
      </div>

    </>
  )
}
