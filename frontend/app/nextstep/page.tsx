import AboutNextstep from "@/components/sections/Pages/nextstep/AboutNextstep";
import HeroBanner from "@/components/sections/Pages/nextstep/HeroBanner";
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
        </>
    )
}