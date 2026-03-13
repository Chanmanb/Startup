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

// gets /api prepended to each exRouter address.
var exRouter = express.Router();
app.use(`/api`, exRouter);

//account creation
exRouter.post('auth/create', async (req, res) => {
    if (await search_user("user_name", req.body.user_name)) {
        res.status(409).send({msg: "User already exists"})
    }
    else {
        const user = await create_user(req.body.user_name, req.body.password);
        setAuthCookie(res, user.token);
        res.send({user_name: user.user_name});
    }
});

async function create_user(user_nam, password) {
    const hashed = await bcrypt.hash(password, 10);
    const user = {user_name: user_nam, password: hashed, token: uuid.v4()};
    users.push(user);
    return user;
}



// listening to port 3000
app.listen(port, () => {
  console.log(`Listening to port 3000`);
});