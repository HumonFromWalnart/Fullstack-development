import { model, Schema } from 'mongoose';

const PostSchema = new Schema({
    like: Number
}, { versionKey: false });

const PostModel = model("Post", PostSchema);

export default PostModel;