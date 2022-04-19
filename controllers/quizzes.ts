import { Request, Response } from "express";
import mongoose from "mongoose";
import Quiz from "../models/quiz";

export const getQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await Quiz.find();

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
  const quiz = req.body;

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
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No quiz with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await Quiz.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

export const deleteQuiz = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No quiz with id: ${id}`);

  await Quiz.findByIdAndRemove(id);

  res.json({ message: "Quiz deleted successfully." });
};
