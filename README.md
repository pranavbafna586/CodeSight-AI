# CodeSight-AI

![CodeSight-AI Banner](https://via.placeholder.com/800x200/252525/7e57c2?text=CodeSight-AI)

## 🚀 Overview

CodeSight-AI is a powerful tool that uses Google's Gemini AI to analyze and review code. With an intuitive split-screen interface, users can paste their code on the left side and receive detailed, actionable AI-powered analysis on the right side. The application provides valuable insights including best practices, efficiency suggestions, security vulnerabilities, and readability improvements.

## ✨ Features

- **Code Analysis**: Get comprehensive code reviews instantly
- **Split-screen Interface**: Professional and intuitive UI
- **Syntax Highlighting**: Clear visualization of both input and output
- **Real-time Processing**: Quick analysis with Google's Gemini AI model
- **Responsive Design**: Works across various devices and screen sizes

## 📋 Tech Stack

- **Frontend**: React with TypeScript, Material UI
- **Backend**: Node.js, Express
- **AI Integration**: Google Gemini API
- **Syntax Highlighting**: React Syntax Highlighter

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v14.0.0 or above)
- npm or yarn
- Google Gemini API key

### Backend Setup

1. Navigate to the backend directory:

   ```
   cd Backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the Backend directory with the following content:

   ```
   PORT=3001
   GOOGLE_GEMINI_KEY=your_gemini_api_key_here
   ```

4. Start the backend server:
   ```
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the frontend development server:

   ```
   npm start
   ```

4. Open your browser and go to `http://localhost:3000`

## 🔧 Usage

1. Once both frontend and backend are running, open your browser to the frontend URL
2. Paste your code in the left panel
3. Click the "Analyze Code" button
4. View the AI-generated analysis in the right panel

## 📝 Environment Variables

### Backend (.env)

- `PORT`: The port on which the backend server will run (default: 3001)
- `GOOGLE_GEMINI_KEY`: Your Google Gemini API key (required)

## 🎥 Demo

https://github.com/PranavB6/CodeSight-AI/assets/46335518/CodeSightAI.mp4
