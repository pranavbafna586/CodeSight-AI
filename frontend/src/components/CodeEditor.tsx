import React, { useRef } from "react";
import { Box } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlighterRef = useRef<HTMLDivElement>(null);

  // Handle auto-completion for braces
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "{") {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      const newCode = code.substring(0, start) + "{" + code.substring(end);
      const newPosition = start + 1;

      onChange(
        newCode.substring(0, newPosition) + "}" + newCode.substring(newPosition)
      );

      // Set cursor position between braces
      setTimeout(() => {
        textarea.selectionStart = newPosition;
        textarea.selectionEnd = newPosition;
      }, 0);
    }
  };

  // Sync scrolling between textarea and syntax highlighter
  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (highlighterRef.current) {
      highlighterRef.current.scrollTop = e.currentTarget.scrollTop;
      highlighterRef.current.scrollLeft = e.currentTarget.scrollLeft;
    }
  };

  return (
    <Box sx={{ height: "100%", position: "relative" }}>
      <textarea
        ref={textareaRef}
        value={code}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
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
          overflowY: "auto",
          resize: "none",
          border: "none",
          outline: "none",
        }}
      />
      <Box
        ref={highlighterRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: "0",
          pointerEvents: "none",
          zIndex: 1,
          overflowY: "auto",
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
            fontFamily: '"Fira Code", Consolas, "Courier New", monospace',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </Box>
    </Box>
  );
};

export default CodeEditor;
