import React, { useState } from "react";
// import { useNavigate, Redirect } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    window.location.assign("/jobPage")
    axios.post("http://localhost:3030/login", user).then((res) => {
        console.log("res",res)
          alert(res.data.message)
    });
  };

  return (
    <>
      <div className="lcontainer">
        <div className="lbackground">
          <div className="lbox">
            <h2 className="lheading1">
              Login with your
              <br />
              <strong>JobPortal</strong> Account
            </h2>

            <form className="linputContainer">
              <div className="lemailContainer">
                <div className="liconContainer">
                  <PersonOutlineIcon />
                </div>
                <input
                  title="Please enter the valid email address"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  className="lemailInput"
                  type="text"
                  required
                />
                <span className="lfloatingEmail">Email</span>
              </div>
              <div className="lpwdContainer">
                <div className="liconContainer">
                  <LockIcon />
                </div>
                <input
                  id="pwdInput"
                  title="Please provide the strong password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  className="lpwdInput"
                  type="password"
                  required
                />
                <span className="lfloatingPwd">Password</span>
              </div>
              <div className="lforgetPwd">
                <a href="/forgetPwd">Forget Password?</a>
              </div>
              <button
                type="submit"
                onClick={login}
                className="lbtn"
                style={{ width: "300px" }}
              >
                Login
              </button>
            </form>
            <div className="lconfirmation"></div>
            <div className="lroute">
              Don't have an account? <a href="/register">SignUp</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
