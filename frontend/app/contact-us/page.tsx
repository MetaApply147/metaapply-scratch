import HeroBanner from "@/components/banner/HeroBanner";
import ConnectWithUsSection from "@/components/sections/Pages/contact-us/ConnectWithUs";
import DownloadAppSection from "@/components/sections/Pages/contact-us/DownloadAppSection";
import GetInTouchSection from "@/components/sections/Pages/contact-us/GetInTouchSection";
import StudyCentreSlider from "@/components/sections/StudyCentreSlider";

export default function ContactUs() {
    return (
        <>
            <HeroBanner
                slug="contact-us"
                minHeight={{ xs: 400, sm: 400, lg: 450 }}
                disableSectionPadding
                rightMaxWidth={480}
                alignSelf="flex-end"
            />
            <GetInTouchSection />
            <ConnectWithUsSection />
            <StudyCentreSlider buttonText="Know More" title="Our" highlight="Presence" />
            <DownloadAppSection />
        </>
    )
}