import corosoul1 from "../images/corosoul1.jpeg";
import corosoul2 from "../images/corosoul2.jpeg";
import corosoul3 from "../images/corosoul3.jpeg";
import corosoul4 from "../images/corosoul4.jpeg";
import corosoul5 from "../images/corosoul5.jpeg";
import corosoul6 from "../images/corosoul6.jpeg";
import corosoul7 from "../images/corosoul7.jpeg";
import {Link} from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import {  Autoplay,FreeMode, Pagination } from "swiper";

const Home = () => {
    return(
        <div>
            <Nav />
            <Banner />
            <Ngo />
            <Carousel/>
            <Appointment />
            <Figures />
            <Footer />
        </div>
    )
};

export const Carousel = ()=>{
    return(
        <div className="slider">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
         autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={corosoul1} alt="first img" height="50px" width="50px"/></SwiperSlide>
        <SwiperSlide><img src={corosoul2} alt="first img" height="50px" width="50px"/></SwiperSlide>
        <SwiperSlide><img src={corosoul3} alt="first img" height="50px" width="50px"/></SwiperSlide>
        <SwiperSlide><img src={corosoul4} alt="first img" height="50px" width="50px"/></SwiperSlide>
        <SwiperSlide><img src={corosoul5} alt="first img" height="50px" width="50px"/></SwiperSlide>
        
        
      </Swiper>
        </div>
    )
}
export const Forms =()=>{
    return(
        <div class="drVariety">
      <div className="ngoHeading appointHeading">
        <h3>Self-Care Assessement</h3>
      </div>
      <div className="ngoVariety">
        <div className="dr1">
          <img
            className="drImg"
            src={
              "https://t3.ftcdn.net/jpg/02/31/82/04/240_F_231820456_WhsrQABcZydYVS6Utgp5MRkFaDKhtu6F.jpg"
            }
            alt="ngo1"
            height="35px"
          />
          <b>
            <p><Link to="/AForm">Anxiety</Link></p>
          </b>
        </div>
        <div className="dr1">
          <img
            className="drImg"
            src={
              "https://media.npr.org/assets/img/2022/11/08/gettyimages-1368011820-94d4493db4214f9b2a423b8e5fbfa73d8e3d2775-s1100-c50.jpg"
            }
            alt="ngo1"
            height="35px"
          />
          <b>
            <p><Link to="/DForm">Depression</Link></p>
          </b>
        </div>
        <div className="dr1">
          <img
            className="drImg"
            src={
              "https://www.sciencenews.org/wp-content/uploads/2023/02/021123_LS_depression_feat.jpg"
            }
            alt="ngo1"
            height="35px"
          />
          <b>
            <p><Link to="/SForm">Stress</Link></p>
          </b>
        </div>
      </div>
    </div>
    )
}
export const Nav = () => {
    const logo = require('../images/Menteez.png');
    const cat = require('../images/cat.jpg');

    return(
        <div className="navbar">
            <div className="leftAlignment homeLogo">
                <img id="logo" src={logo} alt="Logo" height="70px" />
                <h1>Menteez</h1>
            </div>
            <div className="rightAlignment nav">
                <div className="navText"><a href="#ngo">NGO's</a></div>
                <div className="navText"><a href="/">Let's Begin</a></div>
                <div className="navText"><a href="/">Blogs</a></div>
                <img id="cat" src={cat} alt="notLoggedIn" height="70px"/>
            </div>
        </div>
    )
};

const Banner = () => {
    function Fun(){
        alert("First Log In")
    }
    const img = require('../images/bannerImg.png');
    return(
        <div className="banner">
            <div>
                <p>"Mental health at it's eaze"</p>
                <button onClick={Fun}>Book a demo</button>
            </div>
            <div><img src={img} alt="bannerImg" height="350px"/></div>
        </div>
    )
};

