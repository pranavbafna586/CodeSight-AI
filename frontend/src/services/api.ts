import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

/**
 * Send code to backend for analysis with Gemini AI
 * @param code The code snippet to analyze
 * @returns Promise with the analysis result
 */
export const analyzeCode = async (code: string): Promise<string> => {
  try {
    const response = await axios.post(`${API_URL}/ai/get-review`, { code });
    return response.data.review;
  } catch (error) {
    console.error("Error analyzing code:", error);
    throw new Error("Failed to analyze code");
  }
};
