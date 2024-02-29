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

                <div style={{ backgroundColor: 'slateblue', padding: '3px' }}>
                    <h3 className='fontfamily' style={{ fontWeight: 'bolder' }}> <i>*   &ensp; <u>Free Shipping on Order Above Rs.499/-  </u> &ensp;  * </i></h3>
                </div>

                <Navbar />
                <div>

                    <div>
                        <video controls muted loop autoPlay width="100%" height="auto" >
                            <source src={video1} type="video/mp4" />
                        </video>
                    </div><br />

                    <div className='fontfamily'>
                        {showmessage && (
                            <h5 className="card-title" style={{ fontSize: '40px' }}><i><b>Welcome to Creamy Cuddles World !!!!!!</b></i></h5>
                        )}
                    </div><br />

                    <div style={{ display: 'flex' }}>

                        <div style={{ backgroundColor: 'aliceblue' }}>
                            <div class="col-md-3 offset-1" style={{ height: '100px' }}>
                                <img src={card1} class="img-fluid rounded-start" alt="..." height='200px' />
                            </div>
                            <div class=" mb-3 mt-5 fontfamily col-5 offset-5" style={{ maxwidth: "540px", height: '300px' }}>
                                <div class="row g-0 offset-2">
                                    <div class="col-md- text-start">
                                        <div class="card-body" >
                                            <h5 class="card-title " style={{ fontSize: '40px' }}><i><><b>Contact Us</b></></i></h5><br />
                                            <p class="card-text fontfamily col-12" style={{ fontSize: '25px' }}>Listening to you is an important part of what We do, so if you want to talk, we'r all ears and we truly mean it. If you have any thoughts or complaints, questions or feedback , we'd love to talk !</p>
                                            {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* <div style={{ backgroundColor: '' }}> */}
                    <div class="col-md-3   offset-1" style={{ height: '100px' }}>

                        <form >
                            <div className='mt-5 col-12 card ' style={{ padding: '20px' }}>

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
                                    <button className='btn btn-outline-danger col-4 offset-1' type='reset'>Reset</button>
                                </div>
                            </div>
                        </form>
                    </div><br /><br /><br /><br />
                    {/* <div class=" mb-3 col-12 fontfamily col-5 offset-3" style={{ maxwidth: "540px", height: '300px' }}> */}

                    {/* <div class="col-md-6 offset-2 text-start"> */}
                    <div class=" mt-0 offset-5 g-0 text-start" >
                        <h5 class="card-title " style={{ fontSize: '40px' }}><i><><b>Get in touch</b></></i></h5><br />
                        <p class="card-text fontfamily col-12" style={{ fontSize: '20px' }}>
                            <MdOutlineSpeakerNotes />&ensp;&ensp;&ensp;
                            For Press, PR, media and other marketing inquiries, please email
                            <br />
                            <a href=''>creamycuddles03@gmail.com</a>
                        </p>
                        <p class="card-text fontfamily col-12" style={{ fontSize: '20px' }}>
                            <IoIosMailOpen />&ensp;&ensp;&ensp;
                            For Product related queries & complaints, email us at:
                            <br />
                            <a href=''>creamycuddles03@gmail.com</a>
                        </p>
                        <p class="card-text fontfamily col-12" style={{ fontSize: '20px' }}>
                            <IoIosContacts />&ensp;&ensp;&ensp;
                            Contact Us :
                            <br />
                            <a href=''>+91 9172475608</a>
                        </p>

                        <p class="card-text fontfamily col-12" style={{ fontSize: '20px' }}>
                            <FaMapLocationDot />&ensp;&ensp;&ensp;
                            Corporate office :
                            <br />
                            <a href=''>Pimpari, Pune, Maharashtra.</a>
                        </p>
                        {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                    {/* </div> */}


                    <br /><br /><br /><br />
                    {/* </div> */}
                    {/* </div> */}
                    <br /><br /><hr /><br />

                    <div className=''>
                        <div className='hh13 content  fontfamily' style={{ display: 'flex', fontSize: '20px' }}>
                            <div className='col-4 ' style={{ textAlign: 'left', paddingLeft: '3%' }} >
                                <img src={logo} height='150' width='300' style={{ paddingLeft: '2%', paddingTop: '2%' }} /><br /><br />
                                <div className='col-11 ' style={{ textDecoration: 'none', fontSize: '22px', color: 'black' }}>
                                    <b> CREAMY CUDDLE MISSION -  </b><br />
                                </div>
                                <div className='' style={{ paddingLeft: '2%', color: 'black', fontSize: '18px' }} >

                                    At Creamy Cuddle, our mission is to revolutionize the skincare industry through our commitment to meticulously crafted camel soap that prioritize safety, purity, and the well-being of our loved ones.
                                </div><br />

                            </div>

                            <div className='offset-1' style={{ display: 'flex' }}>

                                <div>
                                    <div className='col-3' style={{ textDecoration: 'none', fontSize: '22px', color: 'black' }}>
                                        <b> Company</b>
                                    </div>
                                    <div className='col ' style={{ textAlign: 'left', textDecoration: 'none', fontSize: '18px' }}>
                                        <a href='/home' className='atag'>Home</a> <br />
                                        <a href='/aboutus' className='atag'>About Us</a> <br />
                                        <a href='/' className='atag'>Our Blog</a> <br />
                                        <a href='' className='atag'>Portfolio</a> <br />
                                        <a href='/contactus' className='atag'>Contact Us</a> <br />
                                        {/* <a href='' className='atag'>Request A Quote</a> <br />
                                        <a href='' className='atag'>Contact Us</a> <br />
                                        <a href='' className='atag'>Privacy Policy</a> <br />
                                        <a href='' className='atag'>Terms & Conditions</a> <br /> */}
                                    </div>
                                </div>

                                <div style={{ marginLeft: '50px' }}>
                                    <div className='col-3' style={{ textDecoration: 'none', fontSize: '22px', color: 'black' }}>
                                        <b>  Services</b><br />
                                    </div>
                                    <div className='col ' style={{ textAlign: 'left', textDecoration: 'none', fontSize: '18px' }}>
                                        <a href='' className='atag'>Software Development</a> <br />
                                        <a href='' className='atag'>Web Development</a> <br />
                                        {/* <a href='' className='atag'>Android App Development</a> <br />
                                        <a href='' className='atag'> iPhone App Development</a> <br />
                                        <a href='' className='atag'>Maintenance & Support</a> <br />
                                        <a href='' className='atag'>SAAS & Enterprise App </a> <br />
                                        <a href='' className='atag'> Development</a> <br /> */}
                                    </div>
                                </div>

                                <div style={{ marginLeft: '50px' }}>
                                    <div className='col-5' style={{ textDecoration: 'none', fontSize: '22px', color: 'black' }}>
                                        <b>  CONTACT US-</b>
                                    </div>
                                    <div className='col ' style={{ textAlign: 'left', textDecoration: 'none', fontSize: '18px' }}>
                                        <a href='' className='atag'><p><b>Our details-</b> Creamy Cuddle</p></a>
                                        <a href='' className='atag'> Adress- Pimpari, Pune, Maharashtra.</a> <br />
                                        <a href='' className='atag'> Contact No. - +91 9172475608</a> <br />
                                        <a href='' className='atag'>Email- creamycuddles03@gmail.com</a> <br />
                                        <a href='' className='atag'>Social media presence Icons – Instagram, Facebook, WhatsApp, LinkedIn</a> <br />
                                        <a href='' className='atag'> Get a free quote/ Enquiry- phone no. +91 9172475608</a> <br />

                                    </div>
                                    <div className='col ' style={{ fontSize: '28px', display: 'flex', marginLeft: '' }}>
                                        <a href='' className='atag'><FaInstagramSquare /></a> <br />&ensp;
                                        <a href='' className='atag'><FaWhatsapp /></a> <br />&ensp;
                                        <a href='' className='atag'><FaFacebook /></a> <br />&ensp;
                                        <a href='' className='atag'><FaLinkedin /></a> <br />
                                        {/* <a href='' className='atag'>Request A Quote</a> <br />
                                        <a href='' className='atag'>Contact Us</a> <br />
                                        <a href='' className='atag'>Privacy Policy</a> <br />
                                        <a href='' className='atag'>Terms & Conditions</a> <br /> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div><br />

                    <div className='fontfamily' style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                        <div className='col-11 text-start' style={{ textDecoration: 'none', fontSize: '22px' }}>
                            <b> Creamy Cuddles Online Shop for Baby & Kids Products :  </b><br />
                        </div>
                        <div className='text-start' style={{ paddingLeft: '2%', fontSize: '18px' }} >
                            <p>
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
                            <b> Safe & Hypoallergenic Newborn Baby Products Online:  </b><br />
                        </div>
                        <div className='text-start' style={{ paddingLeft: '2%', fontSize: '18px' }} >
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