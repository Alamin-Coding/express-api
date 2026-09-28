const express = require("express");
const app = express();
const authRouter = require("./routes/auth.route");
const authMiddleware = require("./middleware/auth.middleware");

// middleware
app.use(express.json());


// routes
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// auth routes 
app.use("/api/auth", authMiddleware, authRouter);

module.exports = app;
