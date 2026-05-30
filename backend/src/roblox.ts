import { Router } from "express";

const router = Router();

/**
 * Get Roblox Group Info
 */
router.get("/group/:id", async (req, res) => {
  try {
    const groupId = req.params.id;

    const response = await fetch(
      `https://groups.roblox.com/v1/groups/${groupId}`
    );

    const data = await response.json();

    res.json({
      id: data.id,
      name: data.name,
      memberCount: data.memberCount,
      description: data.description,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch group" });
  }
});

/**
 * Get Group Members (basic version)
 */
router.get("/group/:id/members", async (req, res) => {
  try {
    const groupId = req.params.id;

    const response = await fetch(
      `https://groups.roblox.com/v1/groups/${groupId}/users`
    );

    const data = await response.json();

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch members" });
  }
});

/**
 * Get Game Info (placeId)
 */
router.get("/game/:placeId", async (req, res) => {
  try {
    const placeId = req.params.placeId;

    const response = await fetch(
      `https://games.roblox.com/v1/games?universeIds=${placeId}`
    );

    const data = await response.json();

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch game" });
  }
});

export default router;