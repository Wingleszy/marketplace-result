import React from 'react'

export const PasswordForm = () => {
  return (
    <div className="registration__container">
        <form action="" className='registration__form'>
            <h2 className='password__form__name'>Защитите свой аккаунт</h2>
            <h4>придумайте логин и пароль</h4>
            <input type="text" className='registration__input' placeholder='Логин'/>
            <input type="password" className='registration__input' placeholder='Пароль'/>
            <input type="password" className='registration__input' placeholder='Подтверждение пароля'/>
            <input type="submit" className='registration__submit' value='СОХРАНИТЬ'/>
        </form>
    </div>
  )
}
