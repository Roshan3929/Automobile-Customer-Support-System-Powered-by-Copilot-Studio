const express = require("express");
const { Question, Answer } = require("../models/question.model.js");
const router = express.Router();

// Add an answer to a question
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

        const newAnswer = new Answer({ content });
        question.answers.push(newAnswer);

        await question.save();
        res.status(201).json({ success: true, data: newAnswer });
    } catch (error) {
        console.error("Error in adding answer", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

module.exports = router;
