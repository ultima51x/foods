import express from "express";
import recipes from "./recipes";

const router = express.Router();

router.use("/recipes", recipes);

router.get("/", (req, res): void => {
  res.send("This is the root!");
});

// 404
router.use((req, res): void => {
  res.status(404).json({ error: "Not Found" });
});

export default router;
