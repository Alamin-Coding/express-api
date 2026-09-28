const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.log("Error connecting to MongoDB:", error);
	});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
