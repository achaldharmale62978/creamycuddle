import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import logo from '../../Assetss/home/WhatsApp Image 2024-02-18 at 23.59.12_4d6c9a38.jpg'
import { MdTrolley } from "react-icons/md";

const Navbar = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-light bg-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" >
                            <img src={logo} height='120px' width='150px'></img>
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Creamy Cuddle</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                                    </li>  <hr />

                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/aboutus">About Us.</a>
                                    </li><hr />

                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/contactus">Contact Us.</a>
                                    </li><hr />

                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/creview">Customer Reviews</a>
                                    </li><hr />

                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/products">Our products</a>
                                    </li><hr />

                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/addcart">Add to Cart <span style={{color:'black',fontSize:'25px'}}><MdTrolley /></span></a>
                                    </li><hr />

                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
        </>
    )
}

export default Navbar