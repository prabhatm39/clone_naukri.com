
import React from 'react'
import { Input } from '@chakra-ui/react'
import styles from "./login.module.css";

export const Login = () => {
  return (
    <div className={styles.main}>
        <div>
            <div>Login</div>
            <div>Register for free</div>
        </div>
        <div>
            <p>Email ID / Username</p>
            <Input placeholder='Enter your active Email Id / username' size='lg' className={styles.input}/>
            <br/>
            <br/>
            <p>Password</p>
            <Input placeholder='Enter your password' type="password" size='lg' className={styles.input}/>
            <br/>
            <label>forgot password</label>
            <br/>
            <div>Login</div>
            <span>use OTP to login</span>

        </div>
    </div>
  )
}



