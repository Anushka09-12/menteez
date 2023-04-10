import {Nav} from "./Home";

const Assessment = () => {
    return(
        <div>
            <Nav />
            <Ques />
            <More />
        </div>
    )
};

const Ques = () => {
    return(
        <div className="ngo">
            <div className="ngoHeading">
                <h3>What's Your Mood Today?</h3>
            </div>
            <div className="emojiVariety">
                <div className="ngo1">
                    <h2 className="emoji">&#128521;</h2>
                    <p className="emojis">Good</p>
                </div>
                <div className="ngo1 emojis">
                    <h2 className="emoji">&#128522;</h2>
                    <p>Excellent</p>
                </div>
                <div className="ngo1 emojis">
                    <h2 className="emoji">&#128532;</h2>
                    <p>Sad</p>
                </div>
                <div className="ngo1 emojis">
                    <h2 className="emoji">&#128549;</h2>
                    <p>Anxious</p>
                </div>
                <div className="ngo1 emojis">
                    <h2>&#128545;</h2>
                    <p>Angry</p>
                </div>
            </div>
        </div>
    )
};

const More = () => {
    return(
        <div className="subHeadingMore">
            <h2>Tell Us More</h2>
            <div className="ques">
                <h4>Are you having a sound sleep?</h4>
                <div>
                    <p>Yes</p>
                    <p>No</p>
                </div>
            </div>
            <div className="ques">
                <h4>Are you able to focus on work?</h4>
                <div>
                    <p>Yes</p>
                    <p>No</p>
                </div>
            </div>
            <div className="ques">
                <h4>Do you get irritated easily?</h4>
                <div>
                    <p>Yes</p>
                    <p>No</p>
                </div>
            </div>
            <div className="ques">
                <h4>Did you feel anxious this week?</h4>
                <div>
                    <p>Yes</p>
                    <p>No</p>
                </div>
            </div>
            <button>Submit</button>
        </div>
    )
};

export default Assessment;