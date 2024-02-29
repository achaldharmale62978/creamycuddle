import React from 'react'
import '../cssfolder/aboutus.css'
import '../cssfolder/home.css'
import logo from '../../Assetss/home/WhatsApp Image 2024-02-18 at 23.59.12_4d6c9a38.jpg'
import skincare from '../../Assetss/home/IMG-20240224-WA0004.jpg'
import Navbar from '../Navbar/Navbar'

import va1 from '../../Assetss/home/citrus.jpg'
import va2 from '../../Assetss/home/IMG-20240224-WA0003.jpg'
import va3 from '../../Assetss/home/IMG-20240224-WA0005.jpg'
import va4 from '../../Assetss/home/IMG-20240224-WA0002.jpg'

import certified1 from '../../Assetss/home/Product Features Skincare Soap Benefits Icon Instagram Post (1).jpg'
import certified2 from '../../Assetss/home/Minimalist Cream Organic Skincare Label.jpg'
import certified3 from '../../Assetss/home/Product Features Skincare Soap Benefits Icon Instagram Post.jpg'

const Aboutus = () => {
    return (
        <>
            <div className='amain'>
                <Navbar />
                <div>
                    <h3 className='a1 '>* About Us *</h3><hr /><hr />
                </div>
                <div>
                    <div>
                        <h6 className='a2'><i><b> <u>1. Story Behind Startup</u></b></i></h6>
                    </div>
                    <p className='a3 '>
                        In the heart of cherished childhood memories, bath time was guided by grandmothers' age-old recipes. But now, we are facing challenges because of synthetic chemicals like eczema, skin allergies, Acne and rashes causing worries for parents.
                    </p>
                    <p className='a3 '>
                        We dreamer, committed to the power of nature, embarked on a journey to create a natural nourishing Camel Milk Soap. Crafted with gentle formulation including all-natural ingredients, including Camel milk. Our soap provides a trusted solution which nurtures your skin and commitment to eco-friendliness.
                    </p>
                    <p className='a3 '>
                        Designed in attractive shapes with a delightful toy surprise, it transforms bath time into an engaging experience
                    </p>
                    <p className='a3 '>
                        Our soap, a blend of love, tradition, and nature's potential, invites you to rediscover the purity and simplicity of childhood, where bath time becomes a moment of connection, care, and creamy cuddles.

                    </p>

                    <div>
                        <h6 className='a2'><i><b><u>2. Why choose us?</u></b></i></h6>
                    </div>
                    <p className='a3 '>
                        Because, we're bringing back the essence of traditional care with a modern twist. Our soap is crafted with nourishing CAMEL MILK, natural colorants and soothing natural fragrances. We understand the worries parents face, from concerns about eczema, skin allergies to acne,  rashes and itchiness by harsh chemicals and additionally those chemicals causes environmental concern contributing to water pollution.
                    </p>
                    <p className='a3 '>
                        Our soap is a nutrient-rich blend with high levels of Vitamins A, C, D & E, harnessing their antioxidant properties for skin health. Vitamin C promotes collagen, Vitamin D fights acne & rashes, and other elements like Potassium, Calcium, Selenium, and Zinc contribute to various skin benefits. With a lowest lactose level, and essential oils for aromatherapy, it is ideal for conditions like Eczema & psoriasis. This soap offers a holistic approach, ensuring nourishment, hydration, and therapeutic properties for overall skin well-being.
                    </p>
                    <p className='a3 '>
                        With Creamy Cuddles, you can rest easy knowing that our soap is gentle, hypoallergenic, and free from harmful chemicals. Plus, it not only soothes eczema but also minimizes water pollution, making it a safe choice for your little one and the environment. Trust Creamy Cuddles for pure, natural nourishment and peace of mind during bath time.
                    </p>

                    <div>
                        <h6 className='a2'><i><b><u>3. Core values- </u></b></i></h6>
                    </div>
                    <p className='a3 '>
                        <b>1. Purity-</b> We are dedicated to using only the purest, natural ingredients in our soaps, ensuring a gentle and safe experience for every kid and teenager.
                    </p>
                    <p className='a3 '>
                        <b>2. Transparency-</b> We believe in open communication and transparency, providing parents with clear information about our ingredients, processes, and product benefits.
                    </p>
                    <p className='a3 '>
                        <b>3. Innovation-</b> Our commitment to continuous improvement drives us to innovate and evolve, always seeking better and safer solutions for skincare of our loved one’s.
                    </p>
                    <p className='a3 '>
                        <b>4. Sustainability-</b> We are environmentally conscious, committed to sustainable practices in both our product development and packaging to create a better world for future generations.
                    </p>
                    <p className='a3 '>
                        <b>5. Empathy- </b> Understanding the concerns and needs of parents, we approach our work with empathy, offering products that cares for the delicate nature of skin.
                    </p>


                    <div style={{ paddingTop: '50px' }}>
                        <h6 className='a2'><i><b><u>4. BLOGS-</u> </b></i></h6>
                    </div>
                    <p className='a3 ' style={{ display: 'flex' }}>

                        <ul className='mt-5'>
                            <b>  <li>Skincare Tips for Kids and Teens</li>
                                <li>The Benefits of Natural Ingredients</li>
                                <li>Fun Bath Time Activities</li>
                                <li> Understanding Eczema and Other Skin Conditions</li>
                                <li>The Benefits of Natural Ingredients</li>
                            </b>
                        </ul>
                        <img className='a4 col-3 offset-3' src={skincare} height='400px' width='400px' />

                    </p>

                    <div>
                        <h6 className='a2'><i><b><u>•	INGREDIENTS -</u></b></i></h6>
                    </div><br />
                    <div style={{ display: 'flex' }}>
                        <div className='offset-2 col-4'>
                            <img src='https://d2j6dbq0eux0bg.cloudfront.net/images/44048789/1979774729.jpg' height='400' width='400' />
                        </div>
                        <div className='col-5  text-center mt-5'>
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
                    <div style={{ display: 'flex' }}>
                        <div className='mt-5 text-center offset-2'>
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
                        <div className='col-4 '>
                            <img src='https://hips.hearstapps.com/hmg-prod/images/jojoba-oil-in-the-glass-bottle-royalty-free-image-1574089162.jpg' height='400' width='400' />
                        </div>

                    </div>

                    <div>
                        <h6 className='a2'><i><b><u>•	VARIANTS- </u></b></i></h6>
                    </div><br /><br />
                    <div style={{ display: 'flex' }}>
                        <div className='col-4 offset-1'>
                            <img src={va1} height='300' width='300' />
                        </div>
                        <div className='mt-5 text-center'>
                            <div className='a2'><i><b>1.	Citrus squeeze:</b></i></div>
                            <p className='a3 '>
                                Citrus extracts in soap offer benefits such as natural fragrance, antioxidant properties, skin brightening, mild exfoliation, and vitamin C content.
                            </p>
                        </div>

                    </div>

                    <div style={{ display: 'flex' }}>
                        <div className='mt-5 text-center offset-1'>
                            <p className='a2 '><i><b>2.	Melon Marvel:</b></i></p>
                            <p className='a3 '>
                                Watermelon extract in soap provides hydration, vitamins, and antioxidants for the skin. It also offers anti-inflammatory properties, potential skin brightening, and mild exfoliation.gy
                            </p>
                        </div>
                        <div className='col-4 '>
                            <img src={va2} height='300' width='300' />
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='col-4 offset-1'>
                            <img src={va3} height='300' width='300' />
                        </div>
                        <div className='mt-5 text-center'>
                            <p className='a2'><i><b>3.	Fresh feel:</b></i></p>
                            <p className='a3 '>
                                Green apple extract in soap provides a refreshing fragrance, vitamins, antioxidants, skin toning, mild exfoliation, and hydration.
                            </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div className='mt-5 text-center offset-1'>
                            <p className='a2'><i><b>4.	Love spell:</b></i></p>
                            <p className='a3 '>
                                Evening primrose extract in soap offers moisturizing properties, anti-inflammatory benefits, skin conditioning, richness in gamma-linolenic acid (GLA), and potential relief for skin conditions like eczema and dermatitis.
                            </p>
                        </div>
                        <div className='col-4'>
                            <img src={va4} height='300' width='300' />
                        </div>
                    </div>
                    <br /><br />

                    <div className='proj5 ' >
                        <div>
                            <h6 className='a2'><i><b><u>4. Commitment to Safety- </u>(Certifications) </b></i></h6>
                        </div>
                        <div style={{ padding: '5%', display: 'flex' }}>
                            <div class=" " style={{ width: "18rem" }}>
                                <img src={certified1} class="certify1 border border-secondary" alt="..." height='280' />

                            </div>
                            <div class=" offset-1" style={{ width: "18rem " }}>
                                <img src={certified2} class="certify1 border border-secondary" alt="..." height='400' width='400' />

                            </div>
                            <div class=" offset-2" style={{ width: "18rem" }}>
                                <img src={certified3} class="certify1 border border-secondary" alt="..." height='280' />

                            </div>

                        </div>
                    </div>





                    {/* <div>
                        <h6 className='a2'><i><b>6. CONTACT US- </b></i></h6>
                    </div>
                    <p><b>Our details-</b> Creamy Cuddle</p>
                    <p>
                        Adress- Pimpari, Pune, Maharashtra.
                        Contact No. - +91 9172475608
                        Email- creamycuddles03@gmail.com
                        Social media presence Icons – Instagram, Facebook, WhatsApp, LinkedIn
                        Get a free quote/ Enquiry- phone no. +91 9172475608
                    </p> */}

                    <div className=''>
                        <div className='hh13 content  fontfamily' style={{ display: 'flex', fontSize: '20px' }}>
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
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Aboutus