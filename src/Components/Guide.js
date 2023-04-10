import { useState } from 'react';
import "./Home"
import {Nav} from "./Home";



export default function App() {
  return (
    <>
      <Ques />
      <More />
    </>
  );
}

export const Ques = () => {
  return (
    <>
    <Nav/>
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
    </>
  );
};







export const More = () => {
  const [sleepScore, setSleepScore] = useState(0);
  const [focusScore, setFocusScore] = useState(0);
  const [irritationScore, setIrritationScore] = useState(0);
  const [anxietyScore, setAnxietyScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [message, setMessage] = useState("");


  const handleSleepChange = (event) => {
    const value = event.target.value === 'yes' ? 1 : 0;
    setSleepScore(value);
  };

  const handleFocusChange = (event) => {
    const value = event.target.value === 'yes' ? 1 : 0;
    setFocusScore(value);
  };

  const handleIrritationChange = (event) => {
    const value = event.target.value === 'yes' ? 1 : 0;
    setIrritationScore(value);
  };

  const handleAnxietyChange = (event) => {
    const value = event.target.value === 'yes' ? 1 : 0;
    setAnxietyScore(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const score = sleepScore + focusScore + irritationScore + anxietyScore;
    setTotalScore(score)

    let message="";
  if (score <= 1) {
    message = "You seem to be having a tough time. Take care of yourself!";
  } else if (score <= 2) {
    message = "You're doing okay, but there's room for improvement.";
  } else if (score <= 3) {
    message = "You're doing pretty well! Keep it up!";
  } else {
    message = "Wow, you're doing amazing! Keep up the good work!";
  }

  setMessage(message); // or display the message in the UI however you want

    // You can do whatever you want with the score here
  };
  return(
      <div className="subHeadingMore">
          <h2>Tell Us More</h2>
          <form onSubmit={handleSubmit}>
          <div className="ques">
              <h4>Are you having a sound sleep?</h4>
              <div>
            <label>
              <input type="radio" name="sleep" value="yes" onChange={handleSleepChange} /> Yes
            </label>
            <label>
              <input type="radio" name="sleep" value="no" onChange={handleSleepChange} /> No
            </label>
          </div>
          </div>
          <div className="ques">
              <h4>Are you able to focus on work?</h4>
              <div>
            <label>
              <input type="radio" name="sleep" value="yes" onChange={handleFocusChange} /> Yes
            </label>
            <label>
              <input type="radio" name="sleep" value="no" onChange={handleFocusChange} /> No
            </label>
          </div>
          </div>
          <div className="ques">
              <h4>Do you get irritated easily?</h4>
              <div>
            <label>
              <input type="radio" name="sleep" value="yes" onChange={handleIrritationChange} /> Yes
            </label>
            <label>
              <input type="radio" name="sleep" value="no" onChange={handleIrritationChange} /> No
            </label>
          </div>
          </div>
          <div className="ques">
              <h4>Did you feel anxious this week?</h4>
              <div>
            <label>
              <input type="radio" name="sleep" value="yes" onChange={handleAnxietyChange} /> Yes
            </label>
            <label>
              <input type="radio" name="sleep" value="no" onChange={handleAnxietyChange} /> No
            </label>
          </div>
          </div>
          <button>Submit</button>
          </form>
         <center>
          <div className='scoredesign'><center>Score:{totalScore}</center> <center>{message}</center></div> </center>
      </div>
  )
};