import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CodeEditor from "./components/CodeEditor";
import CodeOutput from "./components/CodeOutput";
import Header from "./components/Header";
import { analyzeCode } from "./services/api";
import "./App.css";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7e57c2",
    },
    secondary: {
      main: "#4db6ac",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function App() {
  const [code, setCode] = useState<string>(
    "// Paste your code here to analyze..."
  );
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleAnalyzeClick = async () => {
    if (!code.trim() || code === "// Paste your code here to analyze...") {
      setError("Please enter some code to analyze");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const result = await analyzeCode(code);
      setOutput(result);
    } catch (err) {
      setError("Error analyzing code. Please try again.");
      console.error("Analysis error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Container maxWidth="xl" sx={{ flexGrow: 1, mt: 3, mb: 3 }}>
          <Grid container spacing={3} sx={{ height: "calc(100vh - 140px)" }}>
            <Grid item xs={12} md={6} sx={{ height: "100%" }}>
              <Paper
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ p: 2, borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                >
                  Code Input
                </Typography>
                <Box sx={{ flexGrow: 1, overflow: "auto" }}>
                  <CodeEditor code={code} onChange={handleCodeChange} />
                </Box>
                <Box
                  sx={{
                    p: 2,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {error && (
                    <Typography color="error" variant="body2">
                      {error}
                    </Typography>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAnalyzeClick}
                    disabled={loading}
                    sx={{ ml: "auto" }}
                  >
                    {loading ? <CircularProgress size={24} /> : "Analyze Code"}
                  </Button>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sx={{ height: "100%" }}>
              <Paper
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ p: 2, borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                >
                  Analysis Result
                </Typography>
                <Box sx={{ flexGrow: 1, overflow: "auto", p: 0 }}>
                  <CodeOutput output={output} loading={loading} />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
