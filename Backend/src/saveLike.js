import Post from './src/postModel.js'

const loginUser = async (req, res) => {
    const {like} = req.body;

    try {
        const user = await Post.findOne({ "like": like });
        if (user?.lockerKey == lockerKey) {
            res.status(200).json({
                message: `You just called out ${user.email}`,
                data: user
            })
        } else {
            res.status(404).json({
                message: "No likes?",
            })
        }
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: err, data: null })
    }
}

export default loginUser;