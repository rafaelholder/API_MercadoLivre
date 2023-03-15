import React, { useState } from 'react'
import { BsCartDashFill } from 'react-icons/bs'
import { getItem, setItem } from '../../services/LocalStorage'

import styles from './index.module.css';

const Cart = () => {
  const [data, setData] = useState(getItem('carrinho') || [])
  
    const handleRemoveItem = (item) => {
        const arrFilter = data.filter((e) => e.id !== item.id)
        setData(arrFilter)
        setItem('carrinho', arrFilter )
    }

    return (
    <div className={styles.page} >
        {data.length < 2 && (
            <div className={styles.noProductContainer}>
                <p>There are no products :(</p>
                <p><a href='/'>Click here to buy some good stuff</a></p>
            </div>
        )}
        {data.length > 1 && (
            <div className={styles.container}>
            {data.map((e) => (
                <div key={e.id} className={styles.product}>
                    <img src={e.thumbnail} alt="" />
                    <div>
                        <h4>{e.title}</h4>
                        <h4>R${e.price}</h4>
                        <BsCartDashFill 
                            className={styles.button} 
                            onClick={() => handleRemoveItem(e)}
                        />
                    </div>
                </div>
            ))}
        </div>
        )}
        

    </div>
  )
}

export default Cart