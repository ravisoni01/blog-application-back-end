import mongoose from 'mongoose'
import { URL } from '../config'
const connection = async () => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        console.log("DB Connected Successfully.....")
    } catch (error) {
        console.log(error)
    }
}
export default connection