import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeOutputProps {
  output: string;
  loading: boolean;
}

const CodeOutput: React.FC<CodeOutputProps> = ({ output, loading }) => {
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress color="secondary" />
        <Typography variant="body1" sx={{ ml: 2, color: "text.secondary" }}>
          Analyzing code...
        </Typography>
      </Box>
    );
  }

  if (!output) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          p: 3,
        }}
      >
        <Typography variant="body1" color="text.secondary" align="center">
          Click "Analyze Code" to get an AI-powered code review and suggestions.
        </Typography>
      </Box>
    );
  }

  // Convert markdown-style code blocks to regular text for better rendering
  const processedOutput = output.replace(/```[\w]*\n([\s\S]*?)\n```/g, "$1");

  return (
    <Box className="code-output-container">
      <Box sx={{ whiteSpace: "pre-wrap", p: 2 }}>
        {processedOutput.split("\n\n").map((paragraph, index) => {
          // Check if paragraph appears to be a code snippet
          if (
            paragraph.trim().startsWith("function ") ||
            paragraph.trim().startsWith("class ") ||
            paragraph.trim().startsWith("const ") ||
            paragraph.trim().startsWith("let ") ||
            paragraph.trim().startsWith("var ") ||
            paragraph.trim().startsWith("import ") ||
            paragraph.trim().startsWith("export ") ||
            paragraph.trim().startsWith("interface ") ||
            paragraph.trim().includes("{") ||
            paragraph.trim().includes("()") ||
            paragraph.trim().includes("=>")
          ) {
            return (
              <Box sx={{ mb: 2 }} key={index}>
                <SyntaxHighlighter
                  language="typescript"
                  style={vscDarkPlus}
                  customStyle={{
                    background: "rgba(0,0,0,0.2)",
                    borderRadius: "4px",
                  }}
                >
                  {paragraph}
                </SyntaxHighlighter>
              </Box>
            );
          } else {
            return (
              <Typography
                variant="body1"
                component="div"
                sx={{ mb: 2, lineHeight: 1.6 }}
                key={index}
              >
                {paragraph}
              </Typography>
            );
          }
        })}
      </Box>
    </Box>
  );
};

export default CodeOutput;
