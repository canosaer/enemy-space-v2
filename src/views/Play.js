import React, {useContext} from 'react'
import Header from '../components/Header'
import {Context} from '../store/store'
import ShortUniqueId from 'short-unique-id'
import { sortByKey, addItemToCart } from '../utilities'

export default function Play() {
    const [state, dispatch] = useContext(Context)
   
    const uid = new ShortUniqueId({length:10})
    


    return(
        <div>
            <Header />
            <h1>Shop</h1>
            {state.products.map((product, i) => {
                const key = `product--${i}`

                return(
                    <div key={key}>
                        <img src={product.image} alt={product.title} />
                        <h4>{product.title}</h4>
                        <p>{product.desc}</p>
                        <strong>Price: {product.price}</strong>
                        <button onClick={() => addItemToCart(product, state, dispatch, uid)}>Add to Cart</button>
                    </div>
                )
            })}
        </div>
    )
}