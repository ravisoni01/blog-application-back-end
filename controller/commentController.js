import Comment from "../models/commentSchema"

export const postComment = async (req, res) => {
    try {
        const comment = new Comment(req.body)
        comment.save()
        res.status(200).json("Comment save successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getComment = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.id })
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json(error)
    }
}
export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id)
        await comment.delete()
        res.status(200).json("comment delete successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}