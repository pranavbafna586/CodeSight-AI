const aiService = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  try {
    console.log("Request body received:", req.body);

    const code = req.body.code;

    if (!code) {
      console.log("No code provided in request body");
      return res
        .status(400)
        .json({ error: "Code is required in the request body" });
    }

    console.log("Processing code review for:", code.substring(0, 100) + "...");

    const response = await aiService(code);

    console.log("AI service response received");
    return res.status(200).json({ review: response });
  } catch (error) {
    console.error("Error in getReview controller:", error);
    return res.status(500).json({
      error: "Failed to process code review request",
      message: error.message,
    });
  }
};
