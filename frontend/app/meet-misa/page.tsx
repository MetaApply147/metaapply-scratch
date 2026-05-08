import FAQSection from "@/components/sections/FAQSection";
import AboutSection from "@/components/sections/Pages/meet-misa/AboutSection";
import GuidanceSection from "@/components/sections/Pages/meet-misa/GuidanceSection";
import NumbersSection from "@/components/sections/Pages/meet-misa/NumbersSection";
import SocialPlatformSection from "@/components/sections/Pages/meet-misa/SocialPlatformSection";
import StudyJourneyCTA from "@/components/sections/Pages/meet-misa/StudyJourneyCTA";
import WordsOfWisdomSection from "@/components/sections/Pages/meet-misa/WordsOfWisdomSection";

export default function MeetMisa() {
    return(
        <>
        <AboutSection/>
        <GuidanceSection/>
        <NumbersSection/>
        <StudyJourneyCTA/>
        <WordsOfWisdomSection/>
        <FAQSection page="meet-misa" />
        <SocialPlatformSection/>
        </>
    )
}