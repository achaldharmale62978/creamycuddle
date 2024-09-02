import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js'
import logo from '../../Assetss/home/soaplogo.com.png'
import { MdTrolley } from "react-icons/md";
import '../cssfolder/Nav.css'
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navbar = () => {
    return (
        <>
            
                <nav className="navbar  navbar-light bg-light sticky-sm-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#" >
                            <img src={logo} height='60px' width='200px' class="d-inline-block align-text-top" alt='logo'></img>
                        </a>

                        <div className='d-flex'>
                            <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h4 className="offcanvas-title f1" id="offcanvasNavbarLabel"><b>Creamy Cuddle</b></h4>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>

                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <a className="nav-link active f" aria-current="page" href="/home">Home</a>
                                        </li>  <hr />

                                        <li className="nav-item">
                                            <a className="nav-link active f" aria-current="page" href="/aboutus">About Us.</a>
                                        </li><hr />

                                        <li className="nav-item">
                                            <a className="nav-link active f" aria-current="page" href="/contactus">Contact Us.</a>
                                        </li><hr />

                                        <li className="nav-item">
                                            <a className="nav-link active f" aria-current="page" href="/creview">Customer Reviews</a>
                                        </li><hr />

                                        <li className="nav-item">
                                            <a className="nav-link active f" aria-current="page" href="/products">Our products</a>
                                        </li><hr />

                                        <li className="nav-item">
                                            <a className="nav-link active f" aria-current="page" href="/addcart">Add to Cart <span style={{ color: 'black', fontSize: '25px' }}><MdTrolley /></span></a>
                                        </li><hr />

                                    </ul>

                                </div>
                            </div>&ensp;

                            <form className="d-flex mt-3 " >
                                <input className="form-control f1 " type="search" placeholder="Search" aria-label="Search" ></input>
                                <button className="btn btn-outline-success" type="submit"><FaMagnifyingGlass /></button>
                            </form>
                        </div>
                    </div>
                </nav>
            
        </>
    )
}

export default Navbar