import React from "react";

const Signup = ({ setEmail, setPassword, handleAction }) => {
  console.log(setEmail, setPassword);

  return (
    <div>
      <h3 className="Login-title">Sign Up</h3>

      <div className="Login row g-3 align-items-center">
        <form className="formEditor">
          <label for="Email" className="form-label">
            Email :
          </label>

          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="Email"
          />
          <br />

          <label for="inputPassword5" className="form-label">
            Password :
          </label>

          <br />

          <input
            type="Password"
            className="form-control"
            onChange={(x) => {
              setPassword(x.target.value);
            }}
            name="Password"
          />

          <br />

          <input
            type="button"
            value="SignUp"
            onClick={handleAction}
            className="btn btn-success subButton "
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
