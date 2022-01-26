import React from "react";
import "../styles/footer.css";

const Footer = () => {
    return (
        <div className="footer-base">
            <footer>
                <div className="footer-block">
                    <div className="footer-sign-up">
                        <form>
                            <label className="signup">
                                <input className="email-input" type="email" />
                                <span className="email-name">Email address</span>
                            </label>
                            <section>
                                <label className="checkbox-module">
                                    <input type="checkbox" />
                                    <span className="checkbox-input">Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our 
                                    <button className="footer-links">
                                         privacy policy &#8599;
                                    </button>
                                    </span>
                                </label>
                            </section>
                        </form>
                    </div>
                    <section className="footer-block_base">
                        <h3 className="footer-block-heading">Orders and support</h3>
                        <div className="footer-block-border"></div>
                        <ul className="footer-block-list">
                            <li>
                                <button className="footer-links">Contact us</button>
                            </li>
                            <li>
                                <button className="footer-links">FAQs &#8599;</button>
                            </li>
                            <li>
                                <button className="footer-links">Shipping &#8599;</button>
                            </li>
                            <li>
                                <button className="footer-links">Returns &#8599;</button>
                            </li>
                            <li>
                                <button className="footer-links">Order Histroy</button>
                            </li>
                            <li>
                                <button className="footer-links">Terms and Conditions</button>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-block_base">
                        <h3 className="footer-block-heading">Services</h3>
                        <div className="footer-block-border"></div>
                        <ul className="footer-block-list">
                            <li>
                                <button className="footer-links">Live assistance</button>
                            </li>
                            <li>
                                <button className="footer-links">Corporate gifts</button>
                            </li>
                            <li>
                                <button className="footer-links">Facial appointments</button>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-block_base">
                        <h3 className="footer-block-heading">Location preferences</h3>
                        <div className="footer-block-border"></div>
                        <ul className="footer-block-list">
                            <li>
                                <span>Shipping:
                                <button className="footer-links"> Hong Kong (S.A.R)</button>
                                </span>
                            </li>
                            <li>
                                <span>Language:
                                <button className="footer-links">English</button>
                                </span>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-block_base footerblock">
                        <h3 className="footer-block-heading">Sustainability</h3>
                        <div className="footer-block-border"></div>
                        <div className="footerblock-listitem">
                            <p>
                            All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation.
                            <button>Learn more</button>
                            </p>
                            
                        </div>
                    </section>
                    <section className="footer-block_base">
                    <h3 className="footer-block-heading">About</h3>
                    <div className="footer-block-border"></div>
                        <ul className="footer-block-list">
                            <li>
                                <button className="footer-links">Our Story</button>
                            </li>
                            <li>
                                <button className="footer-links">Foundation &#8599;</button>
                            </li>
                            <li>
                                <button className="footer-links">Careers</button>
                            </li>
                            <li>
                                <button className="footer-links">Privacy policy</button>
                            </li>
                            <li>
                                <button className="footer-links">Accessibility</button>
                            </li>
                        </ul>
                    </section>
                    <section className="footer-block_base">
                        <h3 className="footer-block-heading">Social media</h3>
                        <div className="footer-block-border"></div>
                        <ul className="footer-block-list">
                            <li>
                                <button className="footer-links">Instagram &#8599;</button>
                            </li>
                            <li>
                                <button className="footer-links">Twitter &#8599;</button>
                            </li>
                            <li>
                                <button className="footer-links">LinkedIn &#8599;</button>
                            </li>
                            <li>
                                <button className="footer-links">WeChat</button>
                            </li>
                            <li>
                                <button className="footer-links">Weibo &#8599;</button>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="footer-bottom">
                    <span>© Aesop</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer;