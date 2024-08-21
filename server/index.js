const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
const hallRoute = require('./routes/hallRoute')
const roomRoute = require('./routes/roomRoute')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')
const bookRoomRoute = require('./routes/bookRoomRoute')

//------------------------------------------------ Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());


//--------------------------------------------------Cors Policy
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello Accommodation");
});


//------------------------------------------------Connection to Hall Route
app.use('/api/halls', hallRoute);


//-----------------------------/-------------------Connection to Rooms Route
app.use('/api/rooms', roomRoute);


//-------------------------------------------------Student Registeration
app.use('/api/register', registerRoute);


//-------------------------------------------------Student Login
app.use('/api/login', loginRoute);


//-------------------------------------------------Student Login
app.use('/api/book-room', bookRoomRoute);


//------------------------------------------------Listening Port
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



