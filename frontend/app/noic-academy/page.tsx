import HeroBanner from "@/components/banner/HeroBanner";
import DynamicLeadForm from "@/components/forms/DynamicLeadForm";
import FAQSection from "@/components/sections/FAQSection";
import AboutNoic from "@/components/sections/Pages/noic-academy/AboutNoic";
import AdmissionProcess from "@/components/sections/Pages/noic-academy/AdmissionProcess";
import OSSDMethods from "@/components/sections/Pages/noic-academy/OssdMethods";
import { baseFields } from "@/config/forms/base.fields";
import Box from "@mui/material/Box";

export default function NoicAcademy() {
    return (
        <>
            <Box
                sx={{
                    "& section": {
                        backgroundColor: "#222466 !important",
                        backgroundBlendMode: "overlay",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    },
                }}
            >
                <HeroBanner
                    slug="noic-academy"
                    minHeight={{ xs: 400, sm: 400, lg: 450 }}
                    size="medium"
                    rightMaxWidth={580}
                    alignSelf="flex-end"
                    rightComponent={
                        <DynamicLeadForm
                            schema={{
                                formId: "noic-academy",
                                fields: baseFields
                            }}
                            Setwidth={'84%'}
                        />
                    }

                />
            </Box>
            <AboutNoic />
            <OSSDMethods />
            <AdmissionProcess />
            <FAQSection page="noic" />
        </>
    )
}