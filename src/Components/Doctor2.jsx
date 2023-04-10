import {Nav} from "./Home";

const Doctor = () => {
    const image = require('../images/doc2.jpg');
    const whatsapp = require('../images/whatsapp.png');
    const name = "Dr. Kamal Singh";
    const degree = "Psychology (UG), Masters in Counseling";
    const address = "8, Rajouri Garden, Delhi - 201123";
    const star = "4.5";

    return(
        <div>
            <Nav />
            <div className='leftAlignment'>
                <img className='leftSide' src={image} alt="Doctor" height="290" width="250" id="doctorIMG"/>
                <h3 className='leftSide text'>Make an Appointment</h3>
                <a className='leftSide' href="https://wa.me/8506050842">
                    <img src={whatsapp} alt="Whatsapp" height="40" width="40" />
                </a>
            </div>
            <div className='rightAlignment'>
                <p className="doctorDetails name">Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
                <p className="doctorDetails">Degree : &nbsp;&nbsp;&nbsp;&nbsp;{degree}</p>
                <p className="doctorDetails">Address : &nbsp;&nbsp;&nbsp;{address}</p>
                <p className="doctorDetails">Rating : &nbsp;&nbsp;&nbsp;{star}</p>
            </div>
        </div>
    )
};

export default Doctor;