import React from 'react'
import HeadeLogoField from '../Header-logo-field/HeaderLogoField'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './subAgro.css'
import { Link, useLocation } from 'react-router-dom'

export default function SubAgro() {

    const location = useLocation()

  return (

    <div className="header-logo">
        <div className="header-cont">
            <HeadeLogoField/>
            <div className="nav-catig">
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
                        <img src="/img/layout-grid.png" alt="" />
                        <p>Все категории</p>
                    </div>
                    <img src="/img/icons/after.svg" alt="" />
                </div>
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
                        <img src="/img/apple.png" alt="" />
                        <p>Фрукты и ягоды</p>
                    </div>
                    <img src="/img/icons/after.svg" alt="" />
                </div>
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
                        <img src="/img/cucumber.png" alt="" />
                        <p>Овощи</p>
                    </div>
                    <img src="/img/icons/after.svg" alt="" />
                </div>
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
                        <img src="/img/meat.svg.png" alt="" />
                        <p>Meats & Seafood</p>
                    </div>
                    <img src="/img/icons/after.svg" alt="" />
                </div>
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
                        <img src="/img/toast-bread.png" alt="" />
                        <p>Хлеб & Выпечка</p>
                    </div>
                    <img src="/img/icons/after.svg" alt="" />
                </div>
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
                        <img src="/img/cup.png" alt="" />
                        <p>Напитки</p>
                    </div>
                    <img src="/img/icons/after.svg" alt="" />
                </div>
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
                        <img src="/img/wheat.png" alt="" />
                        <p>Рассада</p>
                    </div>
                    <img src="/img/icons/after.svg" alt="" />
                </div>
            </div>
        </div>
    <div className="container">
        <Header/>
        <div className="subcategoriesAgro">
                <div className="subcategoriesAgro-conatiner">
                    <div className="fruitsberries">
                        <div className="fruitsberries-title">
                            <Link to="/agroStore">
                                <img src="/img/icons/Arrow - Left.svg" alt="" />
                            </Link>
                            <h2>Фрукты и ягоды</h2>
                        </div>
                        <div className="subcategories-items">
                            <a href="#">Виноград</a>
                            <a href="#">Авокадо</a>
                            <a href="#">Гранат</a>
                            <a href="#">Наборы и оссорти </a>
                        </div>
                    </div>
                    <div className="categ">
                        <div className="fruitsberries-title">
                            <h2>Авокадо</h2>
                        </div>
                        <div className="categ-items">
                            <Link to={"/item"} state={{name: 'Авокадо', img: "/img/avocad.jpg"}} className="card-items card1">
                                <img src="/img/avocad.jpg" alt="" />
                                <p className='card-items-name'>Авокадо</p>
                                <p className='card-items-weight'>1кг</p>
                                <p className='card-items-price'>129р</p>
                            </Link>
                            <Link to={"/item"} state={{name: 'Авокадо', img: "/img/avocad.jpg"}} className="card-items card2">
                                <img src="/img/avocad.jpg" alt="" />
                                <p className='card-items-name'>Авокадо</p>
                                <p className='card-items-weight'>1кг</p>
                                <p className='card-items-price'>129р</p>
                            </Link>
                            <Link to={"/item"} state={{name: 'Авокадо', img: "/img/avocad.jpg"}} className="card-items card3 ">
                                <img src="/img/avocad.jpg" alt="" />
                                <p className='card-items-name'>Авокадо</p>
                                <p className='card-items-weight'>1кг</p>
                                <p className='card-items-price'>129р</p>
                            </Link>
                            <Link to={"/item"} state={{name: 'Авокадо', img: "/img/avocad.jpg"}} className="card-items card4">
                                <img src="/img/avocad.jpg" alt="" />
                                <p className='card-items-name'>Авокадо</p>
                                <p className='card-items-weight'>1кг</p>
                                <p className='card-items-price'>129р</p>
                            </Link>
                            
                        </div>
                    </div>
                    <div className="categ">
                        <div className="fruitsberries-title">
                            <h2>Виноград</h2>
                        </div>
                        <div className="categ-items">
                            <Link to={"/item"} state={{name: 'Морковь', img: "/img/card-grape.jpg"}} className="card-items">
                                <img src="/img/card-grape.jpg" alt="" />
                                <p className='card-items-name'>Виноград</p>
                                <p className='card-items-weight'>1кг</p>
                                <p className='card-items-price'>129р</p>
                            </Link>
                            <Link to={"/item"} state={{name: 'Морковь', img: "/img/avocad.jpg"}} className="card-items card2">
                                <img src="/img/avocad.jpg" alt="" />
                                <p className='card-items-name'>Виноград</p>
                                <p className='card-items-weight'>1кг</p>
                                <p className='card-items-price'>129р</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
       
    </div>
</div>
            

  )
}
