import FAQSection from "@/components/sections/FAQSection";
import AboutNextstep from "@/components/sections/Pages/nextstep/AboutNextstep";
import HelpsStudents from "@/components/sections/Pages/nextstep/HelpsStudents";
import HeroBanner from "@/components/sections/Pages/nextstep/HeroBanner";
import NextStepCTA from "@/components/sections/Pages/nextstep/NextstepCTA";
import NextstepSuccessStories from "@/components/sections/Pages/nextstep/NextstepSuccessStories";
import ProgramFormats from "@/components/sections/Pages/nextstep/ProgramFormat";
import WhatMakesNextStep from "@/components/sections/Pages/nextstep/UniqueNextstep";
import WhyNextStep from "@/components/sections/Pages/nextstep/WhyNextstep";
import TwoColumnFormSection from "@/components/sections/TwoColumnFormSection";
import { baseFields } from "@/config/forms/base.fields";

export default function NextStep() {
    const schema = {
        formId: "k-12",
        fields: baseFields,
        extraPayload: {
            mx_Program_Products: "",
            mx_Marketing_Pages: ""
        },
    };
    return(
        <>
            {/* Hero Section */}
            <HeroBanner/>

            {/* About */}
            <TwoColumnFormSection formSchema={schema} formWidth={'84%'} alignEnd>
                <AboutNextstep />
            </TwoColumnFormSection>

            {/* What make nextstep unique */}
            <WhatMakesNextStep/>

            {/* Why nextstep */}
            <WhyNextStep/>

            {/* Nextstep helps students */}
            <HelpsStudents/>

            {/* Program Format */}
            <ProgramFormats/>

            {/* Nextstep CTA */}
            <NextStepCTA/>

            {/* Success Story */}
            <NextstepSuccessStories/>

            {/* FAQs */}
            <FAQSection page="nextstep"/>
        </>
    )
}