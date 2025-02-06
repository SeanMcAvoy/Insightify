import mongoose from "mongoose";
// eslint-disable-next-line no-unused-vars
import User from "@/models/User";
// eslint-disable-next-line no-unused-vars
import Board from "@/models/Board";

// const connectMongo = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//   } catch (e) {
//     console.error("❌ Mongoose Error: " + e.message);
//   }
// };

// export default connectMongo;

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGO_URI environment variable in Vercel."
  );
}

// Use a global cached connection to prevent multiple connections in serverless environments
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectMongo = async () => {
  if (cached.conn) {
    return cached.conn; // Return existing connection
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        bufferCommands: false, // Recommended for serverless
        serverSelectionTimeoutMS: 5000, // Timeout if MongoDB is unreachable
      })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectMongo;
