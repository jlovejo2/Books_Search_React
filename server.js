require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes
app.use(routes);

//for local connect to mongo
//"mongodb://localhost/booksSearchReact"

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || `mongodb://${process.env.MLAB_USERNAME}:${process.env.MLAB_PASSWORD}@ds041593.mlab.com:41593/heroku_mw2qqk3w`,
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
 });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
