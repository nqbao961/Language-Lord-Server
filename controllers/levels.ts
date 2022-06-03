import { Request, Response } from "express";
import mongoose from "mongoose";
import Level from "../models/level";
import Quiz from "../models/quiz";

export const getLevels = async (req: Request, res: Response) => {
  try {
    const levels = await Level.find();
    const levelsWithQuiz = [];
    if (levels.length > 0) {
      for (const level of levels) {
        const levelWithQuiz: any = { ...level };
        const quizzes = await level.populate("quizIds");
        levelWithQuiz.quizzes = quizzes;
        levelsWithQuiz.push(levelWithQuiz);
      }
    }

    res.status(200).json(levelsWithQuiz);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getLevel = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const level = await Level.findById(id);
    const levelWithQuiz: any = { ...level };
    if (level) {
      const quizzes = await level.populate("quizIds");
      levelWithQuiz.quizzes = quizzes;
    }

    res.status(200).json(levelWithQuiz);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createLevel = async (req: Request, res: Response) => {
  const level = req.body;

  const newLevel = new Level(level);
  try {
    await newLevel.save();

    res.status(201).json(newLevel);
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};

export const updateLevel = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { levelNumber, quizIds } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No level with id: ${id}`);

  const updatedLevel = {
    levelNumber,
    quizIds,
    _id: id,
  };

  await Level.findByIdAndUpdate(id, updatedLevel, { new: true });

  res.json(updatedLevel);
};

export const deleteLevel = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No level with id: ${id}`);

  await Level.findByIdAndRemove(id);

  res.json({ message: "Level deleted successfully." });
};
