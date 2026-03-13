const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

// Locations on the PesterPage are in temporary storage
let users = [];
let locations = {};



// listening to port 3000
app.listen(port, () => {
  console.log(`Listening to port 3000`);
});