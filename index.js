const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require('cors');
const userrouter = require("./routes/user.route");
const newRoutes = require("./routes/news.route");
const subroute = require("./routes/subscriber");
const cookies = require("cookie-parser");

dotenv.config();
const port = process.env.PORT||3000;


const app = express();
app.use(cookies());
app.use(cors());


// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

app.use("/user", userrouter);
app.use("/news", newRoutes);
app.use("/sub", subroute);

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});