import express from "express";
import recipes from "./recipes";
import ingredients from "./ingredients";

const router = express.Router();

router.use("/recipes", recipes);
router.use("/ingredients", ingredients);

router.get("/", (req, res): void => {
  res.send("This is the root!");
});

export default router;
