import React, { useState, createRef } from 'react';
import { DefaultPlayer as Video } from 'react-html5video/dist';
import 'react-html5video/dist/styles.css';
import './react-video-gallery.css';
import anxiety from '../videos/anxiety.mp4';
import daily from '../videos/daily.mp4';
import healing from '../videos/healing.mp4';
import sleep from '../videos/sleep.mp4';
import stress from '../videos/stress.mp4';
import book1 from '../audiobooks/atomichabits.mp3'
import book2 from '../audiobooks/attitudeiseverything.mp3'
import book3 from '../audiobooks/thecouragetobedisliked.mp3'
import book4 from '../audiobooks/wingsoffire.mp3'
import bookimg1 from '../audiobooks/atomicimg.jpeg'
import bookimg2 from '../audiobooks/attituteimg.png'
import bookimg3 from '../audiobooks/thecourageimg.jpeg'
import bookimg4 from '../audiobooks/wingsimg.jpeg'
import song1 from '../songs/anxietysong.mp3'
import song2 from '../songs/depressionsong.mp3'
import song3 from '../songs/reliefsong.mp3'
import song5 from '../songs/relaxsong.mp3'
import songimg1 from '../songs/anxietyimage.jpeg'
import songimg2 from '../songs/depressionimage.jpeg'
import songimg3 from '../songs/reliefimage.jpg'
import songimg5 from '../songs/relaximage.jpeg'
import podcaste from '../podcast/podcaste.mp3'
import podimg from '../podcast/podimg.jpeg'
import yoga from '../yoga/holidaystress.mp4'
import yogaimg from '../yoga/yogaimg.jpeg'

import {Nav} from "./Home.jsx"
       

const ReactVideoGallery = () => {

    const [model, setModel] = useState(false);
    const data = [
      { id: 1, videoUri: anxiety },
      { id: 2, videoUri: daily },
      { id: 3, videoUri: healing },
      { id: 4, videoUri: sleep },
      { id: 5, videoUri: stress },
    ];
  
    const songdata = [
      {
        id: 1,
        title: "Anxiety Song", // corrected title
        image: songimg1, // corrected image source
        audio: song1, // corrected audio source
      },
      {
          id: 2,
          title: "Depression Song", // corrected title
          image: songimg2, // corrected image source
          audio: song2, // corrected audio source
        },
        {
          id: 3,
          title: "Relief Song", // corrected title
          image: songimg3, // corrected image source
          audio: song3, // corrected audio source
        },
        
        {
          id: 4,
          title: "Relax Song", // corrected title
          image: songimg5, // corrected image source
          audio: song5, // corrected audio source
        },
    ];

    const audiodata = [
        {
          id: 1,
          title: "Atomic Habits", // corrected title
          image: bookimg1, // corrected image source
          audio: book1, // corrected audio source
        },
        {
            id: 2,
            title: "Attitute Is Everything", // corrected title
            image: bookimg2, // corrected image source
            audio: book2, // corrected audio source
          },
          {
            id: 3,
            title: "The Courage to be Disliked", // corrected title
            image: bookimg3, // corrected image source
            audio: book3, // corrected audio source
          },
          {
            id: 4,
            title: "The Wings Of Fire", // corrected title
            image: bookimg4, // corrected image source
            audio: book4, // corrected audio source
          },
         
      ];
      

      const yogadata = [
       { id: 1, videoUri: yoga },
       { id: 2, videoUri: yoga },
       { id: 3, videoUri: yoga },
       { id: 4, videoUri: yoga },
       { id: 5, videoUri: yoga },
        
      ];

      const poddata = [
        {
          id: 1,
          title: "podcaste", // corrected title
          image: podimg, // corrected image source
          audio: podcaste, // corrected audio source
        },
        {
            id: 2,
            title: "podcaste", // corrected title
            image: podimg, // corrected image source
            audio: podcaste, // corrected audio source
          },
          {
            id: 3,
            title: "podcaste", // corrected title
            image: podimg, // corrected image source
            audio: podcaste, // corrected audio source
          },
          {
            id: 4,
            title: "podcaste", // corrected title
            image: podimg, // corrected image source
            audio: podcaste, // corrected audio source
          },
       
         
      ];

  return (
    <>
    <Nav/>
    <div className="act" style={{backgroundColor:"#F6F4E8"}}>
    <div className="meditate-video">
      <h2 className="activitiesHeading">Let's Meditate</h2>
      <div className="gallery">
        {data.map((item, index) => {
          const divRef = createRef(null);
          const openModel = () => {
            divRef.current.classList.remove('video');
            divRef.current.classList.add('model');
            setModel(true);
          };

          const closeModel = () => {
            divRef.current.classList.remove('model');
            divRef.current.classList.add('video');
            setModel(false);
          };

          return (
            <div ref={divRef} className="video" key={index}>
              {model && (
                <button
                  className="model-close-btn"
                  onClick={() => closeModel()}
                >
                  X
                </button>
              )}
              <div className="video-container" onClick={() => openModel()}>
                <Video
                  style={{ width: '100%' }}
                  autoPlay={model}
                  controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                >
                  <source src={item.videoUri} type="video/webm" />
                </Video>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <h2 className="activitiesHeading">Songs</h2>
    <div className="spacingaudi">
    {songdata.map((song, index) => (
  <div key={index}>
    <img src={song[`image`]} alt={''} height="200px"  />
    <audio src={song[`audio`]} controls />
   
  </div>
))}

</div>
<h2 className="activitiesHeading">AudioBook</h2>
    <div className="spacingaudi">
    {audiodata.map((song, index) => (
  <div key={index} >
    <center>
    <img src={song[`image`]} alt={song[`title`]} height="200px"  width={'200px'}/>
    <audio src={song[`audio`]} controls />
    <p>{song[`title`]}</p></center>
  </div>
    ))}
    </div>

    <div className="meditate-video">
      <h2 className="activitiesHeading">Yoga</h2>
      <div className="gallery">
        {yogadata.map((item, index) => {
          const divRef = createRef(null);
          const openModel = () => {
            divRef.current.classList.remove('video');
            divRef.current.classList.add('model');
            setModel(true);
          };

          const closeModel = () => {
            divRef.current.classList.remove('model');
            divRef.current.classList.add('video');
            setModel(false);
          };

          return (
            <div ref={divRef} className="video" key={index}>
              {model && (
                <button
                  className="model-close-btn"
                  onClick={() => closeModel()}
                >
                  X
                </button>
              )}
              <div className="video-container" onClick={() => openModel()}>
                <Video
                  style={{ width: '100%' }}
                  autoPlay={model}
                  controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                >
                  <source src={item.videoUri} type="video/webm" />
                </Video>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <h2 className="activitiesHeading">Podcasts</h2>
    <div className="spacingaudi">
    {poddata.map((song, index) => (
  <div key={index} >
    <center>
    <img src={song[`image`]} alt={song[`title`]} height="200px"  width={'200px'}/>
    <audio src={song[`audio`]} controls />
    <p>{song[`title`]}</p></center>
  </div>
    ))}
    </div>
    
    </div>
    </>
  );
};

export default ReactVideoGallery;