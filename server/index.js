import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/AuthRoutes.js";
import prisma from "./prisma/client.js";
import { gigRoutes } from "./routes/GigRoutes.js";
import { orderRoutes } from "./routes/OrderRoutes.js";
import { dashboardRoutes } from "./routes/DashboardRoutes.js";
import { messageRoutes } from "./routes/MessagesRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Updated CORS configuration
app.use(
  cors({
    origin: [
      process.env.PUBLIC_URL,
      "https://freelancex-main.vercel.app",
      "http://localhost:3000"
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
  })
);

// Enable pre-flight requests for all routes
app.options("*", cors());

// Prisma connection to MongoDB
prisma
  .$connect()
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB", error));

app.use(cookieParser());
app.use(express.json());

// Health check endpoints
app.get("/", (req, res) => {
  res.send(" 🚀 Unilink API Playground!🤖 ");
});

app.get("/ping", (req, res) => {
  res.send("pong 🏓");
});

// Static file serving - Note: This won't work on Vercel, need cloud storage
app.use("/uploads/profiles", express.static("uploads/profiles"));
app.use("/uploads", express.static("uploads"));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/gigs", gigRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/messages", messageRoutes);

app.listen(port, () => {
  console.log(`Server is listening at url: http://localhost:${port}`);
});

export default app;