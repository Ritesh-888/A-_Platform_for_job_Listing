import { useState } from "react"
import styles from './Style.module.css'
export const RegisterForm = ()=>{
    const [data, setData] = useState({name:"",mobile:"", email:"", password:""})
    const handleChange=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Create an account</h1>
            <h2 className={styles.h2}>Your personal job finder is here</h2>
            <input className={styles.input} name="name" value={data.name} onChange={handleChange} type={"text"} placeholder="Name"></input>
            <input className={styles.input}  name="email" value={data.email}  onChange={handleChange} type={"email"} placeholder="Email"></input>
            <input className={styles.input} name="name" value={data.mobile} onChange={handleChange} type={"tel"} placeholder="Mobile"></input>
            <input className={styles.input} name="password" value={data.password} onChange={handleChange} type={"password"} placeholder="Password"></input>
            <button className={styles.button}>Create Account</button>
            <p className={styles.footer}>Already have an account?<span className={styles.underline}>Sign in</span></p>
        </div>
    )
}