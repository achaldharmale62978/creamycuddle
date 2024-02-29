import React from 'react'
import Navbar from '../Navbar/Navbar'

import img1 from '../../Assetss/home/IMG-20240224-WA0024.jpg'
import '../cssfolder/home.css'
import vedio1 from '../../Assetss/home/WhatsApp Video 2024-02-24 at 12.32.50_3e2ead70.mp4'

import card1 from '../../Assetss/home/Orange and Green Organic Illustration Candle Product Label (7).jpg'
import card2 from '../../Assetss/home/Orange and Green Organic Illustration Candle Product Label (6).jpg'
import card3 from '../../Assetss/home/Orange and Green Organic Illustration Candle Product Label (5).jpg'
import card4 from '../../Assetss/home/Orange and Green Organic Illustration Candle Product Label (4).jpg'

import card5 from '../../Assetss/home/LOVE-SPELK-012.jpeg-768x424 (1).jpg'
import card6 from '../../Assetss/home/PXL_20240220_112445840.PORTRAIT-1024x576.jpg'
import card7 from '../../Assetss/home/PXL_20240220_114055289.PORTRAIT-1024x576.jpg'
import card8 from '../../Assetss/home/PXL_20240220_114758747.PORTRAIT-1-1024x576.jpg'

import card11 from '../../Assetss/home/IMG-20240224-WA0022.jpg'
import card21 from '../../Assetss/home/IMG-20240224-WA0019.jpg'
import card31 from '../../Assetss/home/IMG-20240224-WA0017.jpg'

import logo from '../../Assetss/home/WhatsApp Image 2024-02-18 at 23.59.12_4d6c9a38.jpg'



import { GiCamel } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { GiPayMoney } from "react-icons/gi";


