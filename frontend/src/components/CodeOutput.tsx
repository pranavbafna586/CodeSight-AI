import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";

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

  return (
    <Box className="code-output-container" sx={{ color: "white" }}>
      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => (
            <Typography
              variant="body1"
              sx={{ mb: 2, lineHeight: 1.6 }}
              {...props}
            />
          ),
          h1: ({ node, ...props }) => (
            <Typography
              variant="h4"
              sx={{ mb: 2, mt: 2, fontWeight: 600 }}
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <Typography
              variant="h5"
              sx={{ mb: 2, mt: 2, fontWeight: 600 }}
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <Typography
              variant="h6"
              sx={{ mb: 1.5, mt: 2, fontWeight: 600 }}
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <Box component="ul" sx={{ mb: 2, pl: 2 }} {...props} />
          ),
          ol: ({ node, ...props }) => (
            <Box component="ol" sx={{ mb: 2, pl: 2 }} {...props} />
          ),
          li: ({ node, ...props }) => (
            <Box component="li" sx={{ mb: 0.5 }} {...props} />
          ),
          strong: ({ node, ...props }) => (
            <Box component="span" sx={{ fontWeight: "bold" }} {...props} />
          ),
          em: ({ node, ...props }) => (
            <Box component="span" sx={{ fontStyle: "italic" }} {...props} />
          ),
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "javascript";

            if (inline) {
              return (
                <Typography
                  component="code"
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.2)",
                    px: 0.8,
                    py: 0.4,
                    borderRadius: 1,
                    fontFamily: "monospace",
                  }}
                >
                  {children}
                </Typography>
              );
            }

            return (
              <Box sx={{ mb: 2 }}>
                <SyntaxHighlighter
                  language={language}
                  style={vscDarkPlus}
                  customStyle={{
                    background: "rgba(0,0,0,0.2)",
                    borderRadius: "4px",
                    padding: "12px",
                    margin: "8px 0",
                  }}
                  wrapLongLines={true}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </Box>
            );
          },
          blockquote: ({ node, ...props }) => (
            <Box
              component="blockquote"
              sx={{
                borderLeft: "4px solid #7e57c2",
                pl: 2,
                py: 0.5,
                my: 2,
                bgcolor: "rgba(126, 87, 194, 0.1)",
                borderRadius: "4px",
              }}
              {...props}
            />
          ),
        }}
      >
        {output}
      </ReactMarkdown>
    </Box>
  );
};

export default CodeOutput;
