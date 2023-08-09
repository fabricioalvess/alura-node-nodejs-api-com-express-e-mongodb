import mongoose from "mongoose"

mongoose.connect("mongodb+srv://fabricio:Alqaed4_01@curso-node.fsicijg.mongodb.net/curso-node")

let db = mongoose.connection

export default db