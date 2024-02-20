import React, { useState } from 'react'

export default function Register() {

  const [credentials, setcredentials] = useState({ username: "", useremail: "", usermobile: 0, userpwd: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response =await fetch("http://localhost:5550/api/createUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: credentials.username, useremail: credentials.useremail, usermobile: credentials.usermobile, userpwd: credentials.userpwd })
    });
    const resjson = await  response.json()
        console.log(resjson);

    if (!resjson.success) {
      alert("enter valid credentials")
    }

  }


  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value })
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name='username' value={credentials.username} type='text' placeholder='enter name...' onChange={onChange} />
          <label>Email</label>
          <input name='useremail' value={credentials.useremail} type='email' placeholder='enter email...' onChange={onChange} />
          <label>Mobile No</label>
          <input name='usermobile' value={credentials.usermobile} type='number' placeholder='enter Mobile No...' onChange={onChange} />

          <label>Password</label>
          <input name='userpwd' value={credentials.userpwd} type='password' placeholder='enter password...' onChange={onChange} />
          <a href='/login'>Already a user</a>
          <button type="submit">Submit</button>
         
        </form>
      </div>

    </>
  )
}
