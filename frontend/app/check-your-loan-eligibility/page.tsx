"use client";

import HeroBanner from "@/components/banner/HeroBanner";
import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import { Box, Button } from "@mui/material";
import Script from "next/script";
import styles from "./style.module.css";

export default function CheckYourLoanEligibilityPage() {
    return (
        <>
            {/* HERO BANNER */}
            <HeroBanner
                slug="check-your-loan-eligibility"
                minHeight={{ xs: 400, sm: 400, lg: 450 }}
                size="medium"
                disableSectionPadding
                rightMaxWidth={480}
                alignSelf="flex-end"
            />

            {/* SCRIPTS */}
            <Script
                src="https://emicalculator.net/widget/2.0/js/emicalc-loader.min.js"
                strategy="afterInteractive"
            />

            <Script
                src="https://static.elfsight.com/platform/platform.js"
                strategy="afterInteractive"
            />

            <Section spacing="lg">
                <SectionHeader title="Education Loan" highlight="EMI Calculator" />
                
                 <Box
                className={`elfsight-app-98378002-447c-4b6f-8cd7-ddc4e12451a7 loan-calc-widget ${styles.container}`}
                data-elfsight-app-lazy
                ></Box>

                <Button variant="contained" size="large" className={styles.button}>
                    Apply Education Loan Today
                </Button>
            </Section>
        </>
    );
}