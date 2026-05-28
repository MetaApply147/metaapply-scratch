import HeroBanner from "@/components/banner/HeroBanner";
import FAQSection from "@/components/sections/FAQSection";
import GlobalJourneyCTA from "@/components/sections/GlobalJourneyCTA";
import CentreFactsSection from "@/components/sections/Pages/centreInner/CentreFactsSection";
import CentreGallery from "@/components/sections/Pages/centreInner/CentreGallery";
import CentreHeadMessage from "@/components/sections/Pages/centreInner/CentreHeadSection";
import EndToEnd from "@/components/sections/Pages/centreInner/EndToEnd";
import SocialPlatformSectionCentre from "@/components/sections/Pages/centreInner/SocialPlatformSectionCentre";
import PopularDestinations from "@/components/sections/PopularDestinations";
import StudyCentreSlider from "@/components/sections/StudyCentreSlider";
import SuccessStories from "@/components/sections/SuccessStories";
import { getServices } from "@/services/httpServices";

type Props = {
  params: {
    slug: string;
  };
};

const CentreDetailPage = async ({ params }: Props) => {
  const { slug } = await params;

  const response = await getServices("/centres", {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      hero: {
        populate: "*",
      },
      gallerySection : {
        populate: "*"
      },
      centreImage : {
        populate: "*"
      }
    },
  });

  const centreData = response?.data?.data?.[0];

  if (!centreData) {
    return <h2>No Centre Found</h2>;
  }

  return (
    <>
      <HeroBanner slug={centreData.slug} heroData={centreData.hero} isList={true} leftComponentWidth={'50%'} minHeight={700}/>

      <EndToEnd/>

      <CentreFactsSection data={centreData} />

      <CentreGallery gallery={centreData?.gallerySection}/>

      <PopularDestinations/>

      <GlobalJourneyCTA title="Visit Us for a Free 1:1 Counselling Session" buttonText="Book a Visit"/>

      <SuccessStories page={centreData.slug}/>

      <StudyCentreSlider disablePadding title="Other" highlight="Study Abroad Centres" />

      <FAQSection page={centreData.slug}/>

      <SocialPlatformSectionCentre facebookUrl={centreData.facebookLink} instagramUrl={centreData.instaLink}/>
    </>
  );
};

export default CentreDetailPage;