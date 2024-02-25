import { Box, Typography } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";

export const Loader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        pt: 5,
      }}
    >
      <LoopIcon />
      <Typography>Loading...</Typography>
    </Box>
  );
};
