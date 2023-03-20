import React from "react";
import { AboutCompany } from "../../components/AboutCompany/AboutCompany";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";

export const About = () => {
  return (
    <Section>
      <Title>О компании</Title>
      <AboutCompany />
    </Section>
  );
};

export default About;
