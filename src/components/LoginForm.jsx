import React from 'react'

export const LoginForm = () => {
  return (
    <div className="registration__container">
        <form action="" className='registration__form'>
            <h2 className='password__form__name'>Авторизация</h2>
            <input type="text" className='registration__input' placeholder='Логин'/>
            <input type="password" className='registration__input' placeholder='Пароль'/>
            <input type="submit" className='registration__submit' value='СОХРАНИТЬ'/>
        </form>
    </div>
  )
}
