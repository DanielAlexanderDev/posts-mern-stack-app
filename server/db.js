import mongoose from 'mongoose'
import { MONGODB_URI } from './config.js'

export default async function connectDB() {
  try {
    const db = await mongoose.connect(MONGODB_URI)
    console.log('connected to DB', db.connection.name)
  } catch (error) {
    console.error(error)
  }
}
