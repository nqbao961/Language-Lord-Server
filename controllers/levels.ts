import { Request, Response } from "express";
import mongoose from "mongoose";
import Level from "../models/level";
import Quiz from "../models/quiz";

export const getLevels = async (req: Request, res: Response) => {
  const { lang } = req.query;

  try {
    const levels = await Level.find({ language: lang }).populate("quizList");

    res.status(200).json(levels);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getLevel = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const level = await Level.findById(id);
    if (level) {
      const levelWithQuiz = await level.populate("quizList");
      res.status(200).json(levelWithQuiz);
    } else res.status(404).send(`No level with id: ${id}`);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createLevel = async (req: Request, res: Response) => {
  const { lang } = req.query;
  const level = req.body as {
    levelNumber: number;
    quizList: mongoose.Types.ObjectId[];
  };

  const _id = `${lang}-${level.levelNumber}`;
  const newLevel = new Level({ ...level, _id, language: lang });
  try {
    const findLevel = await Level.findById(_id);

    if (!findLevel) {
      for (const quiz of level.quizList) {
        await Quiz.findByIdAndUpdate(quiz, {
          levelId: newLevel._id,
          levelNumber: level.levelNumber,
        }).exec();
      }
      await newLevel.save();

      res.status(201).json(newLevel);
    } else {
      return res
        .status(404)
        .send(`Duplicate level with number: ${level.levelNumber}`);
    }
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
