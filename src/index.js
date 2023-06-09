import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/*
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User = require('./models/dataSchema')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Menteez', { useNewUrlParser: true });

app.post('/insert', async (req, res) => {
  const Name = req.body.Name
  const Email = req.body.Email
  const Password = req.body.Password

  const formData = new User({
    name: Name,
    email: Email,
    password: Password
  })

  try {
    await formData.save();
    res.send("inserted data..")
  } catch (err) {
    console.log(err)
  }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
