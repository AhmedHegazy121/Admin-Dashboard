import { useTheme, Paper, Box, Typography } from "@mui/material";
import { tokens } from "../Theme";
import { ResponsivePie } from "@nivo/pie";
import { mockPieData as data } from "../Data/mockData";

const PieChart = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDark = theme.palette.mode === "dark";

  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: { line: { stroke: "transparent", strokeWidth: 0 } },
          legend: { text: { fill: colors.grey[100], fontWeight: 600 } },
          ticks: {
            line: { stroke: "transparent" },
            text: { fill: colors.grey[100] },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
            fontSize: 12,
            fontWeight: "500",
            textTransform: "capitalize",
          },
        },
      }}
      margin={{ top: 80, right: 120, bottom: 120, left: 120 }}
      innerRadius={0.75}
      padAngle={3.5}
      cornerRadius={6}
      activeOuterRadiusOffset={36}
      activeInnerRadiusOffset={14}
      motionConfig="gentle"
      transitionMode="innerRadius"
      colors={{ scheme: "pastel1" }}
      borderWidth={0}
      arcLinkLabelsSkipAngle={15}
      arcLinkLabelsTextColor={colors.grey[100]}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      // FIXED TOOLTIP: Word styling inherits greenAccent, quantity shows slice color
      tooltip={({ datum: { id, value, color } }) => (
        <Paper
          elevation={6}
          sx={{
            color: colors.greenAccent[400], // Base text color for the container words
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            backgroundColor: isDark
              ? "rgba(29, 36, 53, 0.9)"
              : "rgba(255, 255, 255, 0.95)",
            backdropFilter: "blur(8px)",
            borderRadius: "12px",
            border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)"}`,
            boxShadow: isDark
              ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
              : "0 8px 32px 0 rgba(31, 38, 135, 0.1)",
          }}
        >
          {/* Dynamic dot marker matching the exact slice color */}
          <Box
            sx={{
              width: 10,
              height: 10,
              backgroundColor: color,
              borderRadius: "50%",
              boxShadow: `0 0 10px ${color}`,
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "inherit", // Inherits greenAccent[400] from Paper
              fontWeight: "600",
              letterSpacing: "0.5px",
              textTransform: "capitalize",
            }}
          >
            {id}

            <span style={{ color: "inherit" }}>: </span>

            {/* Overrides green text to use the exact pie slice color for the value */}
            <span
              style={{ color: color, fontWeight: "700", marginLeft: "4px" }}
            >
              {value}
            </span>
          </Typography>
        </Paper>
      )}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 90,
          itemsSpacing: 12,
          itemWidth: 85,
          itemHeight: 18,
          itemTextColor: colors.grey[100],
          itemDirection: "left-to-right",
          itemOpacity: 0.8,
          symbolSize: 10,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: isDark ? "#ffffff" : "#000000",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
