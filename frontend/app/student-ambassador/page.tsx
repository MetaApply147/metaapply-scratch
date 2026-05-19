import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/Pages/student-ambassador/HeroSection";
import HowToApplySection from "@/components/sections/Pages/student-ambassador/HowToApplySection";
import JoinRevolutionCTA from "@/components/sections/Pages/student-ambassador/JoinRevolutionCTA";
import { MakeYourMark } from "@/components/sections/Pages/student-ambassador/MakeYourMark";
import PerksProgramSection from "@/components/sections/Pages/student-ambassador/PerksProgram";
import RolesResponsibilities from "@/components/sections/Pages/student-ambassador/RolesAndResponsibilties";
import SuccessStories from "@/components/sections/SuccessStories";

export default function StudentAmbassador() {

    return (
        <>
            <HeroSection />
            <MakeYourMark />
            <RolesResponsibilities />
            <PerksProgramSection />
            <HowToApplySection />
            <SuccessStories page="student-ambassador" />
            <FAQSection page="student-ambassador" disablePadding />
            <JoinRevolutionCTA />
        </>
    )
}