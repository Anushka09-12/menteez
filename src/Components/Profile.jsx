import {Nav} from "./Home"
import {useNavigate} from "react-router-dom"

const Profile = () => {
    const history = useNavigate();
    function Change(){
        history("/password");
    }
    const logo = require('../images/Menteez.png');
    const profileImg = require('../images/doc1.jpg');
    const username = "Anushka";
    const bio = "hello sunshine";

    return (
        <>
            <Nav/>
            <div className="leftAlignment profileLeft">
                
                <div>
                    <img src={profileImg} alt="ProfilePic" height="254px" width="230px" id="ProfilePic"/>
                    <p className='profileDetails UserName'>{username}</p>
                    <p className='profileDetails'>{bio}&#127774;&#128149;</p>
                    <br/><hr width="300px"/><br/>
                    <p className='profileDetails'>&#10084;<a href="/guide">Guide</a></p>
                    <p className='profileDetails'>&#9200;<a href="/activities">Activities</a></p>
                    <p className='profileDetails'>&#128276;<a href="mailto:anushkapatel0912@gmail.com">Feedback</a></p>
                    <p className='profileDetails'>&#128222;<a href="/home/#contact">Help</a></p>
                    <button className='profileDetails' onClick={Change}>Change Password</button>
                </div>
            </div>
            <div className="rightAlignment"></div>
           
        </>
    )
};

export default Profile;