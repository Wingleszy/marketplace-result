import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className="footer-field">
            <div className="footer-grid">
                <div className="footer-wrapper">
                    <h3 className='footer-wrapper-title'>О нас</h3>
                    <p className="footer-wrapper-title-location">355035, г.Ставрополь,пер.Зоотехнический, 12.</p>
                    <p className="footer-wrapper-title-info">ФГБОУ ВО «Ставропольский государственный аграрный университет»
                        Приемная комиссия: <br />+7 (8652) 71-60-57 <br />
                        По общим вопросам: <br />+7 (8652) 35-22-82, 35-22-83 <br />
                        inf@stgau.ru
                    </p>
                </div>
                <div className="footer-wrapper">
                    <h3 className='footer-wrapper-title'>Информация</h3>
                    <ul>
                        <li> <a href="#" className="footer-wrapper-title-link">Вопросы и ответы</a></li>
                        <li><a href="#" className="footer-wrapper-title-link">Контакты</a></li>
                        <li><a href="#" className="footer-wrapper-title-link">Для поставщиков</a></li>
                        <li><a href="#" className="footer-wrapper-title-link">Политика конфиденциальности</a></li>
                    </ul> 
                </div>
                <div className="footer-wrapper  ">
                   <img src="img/footer-logo.png" alt="" className="footer-wrapper-logo" />
                </div>
                <div className="footer-wrapper  wrapper-services">
                    <h3 className='footer-wrapper-title'>Услуги</h3>
                    <ul>
                        <li><a href="#" className="footer-wrapper-title-link">Агро</a></li>
                        <li><a href="#" className="footer-wrapper-title-link">Услуги ветеринарного центра</a></li>
                        <li><a href="#" className="footer-wrapper-title-link">Услуги в гостинице</a></li>
                        <li><a href="#" className="footer-wrapper-title-link">Мерч от профкома</a></li>
                    </ul>
                    
                    
                </div>
                <div className="footer-wrapper wrapper-icons">
                   <div className="footer-wrapper-grid">
                        <a href="#" className='icon-telegram'>
                            <div className="footer-wrapper-grid-icons ">
                                <img src="img/icons/icon-telegram.svg" alt="telegram" />
                            </div>
                        </a>
                        <a href="#" className='icon-VK'>
                            <div className="footer-wrapper-grid-icons">
                                <img src="img/icons/icon-VK.svg" alt="VK" />
                            </div>
                        </a>
                        <a href="#" className=' icon-YouTube'>
                            <div className="footer-wrapper-grid-icons">
                                <img src="img/icons/icon-YouTube.svg" alt="YouTube" />
                            </div>
                        </a>
                        <a href="#" className='icon-rutube'>
                            <div className="footer-wrapper-grid-icons ">
                                <img src="img/icons/icon-rutube.svg" alt="rutube" />
                            </div>
                        </a>
                        <a href="#" className='icon-OK'>
                            <div className="footer-wrapper-grid-icons ">
                                <img src="img/icons/icon-OK.svg" alt="OK" />
                            </div>
                        </a>
                   </div>
                </div>
            </div>
        </div>
    </footer>
  )
}