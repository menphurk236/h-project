import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const About = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="/">DevArt</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container mt-5">
                <h1>Contact Us</h1>
                <p>Have questions? We'd love to hear from you. Please contact us via email or phone.</p>
                <p><strong><i className="fas fa-envelope" /> Email:</strong> .ac.th</p>
                <p><strong><i className="fas fa-phone" /> Phone:</strong> 099489</p>
            </div>
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top bg-dark footer-text">
                    <div className="col mb-3">
                        <a href="index.html" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                            <img src="https://img2.pic.in.th/pic/Logo98c6bfecfe91ca4b.jpeg" alt="Logo" width={1000} height="auto" />
                        </a>
                    </div>
                    <div className="col mb-3">
                    </div>
                    <div className="col mb-3">
                        <h5>Categories</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">All Categories</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Logo</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Character</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Photo</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Poster</a></li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h5>About Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <p>เว็บไซต์นี้สร้างขึ้นมาเพื่อส่งงานโปรเจ็ค .</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h5>Contact Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <p><strong><i className="fas fa-envelope nav-link p-0 text-white" /> Email:</strong> 6ac.th</p>
                            </li>
                            <li className="nav-item mb-2">
                                <p><strong><i className="fas fa-phone nav-link p-0 text-white" /> Phone:</strong> 09489</p>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default About