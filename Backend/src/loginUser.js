import User from "./mongoose.js";

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    // const { firstName } = req.body;
    // console.log('login', email);

    try {
        const user = await User.findOne({ "email": email });

        if (user.password === password)
            res.status(200).json({
                message: `You just called out ${user.email}`,
                data: user
            })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err, data: null })
    }
}

export default loginUser;
// import User from './mongoose.js'

// const loginUser = async (req, res, next) => {

//     const logged = await User.findOne({ email: req.body?.email });

//     console.log(logged);

// }
// export default loginUser;