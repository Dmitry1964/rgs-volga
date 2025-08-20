import { FC } from 'react';
import { ExamplesWorks } from 'src/features/examples-works';
import { KraneSection } from 'src/features/krane-section';

const ServiceSection: FC = () => {
  return (
    <>
      <KraneSection />
      <ExamplesWorks />
    </>
  );
};

export default ServiceSection;
