import { useTheme, Box, Typography, Paper } from "@mui/material";
import { tokens } from "../theme";
import { ResponsiveBar } from "@nivo/bar";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDark = theme.palette.mode === "dark";

  // FIXED: Adaptive colors to make axis and legends white in dark mode, black in light mode
  const adaptiveTextColor = isDark ? "#ffffff" : "#000000";

  // EXACT COLOR PALETTE MATCHED FROM YOUR PIE CHART IMAGE
  const exactPieColors = [
    "#fbb4ae", // Soft Pink ("hack")
    "#b3cde3", // Soft Blue ("make")
    "#ccebc5", // Soft Green ("go")
    "#decbe4", // Soft Purple ("lisp")
    "#fed9a6", // Soft Orange/Yellow ("scala")
    "#eaea87", // Soft Cream (Backup 6th color for your 6th key)
  ];

  return (
    <ResponsiveBar
      data={data}
      theme={{
        axis: {
          domain: { line: { stroke: "transparent", strokeWidth: 0 } },
          legend: {
            // FIXED: Set axis labels color dynamically
            text: { fill: adaptiveTextColor, fontSize: 12, fontWeight: 600 },
          },
          ticks: {
            line: { stroke: "transparent" },
            // FIXED: Set axis values (e.g. country codes) color dynamically
            text: { fill: adaptiveTextColor, fontSize: 11 },
          },
        },
        legends: {
          text: {
            // FIXED: Set legend items font color dynamically
            fill: adaptiveTextColor,
            fontSize: 12,
            fontWeight: "500",
            textTransform: "capitalize",
          },
        },
      }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 140, bottom: 50, left: 60 }}
      padding={0.35}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      // FIXED: Stacks segments on top of one another continuously without horizontal separations
      groupMode="stacked"
      colors={exactPieColors}
      borderRadius={6}
      borderWidth={0}
      enableGridX={false}
      enableGridY={false}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 8,
        tickRotation: -15,
        legend: isDashboard ? undefined : "country",
        legendPosition: "middle",
        legendOffset: 36,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 8,
        tickRotation: 0,
        legend: isDashboard ? undefined : "food",
        legendPosition: "middle",
        legendOffset: -45,
      }}
      enableLabel={false}
      motionConfig="gentle"
      // FIXED TOOLTIP: Label is locked to colors.greenAccent[400], value uses dynamic bar color
      tooltip={({ id, value, color }) => (
        <Paper
          elevation={6}
          sx={{
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
          {/* Dynamic dot marker matching the exact bar segment color */}
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
              fontWeight: "600",
              letterSpacing: "0.5px",
              textTransform: "capitalize",
            }}
          >
            {/* 1. Item Name strictly locked to colors.greenAccent[400] */}
            <span style={{ color: colors.greenAccent[400] }}>{id}</span>

            <span style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}>: </span>

            {/* 2. Quantity value uses its matching dynamic bar color */}
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
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 130,
          translateY: 0,
          itemsSpacing: 6,
          itemWidth: 100,
          itemHeight: 24,
          itemDirection: "left-to-right",
          itemOpacity: 0.8,
          symbolSize: 10,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                // FIXED: Modifies hover text color adaptively to prevent clipping states
                itemTextColor: isDark ? "#ffffff" : "#000000",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
    />
  );
};

export default BarChart;
