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
                ImageWidth="620px"

                sectionSx={{
                    minHeight: {
                        xs: "620px",
                        md: "475px",
                    },

                    pb: {
                        xs: "320px",
                        md: "90px",
                    },
                }}

                contentSx={{
                    maxWidth: {
                        xs: "100%",
                        md: "48%",
                    },
                }}

                imageSx={{
                    right: {
                        md: 10,
                        lg: -5,
                    },

                    width: {
                        md: "620px",
                    },

                    height: {
                        md: "620px",
                    },
                }}
            />
        </>
    );
}

