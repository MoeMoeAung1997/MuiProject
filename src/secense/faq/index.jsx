import { Box, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Header from "../../component/Header";

import AccordionDetails from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Question Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Imporant Question
                    </Typography>
                </AccordionSummary>
                <AccordionSummary>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic tempora, autem, accusantium alias, quasi odit possimus ipsa temporibus blanditiis nihil doloribus? Illo commodi possimus fugit ullam! Tempora vitae impedit quasi!
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another Imporant Question
                    </Typography>
                </AccordionSummary>

                <AccordionSummary>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic tempora, autem, accusantium alias, quasi odit possimus ipsa temporibus blanditiis nihil doloribus? Illo commodi possimus fugit ullam! Tempora vitae impedit quasi!
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Your fovoriate Imporant Question
                    </Typography>
                </AccordionSummary>

                <AccordionSummary>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic tempora, autem, accusantium alias, quasi odit possimus ipsa temporibus blanditiis nihil doloribus? Illo commodi possimus fugit ullam! Tempora vitae impedit quasi!
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Random Question
                    </Typography>
                </AccordionSummary>

                <AccordionSummary>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic tempora, autem, accusantium alias, quasi odit possimus ipsa temporibus blanditiis nihil doloribus? Illo commodi possimus fugit ullam! Tempora vitae impedit quasi!
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        The Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionSummary>
                    <Typography>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic tempora, autem, accusantium alias, quasi odit possimus ipsa temporibus blanditiis nihil doloribus? Illo commodi possimus fugit ullam! Tempora vitae impedit quasi!
                    </Typography>
                </AccordionSummary>
            </Accordion>


        </Box>
    )
}

export default FAQ;