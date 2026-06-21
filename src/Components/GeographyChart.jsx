import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures";
import { tokens } from "../theme";
import { mockGeographyData as data } from "../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: { line: { stroke: colors.grey[100] } },
          legend: { text: { fill: colors.grey[100] } },
          ticks: {
            line: { stroke: colors.grey[100], strokeWidth: 1 },
            text: { fill: colors.grey[100] },
          },
        },
        legends: { text: { fill: colors.grey[100], fontSize: 12 } },
        // Smooth transition effect on hover
        transitions: {
          hover: {
            type: "tween",
            duration: 150,
          },
        },
      }}
      features={geoFeatures.features}
      margin={
        isDashboard
          ? { top: 0, right: 0, bottom: 0, left: 0 }
          : { top: 0, right: 0, bottom: 40, left: 0 }
      }
      domain={[0, 1000000]}
      unknownColor={theme.palette.mode === "dark" ? "#333333" : "#e0e0e0"} // Dynamic color for missing data
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      // Better borders: thinner lines look cleaner
      borderWidth={0.5}
      borderColor={theme.palette.mode === "dark" ? "#141b2d" : "#ffffff"}
      // 1. Stylish Tooltip combining Name and Quantity
      tooltip={({ feature }) => {
        if (!feature.data) {
          return (
            <div
              style={{
                padding: "6px 10px",
                background: colors.primary[400] || "#222",
                color: colors.grey[100],
                fontSize: "13px",
                borderRadius: "4px",
                boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
              }}
            >
              <strong>{feature.properties.name}</strong>: No Data
            </div>
          );
        }
        return (
          <div
            style={{
              padding: "8px 12px",
              background: theme.palette.mode === "dark" ? "#1F2A40" : "#FFFFFF",
              color: colors.grey[100],
              fontSize: "13px",
              borderRadius: "6px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              border: `1px solid ${colors.grey[700]}`,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span
              style={{
                fontWeight: "600",
                color: colors.greenAccent?.[500] || "#4cceac",
              }}
            >
              {feature.properties.name}
            </span>
            <span style={{ fontSize: "12px", opacity: 0.9 }}>
              value: <strong>{feature.value}</strong>
            </span>
          </div>
        );
      }}
      // Color scheme customization (Optional: uncomment to use custom palette)
      // colors="nivo"

      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -60,
                itemsSpacing: 4,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 16,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor:
                        theme.palette.mode === "dark" ? "#ffffff" : "#000000",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GeographyChart;
