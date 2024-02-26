import React from 'react'
import HeadeLogoField from '../Header-logo-field/HeaderLogoField'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './subAgro.css'
import { Link, useLocation } from 'react-router-dom'

<<<<<<< HEAD
=======
import arrow from '../../img/Vector (6).svg'
import all from '../../img/i.klb-icon-layout-grid.svg'
import apple from '../../img/Vector (7).svg'
import cucumber from '../../img/free-icon-cucumber-2346907 1.svg'
import meat from '../../img/Vector (8).svg'
import bread from '../../img/Vector (9).svg'
import cup from '../../img/cup.svg.svg'
import plant from '../../img/Vector (10).svg'
import arrowLeft from '../../img/icons/Arrow - Left.svg'
import avocad from '../../img/avocad.jpg'
import grape from '../../img/card-grape.jpg'


>>>>>>> 412c004 (fix)
export default function SubAgro() {

    const location = useLocation()

  return (

    <div className="header-logo">
        <div className="header-cont">
            <HeadeLogoField/>
            <div className="nav-catig">
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
<<<<<<< HEAD
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
=======
                        <img src={all} alt="" />
                        <p>Все категории</p>
                    </div>
                    <img src={arrow} alt="" />
                </div>
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
                        <img src={apple} alt="" />
                        <p>Фрукты и ягоды</p>
                    </div>
                    <img src={arrow} alt="" />
                </div>
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
                        <img src={cucumber} alt="" />
                        <p>Овощи</p>
                    </div>
                    <img src={arrow} alt="" />
                </div>
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
                        <img src={meat} alt="" />
                        <p>Meats & Seafood</p>
                    </div>
                    <img src={arrow} alt="" />
                </div>
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
                        <img src={bread} alt="" />
                        <p>Хлеб & Выпечка</p>
                    </div>
                    <img src={arrow} alt="" />
                </div>
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
                        <img src={cup} alt="" />
                        <p>Напитки</p>
                    </div>
                    <img src={arrow} alt="" />
                </div>
                <div className="nav-catig-con">
                    <div className="nav-catig-info">
                        <img src={plant} alt="" />
                        <p>Рассада</p>
                    </div>
                    <img src={arrow} alt="" />
>>>>>>> 412c004 (fix)
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
<<<<<<< HEAD
                                <img src="/img/icons/Arrow - Left.svg" alt="" />
=======
                                <img src={arrowLeft} alt="" />
>>>>>>> 412c004 (fix)
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
<<<<<<< HEAD
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
                            
=======
                            <Link to={"/item"} state={{name: 'Авокадо', img: avocad }} className="categ-card-items card1">
                                <div className="card-items">
                                    <div className="card-items-img">
                                        <img src={avocad} alt="" />
                                    </div>
                                    <p className='card-items-name'>Авокадо</p>
                                    <p className='card-items-weight'>1кг</p>
                                    <p className='card-items-price'>129р</p>
                                </div>
                            </Link>
                            <Link to={"/item"} state={{name: 'Авокадо', img: avocad }} className="categ-card-items card2">
                                <div className="card-items">
                                    <div className="card-items-img">
                                        <img src={avocad} alt="" />
                                    </div>
                                    <p className='card-items-name'>Авокадо</p>
                                    <p className='card-items-weight'>1кг</p>
                                    <p className='card-items-price'>129р</p>
                                </div>
                            </Link>
                            <Link to={"/item"} state={{name: 'Авокадо', img: avocad }} className="categ-card-items card3 ">
                                <div className="card-items">
                                    <div className="card-items-img">
                                        <img src={avocad} alt="" />
                                    </div>
                                    <p className='card-items-name'>Авокадо</p>
                                    <p className='card-items-weight'>1кг</p>
                                    <p className='card-items-price'>129р</p>
                                </div>
                            </Link>
                            <Link to={"/item"} state={{name: 'Авокадо', img: avocad }} className="categ-card-items card4">
                            <div className="card-items">
                                    <div className="card-items-img">
                                        <img src={avocad} alt="" />
                                    </div>
                                    <p className='card-items-name'>Авокадо</p>
                                    <p className='card-items-weight'>1кг</p>
                                    <p className='card-items-price'>129р</p>
                                </div>
                            </Link> 
>>>>>>> 412c004 (fix)
                        </div>
                    </div>
                    <div className="categ">
                        <div className="fruitsberries-title">
                            <h2>Виноград</h2>
                        </div>
                        <div className="categ-items">
<<<<<<< HEAD
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
=======
                            <Link to={"/item"} state={{name: 'Морковь', img: grape }} className="categ-card-items">
                                <div className="card-items">
                                    <div className="card-items-img">
                                        <img src={grape} alt="" />
                                    </div>
                                    <p className='card-items-name'>Виноград</p>
                                    <p className='card-items-weight'>1кг</p>
                                    <p className='card-items-price'>129р</p>
                                </div>
                                
                            </Link>
                            <Link to={"/item"} state={{name: 'Морковь', img: grape }} className="categ-card-items card2">
                            <div className="card-items">
                                <div className="card-items-img">
                                    <img src={grape} alt="" />
                                </div>      
                                <p className='card-items-name'>Виноград</p>
                                <p className='card-items-weight'>1кг</p>
                                <p className='card-items-price'>129р</p>
                            </div>
                                
>>>>>>> 412c004 (fix)
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
       
=======
        <Footer/>
>>>>>>> 412c004 (fix)
    </div>
</div>
            

  )
}
