const express = require("express");
const app = express();
const authRouter = require("./routes/auth.route");
const authMiddleware = require("./middleware/auth.middleware");
const cors = require("cors");

// middleware
app.use(express.json());
app.use(
	cors({
		origin: ["*", "https://express-api-hk9b.onrender.com"],
		methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
		preflightContinue: false,
		optionsSuccessStatus: 204,
	}),
);

// routes
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// auth routes
app.use("/api/auth", authMiddleware, authRouter);

module.exports = app;
