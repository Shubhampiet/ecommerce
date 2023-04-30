import "./Newsletter.scss";
import newsletter from "../../../assets/newsletter-bg.jpeg"
import { TiSocialLinkedinCircular, TiSocialFacebookCircular, TiSocialInstagramCircular, TiSocialTwitterCircular } from "react-icons/ti"
import { FaTelegramPlane, FaEmailPlane } from "react-icons/fa"
import { FcPhoneAndroid } from "react-icons/fc"
import { HiOutlineMail } from "react-icons/hi"

const Newsletter = () => {
    return (
        <div className="container">
            <div className="newsLetter">
                <div className="imageContent">
                    <img src={newsletter} alt="" />
                </div>

                <div className="textContent">
                    <h3>NEWSLETTER</h3>
                    <h1>SIGN UP FOR LATEST UPDATES AND OFFERS</h1>
                    <div className="inputfield">
                        <input type="text" placeholder="Enter your email" />
                        <button>SUBSCRIBE</button>
                    </div>
                    <p>Will be used with acordance to our privacy policy</p>
                    <div className="iconsImage">
                        <TiSocialLinkedinCircular />
                        <TiSocialFacebookCircular />
                        <TiSocialTwitterCircular />
                        <TiSocialInstagramCircular />
                    </div>
                </div>
            </div>

            <div className="description">

                <div className="about">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil sapiente tempora fugit eaque quaerat, facilis totam ut quia sequi aliquid, similique corporis voluptates iusto?</p>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <div className="contactType ">
                        <FaTelegramPlane />
                        <p>xxx@telegram</p>
                    </div>
                    <div className="contactType">
                        <FcPhoneAndroid />
                        <p>7982164735</p>
                    </div>
                    <div className="contactType">
                        <HiOutlineMail />
                        <p>shubham.itpiet@gmail.com</p>
                    </div>
                </div>
                {/* categories of products */}
                <div className="categoriess">
                    <h3>Categories</h3>
                    <ul>
                        <li>Headphones</li>
                        <li>Smart Watches</li>
                        <li>Bluetooth Speakers</li>
                        <li>Wireless Earbuds</li>
                        <li>Home Theaters</li>
                        <li>Projectors</li>
                    </ul>
                </div>
                <div className="pages">
                    <h3>Pages</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Privacy Policy</li>
                        <li>Returns</li>
                        <li>Terms & Conditions</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>

           
        </div>
    )
};

export default Newsletter;
