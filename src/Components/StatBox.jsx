import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ width: "100%", m: "0 30px" }}>
      {/* Row 1: Icon/Title on the Left, ProgressCircle on the Right */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          {icon}
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.grey[100], mt: "5px" }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          {/* FIXED: Pass the raw progress value, not an object */}
          <ProgressCircle progress={progress} />
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "10px" }}
      >
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          sx={{ fontStyle: "italic", color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
