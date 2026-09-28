const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const generateToken = require("../utils/generate.token");
const profile = (req, res) => {
	if (!req.headers.authorization.startsWith("Bearer")) {
		return res.status(400).send({
			message: "Must be set Authorization header with Bearer",
		});
	}
	const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(400).send({
            message: "Token not found",
        });
    }

	const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

	if (!decodedToken) {
		return res.status(400).send({
			message: "Invalid token",
		});
	}
	res.send({
		message: "User profile",
		data: decodedToken,
	});
};

// token set 
// local storage
// session
// cookie

//New User create

const registration = async (req, res) => {
	const { email, password } = req.body;

	const user = new UserModel({
		email,
		password,
	});

	await user.save();

	res.send({
		message: "User created successfully",
		data: user,
	});
};

// Login user
const login = async (req, res) => {
	const { email, password } = req.body;

	const existingUser = await UserModel.findOne({ email });

	if (!existingUser) {
		return res.status(400).send({
			message: "User not found",
		});
	}

	console.log(existingUser);

	const user = existingUser;

	const token = generateToken(user);

	res.send({
		message: "User logged in successfully",
		data: {
			id: user._id,
			email: user.email,
		},
		token,
	});
};

module.exports = {
	profile,
	registration,
	login,
};
