import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ borderBottom: 1, borderColor: "divider" }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center">
          <CodeIcon sx={{ color: "#7e57c2", mr: 1, fontSize: 32 }} />
          <Typography
            variant="h4"
            component="div"
            sx={{ fontWeight: 700, color: "white" }}
          >
            CodeSight<span style={{ color: "#7e57c2" }}>AI</span>
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          AI-Powered Code Analysis
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