const Ngo = () => {
    const ngo1 = require('../images/ngo1.png');
    const ngo2 = require('../images/ngo2.jpeg');
    const ngo3 = require('../images/ngo3.jpeg');
    const ngo4 = require('../images/ngo4.jpeg');
    const ngo5 = require('../images/ngo1.jpeg');

    return (
        <div className="ngo" id="ngo">
            <div className="ngoHeading">
                <h3>NGO's Associated</h3>
            </div>
            <div className="ngoVariety">
                <div className="ngo1">
                    <img src={ngo1} alt="ngo1" height="150px" />
                    <p><Link to="https://sangath.in/">Sangath</Link></p>
                </div>
                <div className="ngo1">
                    <img src={ngo2} alt="ngo2" height="150px" />
                    <p><Link to="https://www.thelivelovelaughfoundation.org/">Live Love Laugh</Link></p>
                </div>
                <div className="ngo1">
                    <img src={ngo3} alt="ngo3" height="150px" />
                    <p><Link to="https://www.mhinnovation.net/organisations/banyan">The Banyan</Link></p>
                </div>
                <div className="ngo1">
                    <img src={ngo4} alt="ngo4" height="150px" />
                    <p><Link to="https://www.mindroot.org/">Mindroot</Link></p>
                </div>
                <div className="ngo1">
                    <img src={ngo5} alt="ngo5" height="150px" />
                    <p><Link to="https://imhrc.org/">IMHRC</Link></p>
                </div>
            </div>
        </div>
    )
};

const Appointment = () => {
    const dr1 = require('../images/doc1.jpg');
    const dr2 = require('../images/doc2.jpg');
    const dr3 = require('../images/doc3.png');
    return (
        <div className="drVariety" id ="appointment"> 
            <div className="ngoHeading appointHeading">
                <h3>Make an Appointment</h3>
            </div>
            <div className="ngoVariety">
                <div className="dr1">
                    <img className="drImg" src={dr1} alt="ngo1" height="350px" width="250px"/>
                    <b><p>Dr. Iqra Khan</p></b>
                </div>
                <div className="dr1">
                    <img className="drImg" src={dr2} alt="ngo1" height="350px" width="250px" />
                    <b><p>Dr. Kamal Singh</p></b>
                </div>
                <div className="dr1">
                    <img className="drImg" src={dr3} alt="ngo1" height="350px" width="250px"/>
                    <b><p>Dr. Shyeya</p></b>
                </div>
            </div>
        </div>
    )
};
const Figures = () => {
    return(
        <div className="fig">
            <div>
                <h3>PEOPLE IMPACTED</h3>
                <h4>350+</h4>
            </div>
            <div>
                <h3>THERAPISTS ON BOARD</h3>
                <h4>350+</h4>
            </div>
        </div>
    )
};

const Footer = () => {
    const insta = require("../images/instagram.png");
    const fb = require("../images/facebook.png");
    const gmail = require("../images/gmail.png");
    const twitter = require("../images/twitter.png");

    return(
        <div className="footer">
            <div className="leftAlignment footerLeft">
                <a href='/'>Profile</a>
                <a href='/'>Guide</a>
                <a href='/activities'>Activities</a>
                <a href='/premium'>Premium</a>
                <a href='/'>Assessment</a>
                <a href='/'>Dear Diary</a>
            </div>
            <div className="rightAlignment">
                <div className="social">
                    <a href="/" ><img src={insta} alt="Instagram" height="60px"/></a>
                    <a href="/"><img src={fb} alt="Facebook" height="60px"/></a>
                    <a href="/"><img src={twitter} alt="Twitter" height="60px"/></a>
                    <a href="/"><img src={gmail} alt="Gmail" height="60px"/></a>
                </div>
                <div className="contact">
                    <p>Contact Us</p>
                    <p>+91-85060-50842 / +91-98552-72829</p>
                </div>
                <div className="copyright">
                    <p>Copyright rights reserved &copy; 2023</p>
                </div>
            </div>
        </div>
    )
};

export default Home;