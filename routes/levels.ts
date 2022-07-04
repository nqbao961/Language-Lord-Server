import express from "express";
import {
  createLevel,
  deleteLevel,
  getLevel,
  getLevels,
  updateLevel,
  getLevelTotal,
} from "../controllers/levels";

const router = express.Router();

router.get("/", getLevels);
router.get("/total", getLevelTotal);
router.post("/", createLevel);
router.get("/:id", getLevel);
router.put("/:id", updateLevel);
router.delete("/:id", deleteLevel);

export default router;
