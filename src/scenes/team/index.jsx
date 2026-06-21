import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";
import { tokens } from "../../Theme.jsx";
import { mockDataTeam } from "../../Data/mockData.jsx";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../Components/Header.jsx";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID" },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
      },
      { field: "email", headerName: "Email", flex: 1 },
      { field: "phone", headerName: "Phone", flex: 1 },
      {
        field: "access",
        headerName: "Access Level",
        flex: 1,
        renderCell: (params) => {
          const access = params.row.access;

          return (
            <Box
              sx={{
                width: "60%",
                m: "9px auto",
                p: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  access === "admin"
                    ? colors.greenAccent[600]
                    : colors.greenAccent[700],
                borderRadius: "4px",
              }}
            >
              {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
              {access === "manager" && <SecurityOutlinedIcon />}
              {access === "user" && <LockOpenOutlinedIcon />}
              <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                {access}
              </Typography>
            </Box>
          );
        },
      },
    ],
    [colors],
  );

  return (
    <Box sx={{ m: "20px" }}>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box sx={{ m: "40px 0 0 0", height: "75vh" }}>
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          sx={{
            border: 0,
            "--DataGrid-rowBorderColor": "transparent",

            "& .MuiDataGrid-cell": {
              border: "none",
              borderBottom: "none",
            },

            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },

            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },

            "& .MuiDataGrid-columnHeader": {
              border: "none",
              backgroundColor: colors.blueAccent[700],
            },

            "& .MuiDataGrid-columnHeaderTitleContainer": {
              backgroundColor: colors.blueAccent[700],
            },

            "& .MuiDataGrid-columnSeparator": {
              display: "none",
            },

            "& .MuiDataGrid-columnHeader--sortable": {
              backgroundColor: colors.blueAccent[700],
            },

            "& .MuiDataGrid-menuIcon": {
              backgroundColor: colors.blueAccent[700],
            },

            "& .MuiDataGrid-row": {
              border: "none",
            },

            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },

            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },

            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Team;
