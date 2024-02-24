import React, { useState } from 'react'

import './agro.css'
import logo from '../../img/agrarniyLogo.png'
import arrow from '../../img/Vector (6).svg'
import all from '../../img/i.klb-icon-layout-grid.svg'
import apple from '../../img/Vector (7).svg'
import cucumber from '../../img/free-icon-cucumber-2346907 1.svg'
import meat from '../../img/Vector (8).svg'
import bread from '../../img/Vector (9).svg'
import cup from '../../img/cup.svg.svg'
import plant from '../../img/Vector (10).svg'
import add1 from '../../img/Rectangle 4.png'
import add2 from '../../img/Rectangle 5.png'
import add3 from '../../img/Rectangle 6.png'
import carrot from '../../img/image 2 (2).png'
import vinograd from '../../img/65be074432b6e4000d2536bd 1.png'
import yabloko from '../../img/65be07fb32b6e40009253baf 1.png'
import grusha from '../../img/изображение_2024-02-03_123501307 1.png'

import Header from '../Header/Header'
import { Link, useLocation } from 'react-router-dom'

export default function Agro() {

    const location = useLocation()

  return (
    <div className="agro__container">
        <section className="agro__section">
            <div className="agro__categories">
                <div className="agro__logo">
                    <Link to="/">
                        <img src={logo} alt="" />   
                    </Link>
                </div>
                <div className="agro__category">
                    <div className="category__logo">
                        <img src={all} alt="" />
                        <h4>Все категории</h4>
                    </div>
                    <img src={arrow} alt="" className='arrow'/>
                </div>
                <div className="agro__category">
                    <Link to="/agroStore/subAgro" className="category__logo">
                        <img src={apple} alt="" />
                        <h4>Фрукты и ягоды</h4>
                    </Link>
                    <img src={arrow} alt="" className='arrow__rotated arrow'/>
                </div>
                <div className="agro__category">
                    <div className="category__logo">
                        <img src={cucumber} alt="" />
                        <h4>Овощи</h4>
                    </div>
                    <img src={arrow} alt="" className='arrow__rotated arrow'/>
                </div>
                <div className="agro__category">
                    <div className="category__logo">
                        <img src={meat} alt="" />
                        <h4>Meats & Seafood</h4>
                    </div>
                    <img src={arrow} alt="" className='arrow__rotated arrow'/>
                </div>
                <div className="agro__category">
                    <div className="category__logo">
                        <img src={bread} alt="" />
                        <h4>Хлеб & Выпечка</h4>
                    </div>
                    <img src={arrow} alt="" className='arrow__rotated arrow'/>
                </div>
                <div className="agro__category">
                    <div className="category__logo">
                        <img src={cup} alt="" />
                        <h4>Напитки</h4>
                    </div>
                    <img src={arrow} alt="" className='arrow__rotated arrow'/>
                </div>
                <div className="agro__category">
                    <div className="category__logo">
                        <img src={plant} alt="" />
                        <h4>Рассада</h4>
                    </div>
                    <img src={arrow} alt="" className='arrow__rotated arrow'/>
                </div>

            </div>
            <section className="agro__main">
                <Header />
                <div className='agro__list'>
                    <div className="agro__addvertation">
                        <div className="addvertation__card">
                            <img src={add1} alt="" />
                            <span>Название</span>
                        </div>
                        <div className="addvertation__card">
                            <img src={add2} alt="" />
                            <span>Название</span>
                        </div>
                        <div className="addvertation__card">
                            <img src={add3} alt="" />
                            <span>Название</span>
                        </div>
                    </div>
                    <div className="list__section">
                        <h5>Сезонное</h5>
                        <div className="list__cards">
                            <Link to={"/item"} state={{name: 'Морковь', img: carrot}} className="list__card">
                                <img src={carrot} alt="" />
                                <h6>Морковь</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                            <Link to={"/item"} state={{name: 'Морковь', img: carrot}} className="list__card">
                                <img src={carrot} alt="" />
                                <h6>Морковь</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                            <Link to={"/item"} state={{name: 'Морковь', img: carrot}} className="list__card">
                                <img src={carrot} alt="" />
                                <h6>Морковь</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                            <Link to={"/item"} state={{name: 'Морковь', img: carrot}} className="list__card">
                                <img src={carrot} alt="" />
                                <h6>Морковь</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                        </div>
                    </div>

                    <div className="list__section">
                        <h5>Фрукты и ягоды</h5>
                        <div className="list__cards">
                            <Link to={"/item"} state={{name: 'Виноград кишмиш', img: vinograd}} className="list__card">
                                <img src={vinograd} alt="" />
                                <h6>Виноград кишмиш</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                            <Link to={"/item"} state={{name: 'Яблоки красные', img: yabloko}} className="list__card">
                                <img src={yabloko} alt="" />
                                <h6>Яблоки красные</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                            <Link to={"/item"} state={{name: 'Груши', img: grusha}} className="list__card">
                                <img src={grusha} alt="" />
                                <h6>Груши</h6>
                                <p>1 кг</p>
                                <span>129 Р</span>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>

        </section>
    </div>
  )
}
