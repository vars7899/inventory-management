import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import connectDB from "./db.js";
import { errorHandler } from "./helperFunction/errorHandler.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import supplierRouter from "./routes/supplier.routes.js";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 8080;
dotenv.config();
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to database
connectDB();

// Routes
// Server Home Page
app.get("/api/v1", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  let html = fs.readFileSync(path.join(process.cwd(), "page", "index.html"));
  res.end(html);
});
app.use("/api/v1/user", userRouter);
app.use("/api/v1/supplier", supplierRouter);
// error middleware
app.use(errorHandler);

// Server casting
app.listen(PORT, () => {
  console.log(
    `\nInventory Management Server is UP and Running on PORT --> (${PORT})`
      .green
  );
});
