import styles from './Style.module.css'
export const Navbar = ()=>{
    return (
        <div className={styles.nav}>
            <p className={styles.text}>JobFinder</p>
            <div>
                <button className={styles.login}>Login</button>
                <button className={styles.register}>Register</button>
            </div>
        </div>
    )
}