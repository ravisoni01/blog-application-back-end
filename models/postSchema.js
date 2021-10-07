import mongoose from "mongoose";

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: String,
        required: false
    },
    createdDate: {
        type: Date
    }
})

const Post = mongoose.model('post', postSchema)
export default Post