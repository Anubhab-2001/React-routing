import React from "react";
export default function Login() {
  return (
    <div class="container">
      <form action="validate" method="post" class="login-form">
        <h2>USER LOGIN</h2>

        <label>Email:</label>
        <br></br>
        <input type="email" name="email"></input>
        <br></br>
        <br></br>

        <label>Password:</label>
        <br></br>
        <input type="password" name="password"></input>
        <br></br>
        <br></br>

        <input type="submit" value="LOGIN"></input>
      </form>
    </div>
  );
}
