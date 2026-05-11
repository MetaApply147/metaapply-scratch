import HeroBanner from "@/components/banner/HeroBanner";
import CoCeoSection from "@/components/sections/Pages/about-us/CoCeoSection";
import DrivesUsSection from "@/components/sections/Pages/about-us/DriveUsSection";
import GallerySection from "@/components/sections/Pages/about-us/GallerySection";
import GlobalJourneyCTA from "@/components/sections/Pages/about-us/GlobalJourneyCTA";
import OurStorySection from "@/components/sections/Pages/about-us/OurStorySection";
import ProgressSection from "@/components/sections/Pages/about-us/ProgressSection";
import StudyAbroadCentresSection from "@/components/sections/Pages/about-us/StudyAbroadCentresSection";

export default function AboutUs() {
    return (
        <>
            <HeroBanner
                slug="about-us"
                minHeight={{ xs: 400, sm: 400, lg: 720 }}
                disableSectionPadding
                rightMaxWidth={580}
            />
            <OurStorySection />
            <CoCeoSection />
            <DrivesUsSection />
            <ProgressSection />
            <StudyAbroadCentresSection/>
            <GallerySection/>
            <GlobalJourneyCTA/>
        </>
    )
}