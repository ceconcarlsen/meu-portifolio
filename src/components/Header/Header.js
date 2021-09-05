import Link from "next/link";
import React from "react";

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}
        >
          <DiCssdeck size="3rem"/> <Span>Portifólio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
            <NavLink>Projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
            <NavLink>Tecnologias</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
            <NavLink>Sobre</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ceconcarlsen">  
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/gabriel-cecon-carlsen">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/gacecon/">
        <AiFillInstagram size="3rem"></AiFillInstagram>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
