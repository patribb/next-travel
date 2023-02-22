import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URL as string;
const DB_NAME = process.env.DB_NAME as string;

const client = new MongoClient(url);
client.connect()
console.log('🦩 DB Connected');
export default client.db(DB_NAME);
