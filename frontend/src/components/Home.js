import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <header className="p-3 mb-3 border-bottom bg-dark">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                            <div className="devart-logo">DevArt</div>
                        </a>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 link-secondary text-light">|</a></li>
                            <li><a href="contact.html" className="nav-link px-2 link-body-emphasis text-light">Contact Us</a></li>
                            <li><a href="about.html" className="nav-link px-2 link-body-emphasis text-light">About Us</a></li>
                        </ul>
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        </form>
                        <div className="dropdown text-end">
                            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="mdo" width={32} height={32} className="rounded-circle" />
                            </a>
                            <ul className="dropdown-menu text-small">
                                <li><a className="dropdown-item" href="profile.html">Profile</a></li>
                                <li><a className="dropdown-item" href="uploadP.html">Upload Art</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="sigin.html">Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <h1>Product Showcase</h1>
                <div className="categories">
                    <button className="btn btn-dark" onclick="filterProducts('all')">All Categories</button>
                    <button className="btn btn-dark" onclick="filterProducts('logo')">Logo</button>
                    <button className="btn btn-dark" onclick="filterProducts('character')">Character</button>
                    <button className="btn btn-dark" onclick="filterProducts('photo')">Photo</button>
                    <button className="btn btn-dark" onclick="filterProducts('poster')">Poster</button>
                </div>
                <div className="row" id="product-list">
                </div>
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
                                <p><strong><i className="fas fa-envelope nav-link p-0 text-white" /> Email:</strong> 6c.th</p>
                            </li>
                            <li className="nav-item mb-2">
                                <p><strong><i className="fas fa-phone nav-link p-0 text-white" /> Phone:</strong> 099489</p>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div></div>
    )
}

export default Home