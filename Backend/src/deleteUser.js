import Post from "./mongoose.js";

const deleteUser = async (req, res) => {
    const {firstName} = req.params;
    try {
        const deleted = await Post.findOneAndDelete(firstName);
        res.status(200).json({
            message: `User with ${firstName} id got deleted`,
            data: deleted
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({ message: err, data: null })
    }
}

export default deleteUser;