import HeroBanner from '@/components/banner/HeroBanner';
import MediaCoverage from '@/components/sections/MediaCoverage';

export default function MediaCoveragePage() {
    return (
        <>
            <HeroBanner slug="media-coverage" minHeight={{ xs: 400, sm: 500, lg: 600 }} size="medium" />

            <MediaCoverage />
        </>
    );
}