import user from "../model/user.js";

const register = async (req, res) => {
    const { email, username, phonenumber, password } = req.body;

    try {
        const userExist = await user.findOne({ email });

        if (userExist != null) {
            res.status(200).json({
                message: "email already exist please provide diffrent email"
            });
        } else {
            const newUser = await user.create(req.body);
            newUser.save();

            res.status(200).json({
                message: "user created successfully",
                createdUser: newUser
            });
        }

    } catch (error) {
        res.status(500).json({ message: "error" });
        console.log(error.message);
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userExist = await user.findOne({ email });

        if (userExist == null) {
            res.status(401).json({
                message: "email not fpund"
            });
        } else {
            if (userExist.password != password) {
                res.status(404).json({
                    message: "invalid password"
                });
            } else {
                res.status(200).json({
                    message: "login success",
                    user: userExist
                });
            }
        }

    } catch (error) {
        res.status(500).json({ message: "error" });
        console.log(error.message);
    }
};

export { register, login };