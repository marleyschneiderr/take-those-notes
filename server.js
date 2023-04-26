// dependancies
const express = require("express");
// loads the fs moduel in Node.js, a built in Node.js module that provides an API working w/ the file system
const fs = require("fs");
const htmlRoutes = require('./routes/htmlRoutes');

// const api = require('./routes/apiRoutes.js')
// app.use('/api', api)

// Express app set up
var app = express();
// || is a fallback value in case process.env.PORT is not defined/is undefined, the fallback is 3001 in this case
var PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//app.use("/public/assets", express.static(__dirname + "/public/assets"));

app.use('/', htmlRoutes);
// require("./routes/htmlRoutes.js")(app);
// require("./routes/apiRoutes.js")(app);

// starting the server to listen and display
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
