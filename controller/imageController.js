import grid from 'gridfs-stream'
import mongoose from 'mongoose'
const url = 'http://localhost:8000'

let gfs
const conn = mongoose.connection
conn.once('open', () => {
    gfs = grid(conn.db, mongoose.mongo)
    gfs.collection('fs')
})

export const uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(404).json('file not found')
        }

        const imageUrl = `${url}/file/${req.file.filename}`;
        res.status(200).json(imageUrl);

    } catch (error) {
        res.status(500).json(error)
    }
}

export const getImage = async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename })
        const readStream = gfs.createReadStream(file.filename)
        readStream.pipe(res)
    } catch (error) {
        res.status(500).json("failed to fetch the image", error)
    }
}