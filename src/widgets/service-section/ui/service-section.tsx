import { FC } from 'react';
import { KraneSection } from 'src/features/krane-section';
import { WorkExamples } from 'src/features/work-example';
import cls from './service-section.module.scss';

const ServiceSection: FC = () => {
  return (
    <section className={cls.service_section}>
      <KraneSection />
      <WorkExamples />
    </section>
  );
};

export default ServiceSection;
