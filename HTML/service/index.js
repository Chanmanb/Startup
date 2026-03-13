const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

// Locations on the PesterPage are in temporary storage
let users = [];
let locations = {};

//json body porsing
app.use(express.json());

// gets cookies to work
app.use(cookieParser());

//  sets up the public directory
app.use(express.static("public"));


// listening to port 3000
app.listen(port, () => {
  console.log(`Listening to port 3000`);
});