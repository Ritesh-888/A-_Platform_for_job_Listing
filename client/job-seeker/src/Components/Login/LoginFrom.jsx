import { useState } from "react"
import styles from './Style.module.css'
export const LoginForm = ()=>{
    const [data, setData] = useState({email:"", password:""})
    const handleChange=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Already have an account ?</h1>
            <h2 className={styles.h2}>Your personal job finder is here</h2>
            <input className={styles.input}  name="email" value={data.email}  onChange={handleChange} type={"email"} placeholder="Email"></input>
            <input className={styles.input} name="password" value={data.password} onChange={handleChange} type={"password"} placeholder="Password"></input>
            <button className={styles.button}>Sign in</button>
            <p className={styles.footer}>Don&apos;t have an account?<span className={styles.underline}>Sign Up</span></p>
        </div>
    )
}