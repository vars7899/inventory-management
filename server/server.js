import express from "express";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import cors from "cors";
import connectDB from "./db.js";
import { errorHandler } from "./utils/errorHandler.js";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import supplierRouter from "./routes/supplier.routes.js";
import productRouter from "./routes/product.routes.js";
import DocRouter from "./routes/document.routes.js";

const PORT = process.env.PORT || 8080;
dotenv.config();
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ credentials: true }));

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
app.use("/api/v1/product", productRouter);
app.use("/api/v1/document", DocRouter);
// error middleware
app.use(errorHandler);

// Server casting
app.listen(PORT, () => {
  console.log(
    `\nInventory Management Server is UP and Running on PORT --> (${PORT})`
      .green
  );
});
