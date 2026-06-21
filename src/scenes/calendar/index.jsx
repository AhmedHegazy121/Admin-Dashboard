import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import Header from "../../Components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Initialize state directly with your default events so they display everywhere
  const [currentEvents, setCurrentEvents] = useState([
    { id: "1234", title: "All-day event", start: "2026-06-18", allDay: true },
    { id: "2234", title: "Timed event", start: "2026-06-25" },
  ]);

  const handleDateClick = (selected) => {
    const title = prompt("please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };
      // Update local state directly
      setCurrentEvents([...currentEvents, newEvent]);
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`,
      )
    ) {
      // Filter out the deleted event from state
      setCurrentEvents(
        currentEvents.filter((event) => event.id !== selected.event.id),
      );
    }
  };

  return (
    <Box sx={{ m: "20px" }}>
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Start Calendar Sidebar */}
        <Box
          sx={{
            flex: "1 1 20%",
            backgroundColor: colors.primary[400],
            p: "15px",
            borderRadius: "4px",
          }}
        >
          <Typography variant="h5">Events ({currentEvents.length})</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography variant="caption">
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Start Calendar */}
        <Box
          sx={{
            flex: "1 1 100%",
            m: "0 0 0 15px",
            // 1. Target the toolbar layout
            "& .fc-header-toolbar": {
              display: "flex",
              alignItems: "center",
            },
            // 2. Target the right side buttons chunk to give them a 20px margin
            "& .fc-header-toolbar .fc-toolbar-chunk:last-child": {
              marginRight: "30px",
            },
            // 3. Make all toolbar buttons bigger
            "& .fc-button": {
              padding: "10px 20px !important", // Increases button thickness/size
              margin: "5px 10px !important", // Increases button thickness/size
              fontSize: "14px !important", // Increases text size inside buttons
              fontWeight: "bold",
            },
          }}
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title", // This will now follow your custom format
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            titleFormat={{ year: "numeric", month: "short" }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            events={currentEvents}
          />
        </Box>
        {/* End Calendar */}
      </Box>
    </Box>
  );
};

export default Calendar;
