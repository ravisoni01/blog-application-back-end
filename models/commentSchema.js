import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    }
})

const comment = mongoose.model("comments", commentSchema)

export default comment