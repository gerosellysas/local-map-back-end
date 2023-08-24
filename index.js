const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

// require("./routes/default_routes")(app);
// require("./routes/wamessage_routes")(app);
// app.use(express.static(__dirname + "/Public"));

const port = process.env.PORT || 5000;
app.listen(port);
console.log("Server running on port : " + port);
