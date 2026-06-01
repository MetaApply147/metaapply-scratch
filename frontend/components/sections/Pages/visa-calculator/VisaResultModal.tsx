import { Box, Button, Typography } from "@mui/material";
import styles from "./visaCalculator.module.css";
import InfoIcon from '@mui/icons-material/Info';

type Props = {
  open: boolean;
  result: string;
  responseText: string;
  onClose: () => void;
  modalClass?: string;
};

export default function VisaResultModal({
  open,
  result,
  responseText,
  onClose,
  modalClass,
}: Props) {
  if (!open) return null;

  return (
    <Box className={styles.modalOverlay}>
      <Box className={`${styles.modal} ${modalClass ? styles[modalClass] : ""}`}>
          <Box
            className={styles.modalBox}
        >
            <img src="/calculator/confetti.gif" alt="Confetti" />
            <Typography
            variant="heading07"
            component="h2"
            sx={{ color: "secondary.main" }}
            >
            {responseText}
            </Typography>

            <Box className={styles.result} mt={4}>
            <Typography component="h3" variant="body01">
                {result}
            </Typography>
            </Box>

            <Typography
            component="p"
            variant="body05"
            sx={{ color: "#003537", fontWeight: 600 }}
            mb={3}
            >
            Your Visa Score*
            </Typography>

            <Typography
            component="p"
            variant="body04"
            sx={{ color: "#444444", lineHeight: 'normal' }}
            mb={6.5}
            >
            Our experts will contact you shortly to guide you finalising your
            course and university.
            </Typography>

            <Button onClick={onClose} variant="contained" size="medium" className={styles.button}>Start Over</Button>

            <Box className={styles.disclaimer} mt={5}>
            <InfoIcon sx={{color: '#0059C8', fontSize: '19.5px'}}/>
            <Typography component='p' variant="body07">
                The visa score above is an estimate based on the information you
                have provided; the actual score may vary.
            </Typography>
            </Box>
        </Box>
      </Box>
    </Box>
  );
}
