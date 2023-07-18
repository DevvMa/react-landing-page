import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="Qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1
                    ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"}
                    onClick={() => toggleTab(1)}
                    >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>
                <div className={toggleState === 2
                    ? "qualification__button qualification__active button--flex"
                    : "qualification__button button--flex"}
                    onClick={() => toggleTab(2)}
                    >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={
                    toggleState === 1
                    ?"qualification__content qualification__content-active"
                    :"qualification__content"
                    }
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer Engineer</h3>
                            <span className="qualification__subtitle">
                                INA - Institut Bisnis dan Informatika Stikom Surabaya
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2014 - 2018
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title"> Software Engineer</h3>
                            <span className="qualification__subtitle">
                                Vocational High School Purwosari
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2011 - 2014
                            </div>
                        </div>
                        
                    </div>
                   
                </div>

                <div className={
                    toggleState === 2
                    ?"qualification__content qualification__content-active"
                    :"qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Full Stack</h3>
                            <span className="qualification__subtitle">
                                PT. Sentra Vidya Utama
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2020 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title"> Wordpress Programmer</h3>
                            <span className="qualification__subtitle">
                                Lia S. Associates
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2018 - 2020
                            </div>
                        </div>
                        
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Full Stack</h3>
                            <span className="qualification__subtitle">
                                Day Studio - Self Employee
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2017 - current
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Programmer</h3>
                            <span className="qualification__subtitle">
                                PT. Pertamina Persero Mor V
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2016
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification