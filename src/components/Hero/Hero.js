import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Gabriel Cecon Carlsen
      </SectionTitle>
      <SectionText>
        Estudante de Ciência da Computação pela FTC-UNESP Presidente Prudente. Apaixonado por Tecnologia,
        Economia e Comportamento Humano.
      </SectionText>
      <Button onClick={()=> window.location = "https://gmail.com"}></Button>
    </LeftSection>
  </Section>
);

export default Hero;