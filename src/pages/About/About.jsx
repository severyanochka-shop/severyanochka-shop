import React from "react";
import { AboutCompany } from "../../components/AboutCompany/AboutCompany";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";
import s from "./About.module.scss";

const About = () => {
  return (
    <Section>
      <Title className={s.title}>О компании</Title>
      <AboutCompany />
    </Section>
  );
};

export default About;
