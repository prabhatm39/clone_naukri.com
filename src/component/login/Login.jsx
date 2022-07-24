
import React from 'react'
import { Input } from '@chakra-ui/react'
import styles from "./login.module.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [token, setToken] = useState("");
  const enter = useContext(AppContext);
  

  function handelChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  function handelSumbit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((d) => {
        console.log("token", d.token);
        setToken(d.token);
        enter.handelogin(d.token);
        navigate("/LoginSuccesful");
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  function handelpass(){
    navigate("/register");
  }
  return (
    <div className={styles.main}>
        <div className={styles.head}>
            <div className={styles.lo}>Login</div>
            <div className={styles.re} onClick={handelpass}>Register for free</div>
        </div>
        <div>
          <form onSubmit={handelSumbit}>
            <p className={styles.tex}>Email ID / Username</p>
            <Input placeholder='Enter your active Email Id / username' size='lg' className={styles.input}
             type="email"
            
             onChange={handelChange}
             name="email"
             value={formData.email}/>
            <br/>
            <br/>
            <p className={styles.tex}>Password</p>
            <Input placeholder='Enter your password' type="password" size='lg' className={styles.input}
            onChange={handelChange}
            name="password"
            value={formData.password}/>
            <br/>
            <label className={styles.fog}>forgot password</label>
            <br/>
            <br/>
            <input type="submit" className={styles.log}  />
            <br/>
            </form>
            <div className={styles.sp}>
            <span className={styles.us}>use OTP to login</span>
            </div>

            <div className={styles.gog}>
              <img src='data:image/png;base64,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'
              className={styles.img} />
              <div>Singin with google</div>

            </div>
           

        </div>

    </div>
  )
}



