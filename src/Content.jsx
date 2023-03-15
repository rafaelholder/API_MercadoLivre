import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Cart from './Page/Cart'
import Header from './Page/Header'
import Store from './Page/Store'

export const Content = () => {
    return (
        <>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Store />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
        </>
       
    )
}

