import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Theme.jsx";
import Header from "../../Components/Header.jsx";
import { mockTransactions } from "../../Data/mockData.jsx";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../Components/LineChart.jsx";
import BarChart from "../../Components/BarChart.jsx";
import GeographyChart from "../../Components/GeographyChart.jsx";
import StatBox from "../../Components/StatBox.jsx";
import ProgressCircle from "../../Components/ProgressCircle.jsx";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ m: "20px" }}>
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Header title={"DASHBOARD"} subtitle={"Welcome to Your Dashboard"} />
        {/* Action Button */}
        <Box sx={{ mt: "20px", mb: "20px" }}>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              p: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} /> Download Reports
          </Button>
        </Box>
      </Box>

      {/* Grid & Charts */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridAutoRows: "180px",
          gap: "20px",
        }}
      >
        {/* Row 1 - Stat Boxes */}
        <Box
          sx={{
            gridColumn: "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title={"12,361"}
            subtitle={"Emails"}
            progress={"0.75"}
            increase={"+14%"}
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          sx={{
            gridColumn: "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title={"431,225"}
            subtitle={"Sales Obtained"}
            progress={"0.5"}
            increase={"+21%"}
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          sx={{
            gridColumn: "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title={"32,441"}
            subtitle={"New Clients"}
            progress={"0.30"}
            increase={"+5%"}
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          sx={{
            gridColumn: "span 3",
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatBox
            title={"1,325,123"}
            subtitle={"Traffic Inbound"}
            progress={"0.80"}
            increase={"+43%"}
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Row 2 */}
        <Box
          sx={{
            gridColumn: "span 8",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
          }}
        >
          <Box
            sx={{
              mt: "15px",
              p: "0 30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "600", color: colors.greenAccent[600] }}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bold", color: colors.grey[100] }}
              >
                $59,342,320
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ height: "250px", mt: "-10px" }}>
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Transactions Section */}
        <Box
          sx={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `4px solid ${colors.primary[500]}`,
              color: colors.grey[100],
              p: "15px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: colors.greenAccent[600],
                fontWeight: "600",
              }}
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `4px solid ${colors.primary[500]}`,
                p: "15px",
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{ color: colors.grey[100], fontWeight: "600" }}
                >
                  {transaction.txId}
                </Typography>
                <Typography sx={{ color: colors.grey[100] }}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box sx={{ color: colors.grey[100] }}> {transaction.date} </Box>
              <Box
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  p: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                {transaction.value}
              </Box>
            </Box>
          ))}
        </Box>
        {/* Row 3 */}
        <Box
          sx={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            p: "30px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "600", color: colors.greenAccent[500] }}
          >
            Campaign
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: "25px",
            }}
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              sx={{ color: colors.greenAccent[500], mt: "15px" }}
            >
              48.352 Revenue Generated
            </Typography>
            <Typography>Includes extra misc expenitures and costs</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              p: "30px 30px 0 30px",
              color: colors.greenAccent[500],
            }}
          >
            Sales Quantity
          </Typography>
          <Box
            sx={{
              height: "300px",
            }}
          >
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          sx={{
            gridColumn: "span 4",
            gridRow: "span 2",
            backgroundColor: colors.primary[400],
            p: "30px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "600",
              mb: "15px",
              color: colors.greenAccent[500],
            }}
          >
            Geography Based Traffic
          </Typography>
          <Box
            sx={{
              height: "250px",

              mt: "-20px",
            }}
          >
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>

        {/*  */}
      </Box>
    </Box>
  );
};

export default Dashboard;
