const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `You are a code reviewer. Analyze code for quality, efficiency, security issues, and best practices. Provide concise, actionable feedback with specific improvement suggestions.`,
});

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
}

module.exports = generateContent;
