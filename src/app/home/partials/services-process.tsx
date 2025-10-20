import React from 'react';

import Section from '@/components/layouts/Section';
import PhasesAccordion, {
  PhasesAccordionItem,
} from '@/components/phases-accordion';

import { serviceProcessData } from '@/constants/services-process-data';

const ServicesProcess = () => {
  return (
    <Section
      id='services-process'
      title='How We Work'
      subtitle='A structured process to bring your ideas to life—seamless, efficient, and tailored to your needs'
    >
      <PhasesAccordion>
        {serviceProcessData.map((item, i) => (
          <PhasesAccordionItem key={i} {...item} />
        ))}
      </PhasesAccordion>
    </Section>
  );
};

export default ServicesProcess;
