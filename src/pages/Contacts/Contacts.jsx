import React from "react";
import { Contacts as ContactsComponent } from "../../components/Contacts/Contacts";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";

export const Contacts = () => {
  return (
    <Section>
      <Title>Контакты</Title>
      <ContactsComponent />
    </Section>
  );
};

export default Contacts;
