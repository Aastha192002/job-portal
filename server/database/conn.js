import mongoose from 'mongoose'
import dotenv from 'dotenv'
import chalk from 'chalk';

dotenv.config();

chalk.level = 3

const MONGO_URL = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URL).then(() => {
            console.log(chalk.hex('#16FF00')("DB Successfully Connected"))
        })
    }
    catch (e) {
        console.log(chalk.hex('#FB2576')(" Error connecting with MongoDB: "), e)
    }
}

export default connectDB;