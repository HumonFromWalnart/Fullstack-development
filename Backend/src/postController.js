import Post from './postModel.js'

const filterPost = async (req, res, next) => {
    console.log(req.body)
    if (
        !req.body?.like
    ) {
        res
            .status(400)
            .json({ message: "no likes?" })
    } 
        res
            .status(201)
            .json({ message: 'new user has created', data: createUser })
    
}

export default filterPost;