import { Request, Response } from "express";
import mongoose from "mongoose";
import { IQuiz } from "../models";
import Quiz from "../models/quiz";

export const getQuizzes = async (req: Request, res: Response) => {
  const { notInLevel }: { notInLevel?: boolean } = req.query;

  const filter = notInLevel
    ? {
        $or: [
          { levelNumber: { $exists: false } },
          { levelNumber: { $type: "null" } },
        ],
      }
    : {};

  try {
    const quizzes = await Quiz.find(filter);

    res.status(200).json(quizzes);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const getQuiz = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const quiz = await Quiz.findById(id);

    res.status(200).json(quiz);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createQuiz = async (req: Request, res: Response) => {
  const quiz: IQuiz = req.body;

  const newQuiz = new Quiz(quiz);
  try {
    await newQuiz.save();

    res.status(201).json(newQuiz);
  } catch (error: any) {
    res.status(409).json({ message: error.message });
  }
};

export const updateQuiz = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    type,
    content,
    answer,
    explaination,
    choices,
    info,
    levelId,
    levelNumber,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No quiz with id: ${id}`);

  const updatedQuiz = {
    type,
    content,
    answer,
    explaination,
    choices,
    info,
    levelId,
    levelNumber,
    _id: id,
  };

  await Quiz.findByIdAndUpdate(id, updatedQuiz, { new: true });

  res.json(updatedQuiz);
};

export const deleteQuiz = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No quiz with id: ${id}`);

  await Quiz.findByIdAndRemove(id);

  res.json({ message: "Quiz deleted successfully." });
};
