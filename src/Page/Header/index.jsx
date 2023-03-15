import React from 'react'


//CSS
import styles from './index.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
        <h1> <a href="/">Store</a> </h1>
        <h1> <a href="/cart"> Cart</a> </h1>
        
    </div>
  )
}

export default Header