const Home = () => {
    return (
        <>

            <div>
                <Navbar />
                <div>

                    <div className=' proj1'>
                        {/* <video muted autoPlay loop className='vedio'>
                            <source src={vedio1} type='vedio/mp4' />
                        </video> */}
                        <div className='img1'></div><br />
                        <div>
                            <h3 className='fontfamily' style={{ fontWeight: 'bold' }}> <i>* OUR PRODUCTS * </i></h3>
                        </div>

                        <div>
                            <p className='a3 fontfamily'>
                                •  Camel milk contains high levels of Vitamins A, C, D & E, harnessing their antioxidant properties for skin health. Vitamin C promotes collagen, Vitamin D fights acne & rashes, and other elements like Potassium, Calcium, Selenium, and Zinc contribute to various skin benefits. With a water content of 86-88%, lowest lactose level, and essential oils for aromatherapy, it is ideal for conditions like Eczema & psoriasis.
                                <br /><br />
                                •  Camel milk nourishes and moisturize delicate skin while soothing irritation with its anti-inflammatory properties. It's less allergenic than cow's milk, making it suitable for sensitive skin, and contains lysozyme, which helps prevent bacterial infections. Regular use maintains skin pH, promoting overall skin health and reducing the risk of issues like acne or rashes.

                            </p>
                        </div>
                        <div className='proj2 c1 c2row g-4 inline ' style={{ display: 'flex' }}>&ensp;&ensp;&ensp;&ensp;

                            <div class="card cc4" style={{ width: " 18rem" }}>
                                <img src={card1} class="card-img-top ci" alt="..." />
                            </div>&ensp;&ensp;&ensp;&ensp;

                            <div class="card cc3" style={{ width: " 18rem" }}>
                                <img src={card2} class="card-img-top ci" alt="..." />
                            </div>&ensp;&ensp;&ensp;&ensp;

                            <div class="card cc2" style={{ width: " 18rem" }}>
                                <img src={card3} class="card-img-top ci" alt="..." />
                            </div>&ensp;&ensp;&ensp;&ensp;

                            <div class="card cc1" style={{ width: " 18rem" }}>
                                <img src={card4} class="card-img-top ci" alt="..." />
                            </div>
                        </div><br /><br />

                        <div>
                            <h3 className='fontfamily' style={{ backgroundColor: 'gray', fontWeight: 'bold', padding: '40px' }}><i>Get 25% off on your First Purchase ! </i></h3>
                        </div><br /><br /><br />

                        <div>

                            <div className='proj2 c1 c2row g-4 inline ' style={{ display: 'flex' }}>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;

                                <div class="card ccc4" style={{ width: " 16rem" }}>

                                    <div class="card-body">
                                        <h5 class="card-title">Citrus Squeeze</h5>
                                        <p class="card-text">Citrus extracts in soap offer benefits such as natural fragrance, antioxidant properties, skin brightening, mild exfoliation, and vitamin C content.</p>
                                        <img src={card8} class="card-img-top " alt="..." />
                                        <a href="#" class="">Read More....</a>
                                    </div>

                                </div>&ensp;&ensp;&ensp;&ensp;

                                <div class="card ccc3" style={{ width: " 16rem" }}>

                                    <div class="card-body">
                                        <h5 class="card-title">Melon Marvel</h5>
                                        <p class="card-text">Watermelon extract in soap provides hydration, vitamins, and antioxidants for the skin. It also offers anti-inflammatory properties, potential skin brightening, and mild exfoliation.gy</p>
                                        <img src={card7} class="card-img-top " alt="..." />
                                        <a href="#" class="">Read More....</a>
                                    </div>

                                </div>&ensp;&ensp;&ensp;&ensp;

                                <div class="card ccc2" style={{ width: " 16rem" }}>

                                    <div class="card-body">
                                        <h5 class="card-title">Fresh Feel</h5>
                                        <p class="card-text">Green apple extract in soap provides a refreshing fragrance, vitamins, antioxidants, skin toning, mild exfoliation, and hydration.</p>
                                        <img src={card6} class="card-img-top " alt="..." />
                                        <a href="#" class="">Read More....</a>
                                    </div>

                                </div>&ensp;&ensp;&ensp;&ensp;

                                <div class="card ccc1" style={{ width: " 16rem" }}>

                                    <div class="card-body">
                                        <h5 class="card-title">Love Spell</h5>
                                        <p class="card-text">Evening primrose extract in soap offers moisturizing properties, anti-inflammatory benefits, skin conditioning, richness in gamma-linolenic acid (GLA), and potential relief for skin conditions like eczema and dermatitis.</p>
                                        <img src={card5} class="card-img-top " alt="..." />
                                        <a href="#" class="">Read More....</a>
                                    </div>

                                </div>
                            </div>
                            <br />
                            <div>
                                <div>
                                    <h3 className='fontfamily' style={{ fontWeight: 'bold' }}> <i>* 	 * </i></h3>
                                </div>
                                <p className='a3 fontfaily'>
                                    •  At Creamy Cuddle, our mission is to revolutionize the skincare industry through our commitment to meticulously crafted camel soap that prioritize safety, purity, and the well-being of our loved ones.
                                    <br /><br />
                                    •  We dedicate ourselves to formulating products with the highest quality, using natural and nourishing ingredients that are not only gentle on the skin but also reflect the cultural richness of India.
                                    <br /><br />
                                    •  We aim to empower parents with the knowledge and confidence to make informed choices about their skincare.

                                </p>
                            </div>
                        </div><br /><br />

                        <div className='proj3 c1 c2row g-4 inline ' style={{ display: 'flex' }} >

                            &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                            <div className='bord card text-center  text-white bg-dark mb-3  '>
                                <div class="card text-center  text-white bg-dark mb-3  bord " style={{ width: "18rem" }}>
                                    <div class="card-body ">
                                        <h5 class="card-title"> <span className='icons1'><GiCamel /></span>&ensp;Made With </h5>
                                        <p class="card-text">Camel Milk</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>&ensp;&ensp;&ensp;&ensp;

                            <div class="card text-center text-white bg-dark mb-3 bord" style={{ width: "18rem" }}>
                                <div class="card text-center text-white bg-dark mb-3 bord" style={{ width: "18rem" }}>
                                    <div class="card-body ">
                                        <h5 class="card-title"> <span className='icons1'><GrCertificate /></span> &ensp;Certified Organic </h5>
                                        <p class="card-text">100% Guarantee</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>&ensp;&ensp;&ensp;&ensp;

                            <div class="card text-center text-white bg-dark mb-3 bord" style={{ width: "18rem" }}>
                                <div class="card text-center text-white bg-dark mb-3 bord" style={{ width: "18rem" }}>
                                    <div class="card-body ">
                                        <h5 class="card-title"><span className='icons1'><GiTakeMyMoney /></span>&ensp;Huge Savings</h5>
                                        <p class="card-text">At Lowest Price</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                            &ensp;&ensp;&ensp;&ensp;
                            <div class="card text-center text-white bg-dark mb-3 bord" style={{ width: "18rem" }}>
                                <div class="card text-center text-white bg-dark mb-3 bord" style={{ width: "18rem" }}>
                                    <div class="card-body ">
                                        <h5 class="card-title"><span className='icons1'><GiPayMoney /></span>&ensp;Easy Returns</h5>
                                        <p class="card-text">No Questions Ask</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>&ensp;&ensp;&ensp;&ensp;

                        </div><br /><br />

                        <div>
                            <h3 className='fontfamily' style={{ fontWeight: 'bolder' }}> <i>*   &ensp; <u>99% Safe for Children's Skin </u> &ensp;  * </i></h3>
                        </div><br /><br /><br />

                        <div className='proj2 c1 c2row g-4 inline ' style={{ display: 'flex' }}>

                            <div class="card  offset-1" style={{ width: " 18rem", height: '200px' }}>
                                <img src={card11} class="card-img-top " alt="..." />
                            </div>

                            <div class="card  offset-1" style={{ width: " 18rem" }}>
                                <img src={card21} class="card-img-top " alt="..." />
                            </div>

                            <div class="card  offset-1" style={{ width: " 18rem", height: '200px' }}>
                                <img src={card31} class="card-img-top " alt="..." />
                            </div>&ensp;&ensp;&ensp;&ensp;

                            {/* <div class="card cc1" style={{ width: " 18rem" }}>
                                <img src={card4} class="card-img-top ci" alt="..." />
                            </div> */}
                        </div><br /><br />

                        <div>
                            <h6 className='a2 a3'><i><b><u>•	INGREDIENTS -</u></b></i></h6>
                        </div><br />
                        <div className='a3' style={{ display: 'flex' }}>
                            <div>
                                <img src='https://d2j6dbq0eux0bg.cloudfront.net/images/44048789/1979774729.jpg' height='400' width='400' />
                            </div>
                            <div className='col-5 offset-2 text-center mt-5'>
                                <p className='a2'><i><b>1.	Sweet Almond Oil:</b></i></p>
                                <p className='a3 '>
                                    Deeply hydrates delicate skin, soothing eczema and dryness.
                                </p>
                                <p className='a3 '>
                                    Non-irritating, suitable for sensitive skin, and forms a protective barrier.
                                </p>
                                <p className='a3 '>
                                    Essential for maintaining overall skin health and softness.
                                </p>
                            </div>

                        </div>

                        <div className='a3' style={{ display: 'flex' }}>
                            <div className='mt-5  text-center '>
                                <p className='a2'><i><b>2.	Jojoba Oil:</b></i></p>
                                <p className='a3 '>
                                    Acts as a superb moisturizer, mirroring the skin's natural oils.
                                </p>
                                <p className='a3 '>
                                    Anti-inflammatory properties soothe irritations like eczema.
                                </p>
                                <p className='a3 '>
                                    Non-greasy, easily absorbed, providing gentle cleansing and moisture preservation.
                                </p>
                            </div>
                            <div className='col-4  offset-2'>
                                <img src='https://hips.hearstapps.com/hmg-prod/images/jojoba-oil-in-the-glass-bottle-royalty-free-image-1574089162.jpg' height='400' width='400' />
                            </div>

                        </div><br /><br />

                        <div className='a3 fontfamily'>
                            <div className=''>
                                <h6 className='a2'><i><b><u>•	VARIANTS- </u></b></i></h6>
                            </div><br />
                            <div className='a2 a3'><i><b>1.	Citrus squeeze:</b></i></div>
                            <p className='a3 '>
                                Citrus extracts in soap offer benefits such as natural fragrance, antioxidant properties, skin brightening, mild exfoliation, and vitamin C content.
                            </p>
                            <p className='a2 a3'><i><b>2.	Melon Marvel:</b></i></p>
                            <p className='a3 '>
                                Watermelon extract in soap provides hydration, vitamins, and antioxidants for the skin. It also offers anti-inflammatory properties, potential skin brightening, and mild exfoliation.gy
                            </p>
                            <p className='a2 a3'><i><b>3.	Fresh feel:</b></i></p>
                            <p className='a3 '>
                                Green apple extract in soap provides a refreshing fragrance, vitamins, antioxidants, skin toning, mild exfoliation, and hydration.
                            </p>
                            <p className='a2 a3'><i><b>4.	Love spell:</b></i></p>
                            <p className='a3 '>
                                Evening primrose extract in soap offers moisturizing properties, anti-inflammatory benefits, skin conditioning, richness in gamma-linolenic acid (GLA), and potential relief for skin conditions like eczema and dermatitis.


                            </p>
                        </div><br /><br />

                        <div className='content'>
                            <div className='hh13 content fontfamily' style={{ display: 'flex', fontSize: '20px' }}>
                                <div className='col-4 ' style={{ textAlign: 'left', paddingLeft: '3%' }} >
                                    <img src={logo} height='150' width='250' style={{ paddingLeft: '2%', paddingTop: '2%' }} /><br /><br />
                                    <div className='col-11 ' style={{ textDecoration: 'none', fontSize: '22px', color: 'black' }}>
                                        <b> CREAMY CUDDLE MISSION -  </b><br />
                                    </div>
                                    <div className='' style={{ paddingLeft: '2%', color: 'black', fontSize: '18px' }} >

                                        At Creamy Cuddle, our mission is to revolutionize the skincare industry through our commitment to meticulously crafted camel soap that prioritize safety, purity, and the well-being of our loved ones.
                                    </div>
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
                                            {/* <a href='' className='atag'>Contact Us</a> <br />
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
                                    </div>
                                </div>

                            </div>
                        </div><br /><br />

                    </div>
                </div>
            </div>
        </>
    )
}
export default Home