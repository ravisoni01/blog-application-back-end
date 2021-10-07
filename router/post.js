import express from 'express'
import { createPost, getAllPosts, getPost, updatePost, deletePost } from '../controller/postController'
import { uploadImage, getImage } from '../controller/imageController'
import { postComment, getComment, deleteComment } from '../controller/commentController'
import upload from '../utils/upload'

const router = express.Router()

router.post('/create', createPost)

router.get('/posts', getAllPosts)
router.get('/post/:id', getPost)

router.post('/update/:id', updatePost)

router.delete('/delete/:id', deletePost)

router.post('/file/upload', upload.single('file'), uploadImage)
router.get('/file/:filename', getImage)

router.post('/comment/post', postComment)
router.get('/comments/:id', getComment)
router.delete('/comments/delete/:id', deleteComment)

export default router