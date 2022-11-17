import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import connectDB from "./db.js";
import userRouter from "./routes/user.routes.js";
import { errorHandler } from "./helperFunction/errorHandler.js";

const PORT = process.env.PORT || 8080;
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to database
connectDB();

// Routes
// Server Home Page
app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  let html = fs.readFileSync(path.join(process.cwd(), "page", "index.html"));
  res.end(html);
});
app.use("/api/user", userRouter);
// error middleware
app.use(errorHandler);

// Server casting
app.listen(PORT, () => {
  if (process.env.NODE_ENV === "development") {
    console.log(
      `Visit the link`.grey,
      `\nhttps://127.0.0.1:${PORT}`.underline.blue
    );
  }
  console.log(
    `\nInventory Management Server is UP and Running on PORT --> (${PORT})`
      .green
  );
});
