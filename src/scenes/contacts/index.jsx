import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";

import Header from "../../Components/Header";

import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        flex: 0.5,
        minWidth: 70,
      },
      {
        field: "registrarId",
        headerName: "Registrar ID",
        minWidth: 130,
      },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        minWidth: 180,
        cellClassName: "name-column--cell",
      },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        headerAlign: "left",
        align: "left",
        minWidth: 80,
      },
      {
        field: "phone",
        headerName: "Phone",
        flex: 1,
        minWidth: 150,
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
        minWidth: 220,
      },
      {
        field: "address",
        headerName: "Address",
        flex: 1,
        minWidth: 220,
      },
      {
        field: "city",
        headerName: "City",
        flex: 1,
        minWidth: 120,
      },
      {
        field: "zipCode",
        headerName: "Zip Code",
        flex: 1,
        minWidth: 120,
      },
    ],
    [],
  );

  return (
    <Box sx={{ m: "20px" }}>
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />

      <Box
        sx={{
          mt: 4,
          height: "75vh",
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          showToolbar
          slotProps={{
            panel: {
              sx: {
                "& .MuiPaper-root": {
                  backgroundColor: colors.primary[400],
                  backgroundImage: "none",
                  border: `1px solid ${colors.blueAccent[700]}`,
                },
                "& .MuiFormLabel-root, & .MuiInputLabel-root": {
                  color: "#ffffff !important",
                },
                "& .MuiInputBase-root": {
                  color: "#ffffff !important",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255, 255, 255, 0.2) !important",
                  },
                },
                "& .MuiSelect-select": {
                  color: "#ffffff !important",
                },
                "& .MuiIconButton-root": {
                  color: "#ffffff !important",
                },
              },
            },
            basePopper: {
              sx: {
                "& .MuiPaper-root": {
                  backgroundColor: `${colors.primary[400]} !important`,
                  color: "#ffffff !important",
                },
                "& .MuiMenuItem-root:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.08) !important",
                },
              },
            },
          }}
          sx={{
            border: 0,
            "--DataGrid-rowBorderColor": "transparent",

            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },

            "& .MuiDataGrid-toolbarContainer .MuiSvgIcon-root": {
              color: `${colors.grey[100]} !important`,
            },

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
            "& .css-1olccyq-MuiDataGrid-toolbar": {
              backgroundColor: colors.primary[600],
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
