import { Box, Container, Typography } from "@mui/material";
import styles from "./visaCalculator.module.css";
import VisaCalculatorForm from "./VisaCalculatorForm";
import VisaInfoCard from "./VisaInfoCard";
import SectionHeader from "@/components/common/SectionHeader";

export default function VisaCalculator() {
    return (
        <section className={styles.wrapper}>
            <Container>
                <Typography variant="heading07" component="h2" sx={{lineHeight: "normal", color: '#2e318c', fontWeight: 300, mb: 4}}>
                    Check how strong is your {" "}
                    <Box component="span" sx={{ fontWeight: 'bold' }}>
                        Visa Score
                    </Box>
                </Typography>

                <div className={styles.flex}>
                    <VisaCalculatorForm />
                    <VisaInfoCard />
                </div>
            </Container>
        </section>
    );
}