import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import video1 from '../../Assetss/home/creamy cuddle - Made with Clipchamp_1709121840876.mp4'
import card1 from '../../Assetss/home/IMG-20240224-WA0015.jpg'

import { IoIosMailOpen } from "react-icons/io";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";

import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import logo from '../../Assetss/home/WhatsApp Image 2024-02-18 at 23.59.11_195cb8b3.jpg'
import logoend from '../../Assetss/home/camel.jpg'

const Contactus = () => {

    const [showmessage, setshowmessage] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setshowmessage((prev) => !prev);
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])
    return (
        <>
            <div>

                <div className="row">
                    <div className="col">
                        <div className="bg-primary p-3">
                            <h3 className="font-weight-bold text-white text-center">
                                <i>* <u>Free Shipping on Orders Above Rs. 499/-</u> *</i>
                            </h3>
                        </div>
                    </div>
                </div>

                <Navbar />
                <div>

                    <div className="embed-responsive embed-responsive-16by9" >
                        <video className="embed-responsive-item" controls muted loop autoPlay>
                            <source src={video1} type="video/mp4" />
                        </video>
                    </div><br />

                    <div className='fontfamily'>
                        {showmessage && (
                            <h5 className="card-title" style={{ fontSize: '40px' }}><i><b>Welcome to Creamy Cuddles World !!!!!!</b></i></h5>
                        )}
                    </div><br />

                    <div className='d-flex ms-5'>
                        <div className='row ms-5'  >
                            <div class="col-md-3  offset-md-1" >
                                <img src={card1} class="img-fluid rounded-start" alt="..." style={{ maxHeight: '400px', width: '100%' }} />
                            </div>
                            <div class=" col-md-5 mt-5 fontfamily " >

                                <div class="card text-start " style={{ backgroundColor: 'aliceblue' }}>
                                    <div class="card-body" >
                                        <h5 class="card-title " style={{ fontSize: '40px' }}><i><><b>Contact Us</b></></i></h5><br />
                                        <p class="card-text fontfamily " style={{ fontSize: '25px' }}>
                                            Listening to you is an important part of what We do, so if you want to talk, we'r all ears and we truly mean it. If you have any thoughts or complaints, questions or feedback , we'd love to talk !
                                        </p>
                                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div><br /><br />

                    <div className='d-flex row'>
                        <div class="col-md-4   offset-md-1" >
                            <form >
                                <div className='card ' style={{ padding: '20px' }}>

                                    <h5 class="card-title fontfamily" style={{ fontSize: '40px' }}><i><><b>Write to us</b></></i></h5><br />

                                    <div className='form-group'>
                                        <label htmlFor='fname' className=''>First Name</label>
                                        <input id='fname' type='text' className='form-control' />
                                    </div><br />
                                    <div className='form-group'>
                                        <label htmlFor='lname' className=''>Last Name</label>
                                        <input id='lname' type='text' className='form-control' />
                                    </div><br />
                                    <div className='form-group'>
                                        <label htmlFor='email' className=''>Email</label>
                                        <input id='email' type='email' className='form-control' />
                                    </div><br />
                                    <div className='form-group'>
                                        <label htmlFor='add' className=''>Address</label>
                                        <textarea id='add' className='form-control' />
                                    </div><br />
                                    <div className='form-group'>
                                        <button className='btn btn-outline-secondary col-4' type='submit'>Submit</button>
                                        <button className='btn btn-outline-danger col-4 offset-md-1' type='reset'>Reset</button>
                                    </div>
                                </div>
                            </form>
                        </div><br /><br /><br /><br />

                        <div class="  col-md-6 mt-5" >
                            <div className='card' >
                                <h5 class="card-title mt-2" style={{ fontSize: '40px' }}>
                                    <i><><b>Get in touch</b></></i></h5>
                                <div className='p-5 mt-0'>
                                    <p class="card-text fontfamily text-start " style={{ fontSize: '20px' }}>
                                        <MdOutlineSpeakerNotes />&ensp;
                                        For Press, PR, media and other marketing inquiries, please email :
                                        <br />
                                        <a href=''>creamycuddles03@gmail.com</a>
                                    </p>
                                    <p class="card-text fontfamily text-start" style={{ fontSize: '20px' }}>
                                        <IoIosMailOpen />&ensp;
                                            For Product related queries & complaints, email us at:
                                        <br />
                                        <a href=''>creamycuddles03@gmail.com</a>
                                    </p>
                                    <p class="card-text fontfamily text-start" style={{ fontSize: '20px' }}>
                                        <IoIosContacts />&ensp;
                                            Contact Us :
                                        <br />
                                        <a href=''>+91 9172475608</a>
                                    </p>

                                    <p class="card-text fontfamily text-start" style={{ fontSize: '20px' }}>
                                        <FaMapLocationDot />&ensp;
                                        Corporate office :
                                        <br />
                                        <a href=''>Pimpari, Pune, Maharashtra.</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br /><hr /><br />



                    <div className="">
                        <div className="row d-flex hh13">
                            <div className="col-12 mt-3">
                                <div className="row d-flex">
                                    <div className="col-12 col-md-4 text-center">
                                        <img src={logoend} alt="logo" height="80px" />
                                    </div>
                                    <div className="col-12  col-md-7">
                                        <div className="font-weight-bold  text-start" style={{ textDecoration: 'none', fontSize: '22px', color: 'black' }}>
                                            <b>CREAMY CUDDLE MISSION -</b>
                                            <br />
                                            <p style={{ fontSize: '20px' }} className='fontf'> At Creamy Cuddle, our mission is to revolutionize the skincare industry through our commitment to meticulously crafted camel soap that prioritize safety, purity, and the well-being of our loved ones.</p>
                                        </div>
                                    </div>
                                </div><hr />

                                <div className="row mt-4 ms-5">
                                    <div className="col-12 col-md-3">
                                        <div className="font-weight-bold" style={{ textAlign: 'start', fontSize: '20px' }}>
                                            <h4><b>Company</b></h4>
                                            <span>
                                                <a href="/home" className="d-block">Home</a>
                                                <a href="/aboutus" className="d-block">About Us</a>
                                                <a href="/" className="d-block">Our Blog</a>
                                                <a href="/" className="d-block">Portfolio</a>
                                                <a href="/contactus" className="d-block">Contact Us</a><br />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div className="font-weight-bold" style={{ textAlign: 'start', fontSize: '20px' }}>
                                            <h4><b>Services</b></h4>
                                            <span>
                                                <a href="" className="d-block">Software Development</a>
                                                <a href="" className="d-block">Web Development</a><br />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div className="font-weight-bold" style={{ textAlign: 'start', fontSize: '20px' }}>
                                            <h4><b>CONTACT US-</b></h4>
                                            <span className=''>
                                                <a href="" className="d-block"><b>Our details-</b> Creamy Cuddle</a>
                                                <a href="" className="d-block"><b>Address-</b> Pimpari, Pune, Maharashtra.</a>
                                                <a href="" className="d-block"><b>Contact No. -</b> +91 9172475608</a>
                                                <a href="" className="d-block"><b>Email- </b>creamycuddles03@gmail.com</a>
                                                <a href="" className="d-block"><b>Social media presence Icons – </b>Instagram, Facebook, WhatsApp, LinkedIn</a>
                                                <a href="" className="d-block"><b>Get a free quote/ Enquiry : phone no. -</b> +91 9172475608</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

                    <div className='fontfamily' style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                        <div className='col-11 text-start' style={{ textDecoration: 'none',  }}>
                            <h4><i><b> Creamy Cuddles Online Shop for Baby & Kids Products :  </b></i></h4>
                        </div>
                        <div className='text-start' style={{ paddingLeft: '2%', fontSize: '18px', fontFamily:'serif' }} >
                            <p >
                                Discover world-class baby care products online at creamycuddles03@gmail.com. At Creamy Cuddles, we work hard to create superior-quality baby & kids products that make your life as a parent a whole lot easier and stress-free! To do this, we turn to YOU – the actual experts in baby care! All our baby products are inspired by Moms and developed by experts.
                            </p>
                            <p>
                                On our baby products online store, you’ll find a range of safe, effective and dermatologically-tested baby skincare products, along with a beautiful collection of baby & kids clothing designed from gentle, organic fabrics.
                            </p>
                            <p>
                                Whether you’re a new parent looking for high-quality, safe newborn baby products online or a parent looking to add sophisticated, simple and modern clothing to your baby’s wardrobe, or even someone looking for great gift options for newborns and kids, you’ve come to the right place. Explore the Creamy Cuddles Baby products online shop for safe, superior, and timeless products for babies and kids.
                            </p>
                        </div><br />

                        <div className='col-11 text-start' style={{ textDecoration: 'none', fontSize: '22px' }}>
                           <h4><i> <b> Safe & Hypoallergenic Newborn Baby Products Online:  </b></i></h4>
                        </div>
                        <div className='text-start ' style={{ paddingLeft: '2%', fontSize: '18px' , fontFamily:'serif'}} >
                            <p>
                                A newborn baby’s skin is extremely delicate and sensitive and thus it’s important to use the best babycare products for their skin. At Creamy Cuddles, all our baby bath & skincare products are designed with the utmost care from safe & effective ingredients and undergo stringent testing by world-class experts in Europe. All Creamy Cuddles skincare products are Hypoallergenic, tested in Europe, enhanced with natural ingredients and free from parabens and other harmful chemicals making them completely safe for babies. The Creamy Cuddles range of baby skincare products currently includes Baby Wipes, Baby Bar Soaps, Tear-free Baby Wash and Tear-free Baby Shampoo, Baby Cream, Baby Moisturizing Lotion, Baby Massage Oil, Baby Powder, Baby Diaper Rash Cream, with lots more amazing and safe baby skincare care products still on their way.
                            </p>
                            <p>
                                You can rest easy knowing that the products you’re using on your baby’s delicate skin are made with love, to care for and nourish your baby’s skin from head to toe. From bath-time to daily massages and everything in between, our safe newborn baby care products are designed to make sure that every little moment with your little one is filled with fun & joy.
                            </p>
                            {/* <p>
                                Whether you’re a new parent looking for high-quality, safe newborn baby products online or a parent looking to add sophisticated, simple and modern clothing to your baby’s wardrobe, or even someone looking for great gift options for newborns and kids, you’ve come to the right place. Explore the Softsens Baby products online shop for safe, superior, and timeless products for babies and kids.
                            </p> */}
                        </div><br />



                    </div>

                </div>
            </div>
        </>
    )
}

export default Contactus