import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../Theme";
const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ mb: "30px" }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", mb: "5px", color: colors.grey[100] }}
      >
        {title}
      </Typography>
      <Typography variant="h6" sx={{ color: colors.greenAccent[400] }}>
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Header;
