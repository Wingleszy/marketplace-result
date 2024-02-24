import React from 'react'
import trash from '../img/trash.svg'

export const BasketItem = (props) => {
    const { img, name, price, removeProduct, id } = props
    return (
        <div className="basket__item">
            <img src={img} alt="" className='basket__item_logo' />
            <div className="basket__item__desc">
                <h6>{name}</h6>
                <span>{price} ₽</span>
                <div className="basket__item__count">
                    <button>-</button>
                    <span>1 кг</span>
                    <button>+</button>
                </div>
            </div>
            <div className="basket__item__control">
                <button onClick={() => removeProduct(id)}><img src={trash} alt="" /></button>
                <h3>129 ₽</h3>
            </div>
        </div>
    )
}
