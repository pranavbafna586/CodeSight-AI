import React from "react";
import { Box } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  return (
    <Box sx={{ height: "100%", position: "relative" }}>
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        className="code-input-area"
        spellCheck="false"
        data-gramm="false"
        data-gramm_editor="false"
        data-enable-grammarly="false"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: "16px",
          background: "transparent",
          color: "transparent",
          caretColor: "white",
          zIndex: 2,
          fontFamily: '"Fira Code", Consolas, "Courier New", monospace',
          fontSize: "14px",
          lineHeight: 1.5,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: "0",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <SyntaxHighlighter
          language="typescript"
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: "16px",
            background: "transparent",
            fontSize: "14px",
            lineHeight: 1.5,
            height: "100%",
            fontFamily: '"Fira Code", Consolas, "Courier New", monospace',
            overflowY: "hidden",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};

export default CodeEditor;
