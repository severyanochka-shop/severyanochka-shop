import React from "react";
import { Contacts as ContactsComponent } from "../../components/Contacts/Contacts";
import { Section } from "../../layout/Section/Section";
import { Title } from "../../layout/Title/Title";
import s from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <Section>
      <Title className={s.title__contact}>Контакты</Title>
      <ContactsComponent />
    </Section>
  );
};

export default Contacts;
