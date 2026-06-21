import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../Components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../Theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ m: "20px" }}>
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: colors.greenAccent[500] }} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ex rem
          expedita, adipisci velit deserunt dolores ducimus hic minus tempora
          est, officiis nesciunt, voluptates explicabo totam? Animi repellendus
          voluptas perferendis!
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: colors.greenAccent[500] }} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ex rem
          expedita, adipisci velit deserunt dolores ducimus hic minus tempora
          est, officiis nesciunt, voluptates explicabo totam? Animi repellendus
          voluptas perferendis!
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: colors.greenAccent[500] }} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ex rem
          expedita, adipisci velit deserunt dolores ducimus hic minus tempora
          est, officiis nesciunt, voluptates explicabo totam? Animi repellendus
          voluptas perferendis!
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: colors.greenAccent[500] }} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ex rem
          expedita, adipisci velit deserunt dolores ducimus hic minus tempora
          est, officiis nesciunt, voluptates explicabo totam? Animi repellendus
          voluptas perferendis!
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary ExpandMoreIcon={<ExpandMoreIcon />}>
          <Typography sx={{ color: colors.greenAccent[500] }} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ex rem
          expedita, adipisci velit deserunt dolores ducimus hic minus tempora
          est, officiis nesciunt, voluptates explicabo totam? Animi repellendus
          voluptas perferendis!
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default FAQ;
