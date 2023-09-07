const express = require("express");
const app = express();

// connect to dotenv
require("dotenv").config();
const port = process.env.PORT;

// connect to db
require("./config/mongoose.config");

// middleware
app.use(express.json(), express.urlencoded({ extended: true }));

// user routes that are tied to user crud functions
const AllMyJokeRoutes = require("./routes/joke.routes");
AllMyJokeRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));
