import mongoose from "mongoose"

mongoose.connect('mongodb+srv://admin:123@webii.z5a1kbb.mongodb.net/livraria')

let db = mongoose.connection

export default db