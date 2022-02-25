import React, {useContext} from 'react';
import Header from '../components/Header'
import {Context} from '../store/store'
import { sortByKey, addItemToCart } from '../utilities';
import ShortUniqueId from 'short-unique-id'

export default function GameOver() {
    const [state, dispatch] = useContext(Context)

    const uid = new ShortUniqueId({length:10})

    const removeItem = (item) => {
        const removedCartItems = state.cart.filter((i) => i.uid !== item.uid)
        dispatch ({type: 'REMOVE_ITEM', payload: removedCartItems})
    }

    const visualCart = sortByKey(state.cart, 'title')
    console.log(visualCart)
   
    return(
        <div>
            <Header />
            <h1>Cart</h1>
        
            {Object.entries(visualCart).map((p, i) => {
                console.log(p[1])
                const key = `cart-item--${i}`
                const product = p[1][0]
                return (
                    <div className="item" key={key}>
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                        <p>{product.desc}</p>
                        <strong>Price: {product.price}</strong>
                        <span>x {p[1].length}</span>
                        <button onClick={() => removeItem(product)}>-</button>
                        <button onClick={() => addItemToCart(product, state, dispatch, uid)}>+</button>
                    </div>
                )

           })}

        </div>
    )
}