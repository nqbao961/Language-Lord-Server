import express from "express";
import {
  createLevel,
  deleteLevel,
  getLevel,
  getLevels,
  updateLevel,
} from "../controllers/levels";

const router = express.Router();

router.get("/", getLevels);
router.post("/", createLevel);
router.get("/:id", getLevel);
router.put("/:id", updateLevel);
router.delete("/:id", deleteLevel);

export default router;
