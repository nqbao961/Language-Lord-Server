import { Request, Response } from "express";
import Quiz from "../models/quiz";

export const getQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await Quiz.find();

    res.status(200).json(quizzes);
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
