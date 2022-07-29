import React from 'react'
import "./footer.css"
import footer_company_logo from "../Drawer/logo.png";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelopeOpen, FaTelegramPlane, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";






const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta ">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-10">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"><FaMapMarkerAlt /></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>1280 US-46,<br />Parsippany-Troy Hills, <br /> NJ 07054,<br /> United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"> <FaPhoneAlt value={{ color: 'blue', size: '50px' }} /></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span> +1 347-809-3270</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"><FaEnvelopeOpen /></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>info@vervebot.io</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="/"><img src={footer_company_logo} className="img-fluid" alt="vervebotLogo" height={80} width={80} /></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>We are committed to your success.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <span>Follow us</span>
                                        <a href="https://www.facebook.com/vervebotusa/" target="_blank" rel="noreferrer">
                                            <i className="fab fa-facebook-f facebook-bg"><FaFacebook /></i>
                                        </a>
                                        <a href="https://www.instagram.com/vervebot/?hl=en" target="_blank" rel="noreferrer">
                                            <i className="fab fa-twitter twitter-bg"><FaInstagram /></i>
                                        </a>
                                        <a href="https://www.linkedin.com/company/vervebot/mycompany/" target="_blank" rel="noreferrer">
                                            <i className="fab fa-google-plus-g google-bg"><FaLinkedin /></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/about">about</a></li>
                                        <li><a href="/services">services</a></li>
                                        <li><a href="/portfolio">portfolio</a></li>
                                        <li><a href="/termConditions" target="_blank" rel="noreferrer">Terms & Conditions</a></li>
                                        <li><a href="/privacypolicy" target="_blank" rel="noreferrer">Privacy Policy</a></li>
                                        <li><a href="/contactus">Contact us</a></li>
                                        <li><a href="/cancel" target="_blank" rel="noreferrer">Cancellation/Refund Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Let’s Connect!</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Connect with entrepreneurs, build your<br /> network, makegreat business. Let’s<br /> connect!</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form >
                                            <input  className='LetsConnect' type="text" placeholder="Email Address" />
                                            <button type="button" aria-label="Save" tabIndex={0} className="button"
                                            ><i><FaTelegramPlane /></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center ">
                                <div className="copyright-text ">
                                    <a href="/"><img src={footer_company_logo} className="img-fluid" alt="vervebotLogo" height={25} width={25} /></a>
                                    <p> VerveBot &copy; 2021 | All rights reserved.</p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/termConditions">Terms</a></li>
                                        <li><a href="/privacypolicy">Privacy</a></li>
                                        <li><a href="/contactus">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer