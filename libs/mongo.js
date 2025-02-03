// Import MongoDB client and Server API version
import { MongoClient, ServerApiVersion } from "mongodb";

// Check if the MONGO_URI environment variable is set
// This is the connection string to your MongoDB database
if (!process.env.MONGO_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGO_URI"');
}

// The URI (connection string) for your MongoDB database
const uri = process.env.MONGO_URI;

// Options to configure the MongoDB client
const options = {
  serverApi: {
    version: ServerApiVersion.v1, // Use the latest stable MongoDB API version
    strict: true, // Enforce strict mode for MongoDB queries
    deprecationErrors: true, // Show errors for deprecated features
  },
};

let client; // Holds the MongoDB client instance
let clientPromise; // A promise to connect to MongoDB

// Check if the code is running in development mode
if (process.env.NODE_ENV === "development") {
  // Use a global variable to avoid reconnecting to MongoDB on every file reload
  let globalWithMongo = global; // Access the global object (specific to Node.js)
  globalWithMongo._mongoClientPromise = undefined;

  if (!globalWithMongo._mongoClientPromise) {
    // Create a new MongoDB client and connect
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  // Reuse the existing connection for faster performance
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production, always create a new MongoDB client and connect
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export the client promise so other files can use it to connect to MongoDB
export default clientPromise;
