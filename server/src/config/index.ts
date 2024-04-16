import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const MONGO_URI = process.env.MONGO_URI;
export const PORT = process.env.PORT;
