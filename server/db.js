import mongoose from "mongoose";
import { errorToConsole } from "./utils/console.js";

async function connectDB() {
  try {
    const _db = await mongoose.connect(process.env.DB_URI);
    console.log(
      `Success --> Connection established to ${_db.connections[0].host}`.yellow,
      `\nDatabase --> ${_db.connections[0].name}`.yellow
    );
  } catch (err) {
    console.log(
      errorToConsole(
        `Server was not able to establish connection to database \n(${err})`
      )
    );
  }
}

export default connectDB;
