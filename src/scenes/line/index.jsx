import { Box } from "@mui/material";
import Header from "../../Components/Header";
import LineChart from "../../Components/LineChart.jsx";
import { motion } from "framer-motion";

const Line = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, x: -60 }} // Starts invisible and offset 60px to the left
      animate={{ opacity: 1, x: 0 }} // Transitions smoothly to full opacity and original spot
      transition={{ duration: 0.6, ease: "easeOut" }} // Premium cinematic timing configuration
      sx={{
        m: "20px",
      }}
    >
      <Header title="LINE" subtitle="Simple Line Chart" />
      <Box sx={{ height: "75vh" }}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
