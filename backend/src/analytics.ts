import { Router } from "express";

const router = Router();

/**
 * Get group analytics overview
 */
router.get("/:groupId", async (req, res) => {
  const groupId = req.params.groupId;

  // MOCK DATA (replace later with real tracking system)
  const analytics = {
    groupId,
    playersOnline: Math.floor(Math.random() * 5000),
    totalVisits: Math.floor(Math.random() * 100000),
    revenue: Math.floor(Math.random() * 50000),
    growth: {
      daily: "+5%",
      weekly: "+12%",
      monthly: "+32%",
    },
    chartData: [
      { day: "Mon", players: 1200 },
      { day: "Tue", players: 1800 },
      { day: "Wed", players: 2200 },
      { day: "Thu", players: 2000 },
      { day: "Fri", players: 3000 },
      { day: "Sat", players: 4200 },
      { day: "Sun", players: 3900 },
    ],
  };

  res.json(analytics);
});

export default router;