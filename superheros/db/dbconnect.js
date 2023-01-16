import mongoose from "mongoose";


const connect = {}

async function dbConnect(){

    if(connect.isConnected){
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewParser: true,
        useUnifiedTopology: true
    })

    connect.isConnected = db.connections[0].readyState;
}


export default dbConnect;