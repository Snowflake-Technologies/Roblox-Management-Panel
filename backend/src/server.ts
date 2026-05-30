import express from "express";
import cors from "cors";
import authRoutes from "./auth";
import robloxRoutes from "./roblox";
import analyticsRoutes from "./analytics";

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/roblox", robloxRoutes);
app.use("/analytics", analyticsRoutes);

app.get("/", (_, res) => {
  res.json({ message: "SnowPanel API Running ❄️" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`SnowPanel API running on port ${PORT}`);
});