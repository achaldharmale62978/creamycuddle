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
import logoend from '../../Assetss/home/camel.jpg'



import { GiCamel } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { GiPayMoney } from "react-icons/gi";


const Home = () => {
    return (
        <>

            <div >
                <Navbar />
                <div>

                    <div className=' proj1 amain'>
                        {/* <video muted autoPlay loop className='vedio'>
                            <source src={vedio1} type='vedio/mp4' />
                        </video> */}
                        <div className="row">
                            <div className="col-12 img1"></div>
                        </div>
                        <div className='mt-5'>
                            <h3 className='fontfamily text-center' style={{ fontWeight: 'bold' }}> <i>* OUR PRODUCTS * </i></h3>
                        </div>

                        <div>
                            <p className='a3 fontfamily fontsize'>
                                <ul>
                                    <li>Camel milk contains high levels of Vitamins A, C, D & E, harnessing their antioxidant properties for skin health. Vitamin C promotes collagen, Vitamin D fights acne & rashes, and other elements like Potassium, Calcium, Selenium, and Zinc contribute to various skin benefits. With a water content of 86-88%, lowest lactose level, and essential oils for aromatherapy, it is ideal for conditions like Eczema & psoriasis.</li>
                                    <li>Camel milk nourishes and moisturize delicate skin while soothing irritation with its anti-inflammatory properties. It's less allergenic than cow's milk, making it suitable for sensitive skin, and contains lysozyme, which helps prevent bacterial infections. Regular use maintains skin pH, promoting overall skin health and reducing the risk of issues like acne or rashes.</li>
                                </ul>
                            </p>
                        </div>
                        <div className='proj2 c1 c2row g-4 inline ' style={{ display: 'flex' }}>&ensp;&ensp;&ensp;&ensp;

                            <div class="card cc4 " style={{ width: " 18rem" }}>
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
                            <h2 className='fontfamily text-center' style={{ fontWeight: 'bold', }}>--  <i>Get 25% off on your First Purchase ! </i>  --</h2>
                        </div><br /><br /><br />

                        <div className='proj2  '>
                            <div className='row g-4 d-flex fontsize '>
                                <div className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex ' >
                                    <div class="card  h-100"  >
                                        <img src={card8} class="card-img-top " alt="Citrus Squeeze" />
                                        <div class="card-body">
                                            <h4 class="card-title b ">Citrus Squeeze</h4>
                                            <p class="card-text t1">Citrus extracts in soap offer benefits such as natural fragrance, antioxidant properties, skin brightening, mild exfoliation, and vitamin C content.</p>
                                            <a href="#" class="btn btn-primary">Read More....</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" >
                                    <div className='card h-100'>
                                        <img src={card7} class="card-img-top " alt="Melon Marvel" />
                                        <div class="card-body">
                                            <h4 class="card-title b">Melon Marvel</h4>
                                            <p class="card-text t1">Watermelon extract in soap provides hydration, vitamins, and antioxidants for the skin. It also offers anti-inflammatory properties, potential skin brightening, and mild exfoliation.gy</p>
                                            <a href="#" class="btn btn-primary">Read More....</a>
                                        </div>
                                    </div>
                                </div>

                                <div class=" col-sm-6 col-md-4 col-lg-3 d-flex" >
                                    <div className='card h-100'>
                                        <img src={card6} class="card-img-top " alt="Fresh Feel" />
                                        <div class="card-body">
                                            <h4 class="card-title b">Fresh Feel</h4>
                                            <p class="card-text t1">Green apple extract in soap provides a refreshing fragrance, vitamins, antioxidants, skin toning, mild exfoliation, and hydration.</p>
                                            <a href="#" class="btn btn-primary">Read More....</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" >
                                    <div className='card h-100'>
                                        <img src={card5} class="card-img-top " alt="Love Spell" />
                                        <div class="card-body">
                                            <h4 class="card-title b">Love Spell</h4>
                                            <p class="card-text t1">Evening primrose extract in soap offers moisturizing properties, anti-inflammatory benefits, skin conditioning, richness in gamma-linolenic acid (GLA), and potential relief for skin conditions like eczema and dermatitis.</p>
                                            <a href="#" class="btn btn-primary">Read More....</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className='text-center'>

                                <h3 className='fontfamily' style={{ fontWeight: 'bold' }}> <i>* * * </i></h3>

                                <p className='a3 fontfaily fontsize'>
                                    <ul>
                                        <li> At Creamy Cuddle, our mission is to revolutionize the skincare industry through our commitment to meticulously crafted camel soap that prioritize safety, purity, and the well-being of our loved ones.</li>
                                        <li> We dedicate ourselves to formulating products with the highest quality, using natural and nourishing ingredients that are not only gentle on the skin but also reflect the cultural richness of India.</li>
                                        <li> We aim to empower parents with the knowledge and confidence to make informed choices about their skincare.</li>
                                    </ul>
                                </p>
                            </div>
                        </div><br /><br />

                        <div className='proj3 row g-4  ' >
                            <div className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex '>
                                <div class="card text-center  text-white bg-dark mb-3  bord w-100" >
                                    <div class="card-body ">
                                        <h5 class="card-title"> <span className='icons1'><GiCamel /></span>&ensp;Made With </h5>
                                        <p class="card-text">Camel Milk</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" >
                                <div class="card text-center text-white bg-dark mb-3 bord w-100" >
                                    <div class="card-body ">
                                        <h5 class="card-title"> <span className='icons1'><GrCertificate /></span> &ensp;Certified Organic </h5>
                                        <p class="card-text">100% Guarantee</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                                <div class="card text-center text-white bg-dark mb-3 bord w-100" >
                                    <div class="card-body ">
                                        <h5 class="card-title"><span className='icons1'><GiTakeMyMoney /></span>&ensp;Huge Savings</h5>
                                        <p class="card-text">At Lowest Price</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
                                <div class="card text-center text-white bg-dark mb-3 bord w-100" >
                                    <div class="card-body ">
                                        <h5 class="card-title"><span className='icons1'><GiPayMoney /></span>&ensp;Easy Returns</h5>
                                        <p class="card-text">No Questions Ask</p>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>

                        </div><br /><br />

                        <div style={{ textAlign: 'center' }}>
                            <h3 className='fontfamily' style={{ fontWeight: 'bolder' }}> <i>*   &ensp; <u>99% Safe for Children's Skin </u> &ensp;  * </i></h3>
                        </div><br /><br /><br />

                        <div className='proj2 row g-4 justify-content-center' >
                            <div className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center'>
                                <div class="card  " style={{ width: " 18rem", height: '200px' }}>
                                    <img src={card11} class="card-img-top " alt="..." />
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center'>
                                <div class="card  " style={{ width: " 18rem" }}>
                                    <img src={card21} class="card-img-top " alt="..." />
                                </div>
                            </div>
                            <div className='col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center'>
                                <div class="card  " style={{ width: " 18rem", height: '200px' }}>
                                    <img src={card31} class="card-img-top " alt="..." />
                                </div>
                            </div>

                            {/* <div class="card cc1" style={{ width: " 18rem" }}>
                                <img src={card4} class="card-img-top ci" alt="..." />
                            </div> */}
                        </div><br /><br />

                        <div className='porj4'>
                            <h4 className='a2 a3'><i><b><u><li>INGREDIENTS -</li> </u></b></i></h4>
                        </div><br />

                        <div className='row align-items-center' >
                            <div className='col-12 col-md-5 d-flex justify-content-center mb-3 mb-md-0'>
                                <img src='https://d2j6dbq0eux0bg.cloudfront.net/images/44048789/1979774729.jpg' className='img-fluid' alt='Sweet Almond oil' />
                            </div>
                            <div className='col-12 col-md-5 0ffset-md-2 text-center mt-5 mt-md-0'>
                                <h2 className='a2'><i><b>1.	Sweet Almond Oil:</b></i></h2>
                                <ul className='a3 fontsize'>
                                    <li>
                                        Deeply hydrates delicate skin, soothing eczema and dryness.
                                    </li>
                                    <li>
                                        Non-irritating, suitable for sensitive skin, and forms a protective barrier.
                                    </li>
                                    <li>
                                        Essential for maintaining overall skin health and softness.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='row align-items-center'>
                            <div className='col-12 col-md-5 offset-md-2 text-center mt-5 mt-md-0 '>
                                <h2 className='a2'><i><b>2.	Jojoba Oil:</b></i></h2>
                                <ul className='a3 fontsize'>
                                    <li>
                                        Acts as a superb moisturizer, mirroring the skin's natural oils.
                                    </li>
                                    <li>
                                        Anti-inflammatory properties soothe irritations like eczema.
                                    </li>
                                    <li>
                                        Non-greasy, easily absorbed, providing gentle cleansing and moisture preservation.
                                    </li>
                                </ul>
                            </div>
                            <div className='col-12 col-md-5 d-flex justify-content-center mb-3 mb-md-0'>
                                <img src='https://hips.hearstapps.com/hmg-prod/images/jojoba-oil-in-the-glass-bottle-royalty-free-image-1574089162.jpg' className='img-fluid' alt='Jojoba Oil' />
                            </div>

                        </div><br /><br />

                        <div className='a3 fontfamily'>
                            <div className=''>
                                <h6 className='a2'><i><b><u><li>VARIANTS - </li></u></b></i></h6>
                            </div><br />
                            <h3 className='a2 a3'><i><b>1.	Citrus squeeze:</b></i></h3>
                            <p className='a3 fontsize'>
                                Citrus extracts in soap offer benefits such as natural fragrance, antioxidant properties, skin brightening, mild exfoliation, and vitamin C content.
                            </p>
                            <h3 className='a2 a3'><i><b>2.	Melon Marvel:</b></i></h3>
                            <p className='a3 fontsize'>
                                Watermelon extract in soap provides hydration, vitamins, and antioxidants for the skin. It also offers anti-inflammatory properties, potential skin brightening, and mild exfoliation.gy
                            </p>
                            <h3 className='a2 a3'><i><b>3.	Fresh feel:</b></i></h3>
                            <p className='a3 fontsize'>
                                Green apple extract in soap provides a refreshing fragrance, vitamins, antioxidants, skin toning, mild exfoliation, and hydration.
                            </p>
                            <h3 className='a2 a3'><i><b>4.	Love spell:</b></i></h3>
                            <p className='a3 fontsize'>
                                Evening primrose extract in soap offers moisturizing properties, anti-inflammatory benefits, skin conditioning, richness in gamma-linolenic acid (GLA), and potential relief for skin conditions like eczema and dermatitis.


                            </p>
                        </div><br /><br />

                        <div className="">
                            <div className="row d-flex hh13">
                                <div className="col-12 mt-3">
                                    <div className="row d-flex">
                                        <div className="col-12 col-md-4 text-center">
                                            <img src={logoend} alt="logo" height="80px" />
                                        </div>
                                        <div className="col-12  col-md-7">
                                            <div className="font-weight-bold " style={{ textDecoration: 'none', fontSize: '22px', color: 'black' }}>
                                                <b>CREAMY CUDDLE MISSION -</b>
                                                <br />
                                                <p style={{fontSize:'20px'}} className='fontf'> At Creamy Cuddle, our mission is to revolutionize the skincare industry through our commitment to meticulously crafted camel soap that prioritize safety, purity, and the well-being of our loved ones.</p>
                                            </div>
                                        </div>
                                    </div><hr/>

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
                       

                    </div>
                </div>
            </div >
        </>
    )
}
export default Home