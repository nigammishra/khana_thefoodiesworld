// import React, { useState, useRef, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getHomePage } from '../Store/home';
import Slider from 'react-slick';
import partner1 from "../images/partner1.png";
import partner2 from "../images/Uber-Eats-logo.png";
import partner3 from "../images/dominos.jpg";
import partner4 from "../images/kfc-logo.png";
import partner5 from "../images/mc-donalds-logo.webp";
import partner6 from "../images/swiggy-logo.png";
// import partner7 from "../images/zomato-logo.png";
import partner7 from "../images/Pizza_Hut_logo.svg.png";
// import partner9 from "../images/burger-king-logo.png";
// import partner10 from "../images/subway-logo.png";
// import partner11 from "../images/starbucks-logo.png";
// import partner12 from "../images/dunkin-donuts-logo.png";
// import partner13 from "../images/baskin-robbins-logo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './partners.css'

const Partners = () => {

    //REDUCER START
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getHomePage());
    // }, []);

    // const homePage = useSelector(state => state.home.HomePage);


    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        autoplay: true,
        autoplaySpeed: 20000000,
    };
    return (
        <>
            <section className="py-4">
                <div className="container text-center partner">
                    <h1>Our Partners</h1>
                    <div className="partner-items">
                        <Slider {...settings1}>
                                
                                <div className="m-1">
                                    <div className="partner-list">
                                        <img src={partner1} className="img-fluid" alt="partners" />
                                    </div>
                                </div><div className="m-1">
                                    <div className="partner-list">
                                        <img src={partner2} className="img-fluid" alt="partners" />
                                    </div>
                                </div><div className="m-1">
                                    <div className="partner-list">
                                        <img src={partner3} className="img-fluid" alt="partners" />
                                    </div>
                                </div><div className="m-1">
                                    <div className="partner-list">
                                        <img src={partner4} className="img-fluid" alt="partners" />
                                    </div>
                                </div><div className="m-1">
                                    <div className="partner-list">
                                        <img src={partner5} className="img-fluid" alt="partners" />
                                    </div>
                                </div>
                                <div className="m-1">
                                    <div className="partner-list">
                                        <img src={partner6} className="img-fluid" alt="partners" />
                                    </div>
                                </div>
                                <div className="m-1">
                                    <div className="partner-list">
                                        <img src={partner7} style={{objectFit:'cover'}} className="img-fluid" alt="partners" />
                                    </div>
                                </div>
                                {/* <div className="m-1">
                                    <div className="partner-list">
                                        <img src={partner8} style={{objectFit:'cover'}} className="img-fluid" alt="partners" />
                                    </div>
                                </div>
                                <div className="m-1">
                                    <div className="partner-list">
                                        <img src={partner9} style={{objectFit:'cover'}} className="img-fluid" alt="partners" />
                                    </div>
                                </div>
                                <div className="m-1">
                                    <div className="partner-list">
                                        <img src={partner10} style={{objectFit:'cover'}} className="img-fluid" alt="partners" />
                                    </div>
                                </div>
                                <div className="m-1">
                                    <div className="partner-list">
                                        <img src={partner11} style={{objectFit:'cover'}} className="img-fluid" alt="partners" />
                                    </div>
                                </div>
                                <div className="m-1">
                                    <div className="partner-list">
                                        <img src={partner12} style={{objectFit:'cover'}} className="img-fluid" alt="partners" />
                                    </div>
                                </div>
                                <div className="m-1">
                                    <div className="partner-list">
                                        <img src={partner13} style={{objectFit:'cover'}} className="img-fluid" alt="partners" />
                                    </div>
                                </div> */}
                        </Slider>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Partners
