import HeroBanner from '@/components/banner/HeroBanner';
import CTASectionCommon from '@/components/sections/CTASectionCommon';
import FranchiseJourney from '@/components/sections/Pages/franchaise-partner/FranchiseJourney';
import FranchisePartnership from '@/components/sections/Pages/franchaise-partner/FranchisePartnership';
import IdealPartnerProfile from '@/components/sections/Pages/franchaise-partner/IdealPartnerProfile';
import WhyChooseFranchise from '@/components/sections/Pages/franchaise-partner/WhyChooseFranchise';
import PartneredUniversities from '@/components/sections/PartneredUniversities';
export default function FranchisePartnerPage() {

    return (
        <>
            <HeroBanner slug="franchaise-partner"
                isList={true}
                minHeight={{ xs: 400, sm: 400, lg: 720 }}
                disableSectionPadding />
            <FranchisePartnership />
            <WhyChooseFranchise />
            <FranchiseJourney />
            <IdealPartnerProfile />
            <PartneredUniversities />
            <CTASectionCommon
                title="Partner with MetaApply to bring global education closer to every student"
                buttonText="Become a Franchise Partner"
                image="/franchise-partner/CTA-img.svg"
                
                componentSx={{
                    pt: { xs: 0, md: 0 }, mt:{ xs: 0, md: 0 }
                }}
                sectionSx={{
                    minHeight: {
                        xs: "auto",
                        md: "475px",
                    },

                    pt: {
                        xs: 5,
                        md: 9,
                    },

                    pb: {
                        xs: "280px",
                        sm: "320px",
                        md: "90px",
                    },

                    px: {
                        xs: 3,
                        sm: 4,
                        md: 10,
                    },
                }}

                contentSx={{
                    maxWidth: {
                        xs: "100%",
                        md: "48%",
                    },

                    textAlign: {
                        xs: "center",
                        md: "left",
                    },

                    mx: {
                        xs: "auto",
                        md: 0,
                    },

                    position: "relative",
                    zIndex: 5,
                }}

                imageSx={{
                    right: {
                        xs: "50%",
                        md: 10,
                        lg: -5,
                    },

                    transform: {
                        xs: "translateX(50%)",
                        md: "none",
                    },

                    width: {
                        xs: "240px",
                        sm: "300px",
                        md: "520px",
                        lg: "620px",
                    },

                    height: {
                        xs: "300px",
                        sm: "360px",
                        md: "520px",
                        lg: "620px",
                    },

                    bottom: 0,
                }}
            />

            
        </>
    );
}

