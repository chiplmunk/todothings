import mongoose from 'mongoose'

let isConnected: boolean = false;

export const connectToDatabase = async () => {

    if (!process.env.NEXT_PUBLIC_MONGO_URL) {
        return console.log("MONGODB URL not found")
    }

    if (isConnected){
        return console.log("MONGODB already connected")
    }

    try {
        // @ts-ignore
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL, {
            dbName: 'anav'

        });
        isConnected = true;
        console.log("MONGODB has been connected")

    } catch (error) {
        return console.log("Error connecting to MONGODB", error)
    }

}