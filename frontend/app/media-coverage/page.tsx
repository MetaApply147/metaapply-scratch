import CentreTextHeroSection from '@/components/banner/CentreTextHeroSection';
import HeroBanner from '@/components/banner/HeroBanner';
import MediaCoverage from '@/components/sections/MediaCoverage';

export default function MediaCoveragePage() {
    return (
        <>
            <CentreTextHeroSection slug="media-coverage" minHeight={{ xs: 400, sm: 500, lg: 600 }}/>

            <MediaCoverage />
        </>
    );
}
