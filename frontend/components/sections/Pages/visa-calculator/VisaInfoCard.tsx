import { Box, Typography } from "@mui/material";
import styles from "./visaCalculator.module.css";
import Image from "next/image";

const pointers = [
    {title: 'VISA approval rates vary by region.'},
    {title: 'VISA officers don’t read every word of your SOP.'},
    {title: 'The VISA interview is relatively easy to pass; it just depends on your confidence.'},
    {title: 'Some countries don’t require financial proof if you have a scholarship.'},
    {title: 'VISA officers may check your social media to assess your intent for a student visa.'},
    {title: 'VISA denials aren’t always final; you can reapply without a waiting period.'},
    {title: 'Keep your VISA application tailored to the specific requirements of the country.'},
]

export default function VisaInfoCard() {
  return (
    <Box className={styles.infoCard}>
      <Box>
        <Typography variant="heading10" component='h4' fontWeight={700} mb={3}>
          Did you know?
        </Typography>

        <Box>
            {pointers.map((item, index)=>{
                return(
                    <Box key={index} className={styles.list}>
                        <Image src="/calculator/Vector-whitestar.png" alt="Star" height={18} width={20} style={{objectFit: 'contain'}}/>
                        <Typography variant="body06" component='p'>{item.title}</Typography>
                    </Box>
                )
            })}
        </Box>
      </Box>

      <Box sx={{height: '317px', position: 'relative', width: 'auto'}}>
        <Image src='/calculator/file.png' alt="Visa" fill style={{objectFit: 'contain'}}/>
      </Box>
    </Box>
  );
}
