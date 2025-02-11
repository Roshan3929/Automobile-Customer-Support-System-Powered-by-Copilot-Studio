const express = require("express");
const { Question } = require("../models/question.model.js");
const router = express.Router();

// Get all questions ✅
router.get("/", async (req, res) => {
    try {
        const questions = await Question.find().sort({ createdAt: -1 }); // Sort newest first
        res.status(200).json({ success: true, data: questions });
    } catch (error) {
        console.error("Error fetching questions", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// Add a new question ✅
router.post("/", async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ success: false, message: "Title and description required" });
    }

    try {
        const newQuestion = new Question({ title, description });
        await newQuestion.save();

        res.status(201).json({ success: true, data: newQuestion });
    } catch (error) {
        console.error("Error adding question", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

router.get("/:questionId", async (req, res) => {
    try {
        const question = await Question.findById(req.params.questionId).populate("answers"); // Ensure answers are populated
        if (!question) {
            return res.status(404).json({ success: false, message: "Question not found" });
        }
        res.status(200).json({ success: true, data: question });
    } catch (error) {
        console.error("Error fetching question:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

router.post("/:questionId/answers", async (req, res) => {
    const { questionId } = req.params;
    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ success: false, message: "Content is required" });
    }

    try {
        const question = await Question.findById(questionId);
        if (!question) {
            return res.status(404).json({ success: false, message: "Question not found" });
        }

        // ✅ Save the new answer to the database
        const newAnswer = new Answer({ content });
        await newAnswer.save();

        // ✅ Add answer to the question and save
        question.answers.push(newAnswer._id);
        await question.save();

        res.status(201).json({ success: true, data: newAnswer });
    } catch (error) {
        console.error("Error in adding answer", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

module.exports = router;
