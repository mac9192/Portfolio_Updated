import React from "react";
import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from '@react-email/components';
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  senderName: string;
  senderEmail: string;
  senderSubject:string;
  senderMessage: string;
};

export default function ContactFormEmail({
  senderMessage,
  senderEmail,
  senderSubject,
  senderName

}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{senderMessage}</Text>
              <Hr />
              <Text>The sender's name is: {senderName}</Text>
              <Text>The sender's email is: {senderEmail}</Text>
              <Hr />
              <Text>The sender's subject is: {senderSubject}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}