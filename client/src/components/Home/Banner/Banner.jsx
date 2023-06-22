import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return (
        <div className="herobanner">
            <div className="content">
                <div className="textContent">
                    <div> <h1>SALES</h1></div>
                    <div><p>Welcome to your Digital Dukan, We assure your best user experience  </p></div>
                    <div className="buttonContent">
                        <button className="button1">Read more</button>
                        <button>Shop now</button>
                    </div>
                </div>
                <img src={BannerImg} alt="" className="imgContent" />

            </div>
        </div>
    )
};

export default Banner;
