import React from "react";

import './Portfolio.css';

import Aos from 'aos';

import "aos/dist/aos.css";

import { useEffect } from 'react';

const Portfolio = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <div className="portfolio">
            <div className="portfolio-main">
                <div data-aos="fade-right" className="port-title">
                    <div className="port-inner">
                        <span className="text">
                            My Project
                        </span>
                        <span className="line">
                        </span>
                    </div>
                    <h2 className="sevices-name">
                        My Portfolio
                    </h2>
                </div>
                <div className="portfolio-body">
                    <div data-aos="fade-left" className="project">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1654768131/1_1_ejzhv6.png" alt="icon" />
                        </div>
                        <div className="project-part">
                            <div className="project-title">
                                VSNODE
                            </div>
                            <div className="descrption">
                                VSNODE is an E-Commerce Website where people can <br />
                                purchase a product and Admin can add or edit products <br />
                            </div>
                            <a href="https://github.com/pradip9821-tcs/E-Commerce_App_NodeJS_MongoDB.git" target="_blank" rel="noreferrer">
                                View GitHub
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="project1">
                        <div className="project-partt">
                            <div className="project-titlee">
                                Pharmacy App
                            </div>
                            <div className="descrption">
                                It is an E-Commerce Medical Application where customers can <br />
                                create a prescription with medicine details and customers <br />
                                can order it through a pharmacist's quote which is created by the pharmacist and delete it.
                            </div>
                            <a href="https://github.com/pradip9821-tcs/Mobile-Pharmacy.git" target="_blank" rel="noreferrer">
                                View GitHub
                            </a>
                        </div>
                        <div className="imagee">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655094018/2_1_yjuhkp.png" alt="icon" />
                        </div>
                    </div>
                    <div data-aos="fade-left" className="project2">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655093934/3_1_cu357h.png" alt="icon" />
                        </div>
                        <div className="project-part">
                            <div className="project-title">
                                Grocery App
                            </div>
                            <div className="descrption">
                                It is an E-Commerce Food and Vegetable Application where <br />
                                people can purchase items using coupon code. <br />
                            </div>
                            <a href="https://github.com/pradip9821-tcs/Thank-Greens.git" target="_blank" rel="noreferrer">
                                View GitHub
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="project1">
                        <div className="project-partt">
                            <div className="project-titlee">
                                Winner Yoga
                            </div>
                            <div className="descrption">
                                It is an E-Commerce Clothing Application where  people can <br />
                                purchase a product Admin can add or edit store and product’s <br />
                                category and Store can add or edit products and blogs.
                            </div>
                            <a href="https://github.com/pradip9821-tcs/Winner-Yoga.git" target="_blank" rel="noreferrer">
                                View GitHub
                            </a>
                        </div>
                        <div className="imagee">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655093804/6_qo2vnt.png" alt="icon" />
                        </div>
                    </div>
                    <div data-aos="fade-left" className="project2">
                        <div className="image">
                            <img src="https://res.cloudinary.com/dhpvia1ae/image/upload/v1655094018/2_1_yjuhkp.png" alt="icon" />
                        </div>
                        <div className="project-part">
                            <div className="project-title">
                                Pharmacy App (Using Go Languaguge)
                            </div>
                            <div className="descrption">
                                It is an E-Commerce Medical Application where customers can <br />
                                create a prescription  with medicine details and customers can order <br />
                                it through a pharmacist's quote which is created by the pharmacist and delete it.
                            </div>
                            <a href="https://github.com/pradip9821-tcs/Mobile-Pharmacy-Go.git" target="_blank" rel="noreferrer">
                                View GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;

