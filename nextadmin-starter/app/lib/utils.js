import { connect } from "mongoose";

export const connectToBd = async () => {
    const connection = {}
    try {
        if(connection.isConnected) return;
        const db= await connect(process.env.MONGOOS_URL);
        connection.isConnected = db.connections[0].readyState
        
    } catch (error) {
        console.log(err);
        throw new Error(error)
        
    }
}