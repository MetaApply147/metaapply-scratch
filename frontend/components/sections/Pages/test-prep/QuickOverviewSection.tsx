import Section from '@/components/common/Section';
import SectionHeader from '@/components/common/SectionHeader';

export default function QuickOverviewSection() {
      return (
        <Section
              sx={{
                background:
                  'url(/test-prep/Background-2.webp)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  '&::before': {
                        content: '""',
                        position: 'absolute',
                        height: '90%',
                        width: '90%',
                        bottom: '50px',
                        backgroundSize: '642px auto',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        zIndex: 0
                    }
              }}
            >
                <SectionHeader title='Exams to Study Abroad-' highlight='A Quick Overview' />
            </Section>
      )
}