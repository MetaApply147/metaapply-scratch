import HeroBanner from '@/components/banner/HeroBanner';
import MediaCoverage from '@/components/sections/MediaCoverage';

export default function MediaCoveragePage() {
    return (
        <>
            <HeroBanner slug="media-coverage" size="medium" />

            <MediaCoverage />
        </>
    );
}