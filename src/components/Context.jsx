import React, { createContext, useState } from 'react'

export const customContext = createContext()

export const Context = (props) => {

    const [basket, setBasket] = useState([])

    const addProduct = (product) => {
        setBasket([...basket, product])
    }   

    const removeProduct = (id) => {
        setBasket(() => basket.filter((product) => product.id !== id))
    }

    const value = {
        addProduct,
        removeProduct,
        setBasket,
        basket
    }

  return <customContext.Provider value={value}>
    {props.children}
  </customContext.Provider>
}
