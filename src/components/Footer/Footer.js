import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+55 18 997922541">+55 18 997922541</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:ceconcarlsen@gmail.com">
            ceconcarlsen@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Fix your life.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/ceconcarlsen">
            <AiFillGithub size="3rem"></AiFillGithub>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/gabriel-cecon-carlsen">
            <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/gacecon/">
            <AiFillInstagram size="3rem"></AiFillInstagram>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
