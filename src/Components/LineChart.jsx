import { ResponsiveLine } from "@nivo/line";
import { useTheme, Paper, Box, Typography } from "@mui/material";
import { tokens } from "../Theme";
import { mockLineData as data } from "../Data/mockData";

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isDark = theme.palette.mode === "dark";

  const exactThemeColors = [
    "#fed9a6", // Soft Orange/Yellow
    "#fbb4ae", // Soft Pink
    "#decbe4", // Soft Purple
  ];

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[500], strokeWidth: 1 } },
          legend: {
            text: { fill: colors.grey[100], fontSize: 12, fontWeight: 600 },
          },
          ticks: {
            line: { stroke: colors.grey[500], strokeWidth: 1 },
            text: { fill: colors.grey[100], fontSize: 11 },
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
        crosshair: {
          line: {
            stroke: colors.greenAccent[500],
            strokeWidth: 1.5,
            strokeOpacity: 0.5,
          },
        },
      }}
      colors={exactThemeColors}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      motionConfig="gentle"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 10,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 38,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5,
        tickSize: 5,
        tickPadding: 10,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count",
        legendOffset: -45,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={10}
      pointBorderWidth={3}
      pointBorderColor={colors.greenAccent[400]}
      pointLabelYOffset={-12}
      useMesh={true}
      enableCrosshair={true}
      // UPDATED TOOLTIP: Customizes colors for X and Y values specifically
      tooltip={({ point }) => (
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
          {/* Dynamic dot marker following line/series pastel coloring */}
          <Box
            sx={{
              width: 10,
              height: 10,
              backgroundColor: point.color,
              borderRadius: "50%",
              boxShadow: `0 0 10px ${point.color}`,
            }}
          />
          <Typography
            variant="body2"
            sx={{
              color: isDark ? "#ffffff" : "#1a1a1a",
              fontWeight: "600",
              letterSpacing: "0.5px",
            }}
          >
            {/* 1. X Value displayed in greenAccent[500] */}
            <span
              style={{
                color: colors.greenAccent[500],
                textTransform: "capitalize",
              }}
            >
              {point.data.x}
            </span>

            <span style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}>: </span>

            {/* 2. Y Value displayed using its exact matching line color */}
            <span style={{ color: point.color, fontWeight: "700" }}>
              {point.data.yFormatted}
            </span>
          </Typography>
        </Paper>
      )}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 6,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.8,
          symbolSize: 10,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "inherit",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
