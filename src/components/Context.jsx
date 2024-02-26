import React, { createContext, useState } from 'react'

export const customContext = createContext()

export const Context = (props) => {

    const [basket, setBasket] = useState([])
<<<<<<< HEAD
=======
    const [id, setId] = useState([])
>>>>>>> 412c004 (fix)

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
<<<<<<< HEAD
        basket
=======
        basket,
        id, 
        setId
>>>>>>> 412c004 (fix)
    }

  return <customContext.Provider value={value}>
    {props.children}
  </customContext.Provider>
}
