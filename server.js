// dependancies
const express = require("express");
// loads the fs moduel in Node.js, a built in Node.js module that provides an API working w/ the file system
const fs = require("fs");

// Express app set up
var app = express();
// || is a fallback value in case process.env.PORT is not defined/is undefined, the fallback is 3001 in this case
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public/assets", express.static(__dirname + "/public/assets"));

require("./routes/htmlRoutes/htmlRoutes.js")(app);
require("./routes/apiRoutes/apiRoutes.js")(app);

// starting the server to listen and display
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
