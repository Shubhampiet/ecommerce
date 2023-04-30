import "./Footer.scss";
import payments from "../../assets/payments.png"
const Footer = () => {
    return (
        <div className="footer">
        <div className="textContent">
            <p>Lorem ipsum dolor sit ame fuga eius, laboriosam quod autem!</p>
        </div>
        <div className="imageContent">
            <img src={payments} alt="" />
        </div>
    </div>
    )
};

export default Footer;
