import { useEffect, useState } from 'react'
import {BsFillCartCheckFill, BsFillCartPlusFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
//FUNCTIONS
import { getItem, setItem } from '../../services/LocalStorage'
//CSS
import styles from './index.module.css';

const Store = () => {

    const [data, setData] = useState([])
    const [cart, setCart] = useState(getItem('carrinho') || [])
    const [search, setSearch] = useState('');

    const fetchApi = async () => {
        let objJson
        const url = `http://api.mercadolibre.com/sites/MLB/search?q=${search}`;
        const response = await fetch(url);
        objJson = await response.json()
        
        setData(objJson.results)
    }

    const handleAddItem = (item) => {
        const element = cart.find((e) => e.id === item.id)
        if(element){
            const arrFilter = cart.filter((e) => e.id !== item.id)
            setCart(arrFilter)
            setItem('carrinho', arrFilter)
        } else {
            setCart([...cart, item])
            setItem('carrinho', [...cart, item])
        }
    }

    const handleSearch = async (e) =>{
        await fetchApi();
        setSearch(e)
        
        
        console.log(search)
    }

    useEffect(() => {
        
        fetchApi();
    }, [])

  return (
    <div>
        <div className={styles.searchBar}>
            <input 
                type="text" 
                placeholder='Type the product'     
                onChange={(e) => setSearch(e.target.value)} 
            />
            <button onClick={() => handleSearch(search)}>
                Search
            </button>
        </div>

        <div className={styles.container}>
            {data.map((e) => (
                <div key={e.id} className={styles.product}>
                    <h2>{e.title}</h2>
                    <div className={styles.photoPrice}>
                        <img src={e.thumbnail} alt={`imagem de ${e.title}`} />
                        <h2>R$ {e.price}</h2> 
                    </div>
                    <div className={styles.button}>
                        {cart.some((itemCart) => itemCart.id === e.id ) 
                            ? (<BsFillCartCheckFill onClick={() => handleAddItem(e)}/>) 
                            : (<BsFillCartPlusFill onClick={() => handleAddItem(e)}/>)
                        }
                    </div>
                    
                        
                
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Store