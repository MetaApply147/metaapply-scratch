import Section from "@/components/common/Section";
import SectionHeader from "@/components/common/SectionHeader";
import ImageBoxes from "@/components/sections/Pages/centreInner/ImageBoxes";
import { Typography } from "@mui/material";

const cardsData = [
  {
    image: "/centres/Tailored-guidance.svg",
    cardTitle: "Tailored Guidance",
    cardDescription:
      "We understand every student has different goals to achieve which require personalised guidance. Our team of professionals offer one-on-one assistance and help students find the perfect course and university abroad.",
  },
  {
    image: "/centres/Application-Assistance.svg",
    cardTitle: "Application Assistance",
    cardDescription:
      "Our team guides you through the tedious application process. From handling the required documentation and deadlines of different universities to helping you with SOP and LOR, we cater to all.",
  },
  {
    image: "/centres/Global-reach.svg",
    cardTitle: "Global Reach",
    cardDescription:
      "With 350+ partnered universities and 2000+ recruitment partners connected with us globally, we have become a trusted name. Our extensive network will help you find the perfect university abroad.",
  },
  {
    image: "/centres/VISA-Support.svg",
    cardTitle: "Visa Support",
    cardDescription:
      "Different countries require different study visas and have varying processes. To ensure a smooth application, our team handles everything—from documentation to visa interviews and slot booking.",
  },
  {
    image: "/centres/Exam-prep.svg",
    cardTitle: "Exam Preparation",
    cardDescription:
      "Our expert team helps you prepare for English proficiency exams like IELTS, TOEFL, and PTE, ensuring you are exam-ready in just 4 weeks, making your study abroad journey smoother.",
  },
  {
    image: "/centres/Financial-asst..svg",
    cardTitle: "Financial Assistance",
    cardDescription:
      "We help make your study abroad dream a reality by securing funding. Partnered with top banks, our experts assist you in obtaining education loans, ensuring a worry-free journey.",
  },
];

export default function EndToEnd(){
    return(
        <Section spacing="lg">
            <SectionHeader highlight="Your End-to-End Partner" title="in Global Education" highlightPosition="start"/>

            <Typography component='p' variant="body05" color="text.secondary" textAlign={"center"}>MetaApply is the trusted synonym of study abroad services. Our professionals understand the importance of your study abroad dream and hence, we provide you with a smooth, hassle-free journey to your dream study destination. From college shortlisting, application assistance, and English proficiency exam support to visa counselling, education loan funding, and accommodation assistance we cater to it all.</Typography>

            <ImageBoxes cards={cardsData}/>
        </Section>
    )
}