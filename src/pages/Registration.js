import React from "react";
export default function Registration() {
  return (
    <div class="container">
      <h2>Registration form</h2>
      <form action="register" method="post">
        <label>Username:</label>
        <br></br>
        <input type="text" name="username"></input> <br></br>
        <label>Email:</label>
        <br></br>
        <input type="email" name="email"></input> <br></br>
        <label>Password:</label>
        <br></br>
        <input type="password" name="password"></input> <br></br>
        <label>Gender:</label>
        <br></br>
        Male<input type="radio" name="gender" value="male"></input>
        Female<input type="radio" name="gender" value="female"></input>
        Other<input type="radio" name="gender" value="Other"></input>
        <br />
        <label>Role:</label>
        <br></br>
        Admin
        <input type="radio" name="role" value="admin" />
        Customer<input type="radio" name="role" value="customer"></input>
        <br />
        <label>Address:</label>
        <br></br>
        <textarea name="address"></textarea>
        <br />
        <br />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
