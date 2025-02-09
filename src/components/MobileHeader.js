import React from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaDribbble, FaInstagram } from "react-icons/fa";

const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0 10px 0;
  background: rgba(92, 92, 82, 0.21);
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:first-child {
    background: black;
    color: white;
  }

  &:nth-child(2) {
    background: white;
    color: black;
    border: 2px solid black;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 100%;
`;

const IconButton = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s;
  color: black;

  &:hover {
    transform: scale(1.1);
  }
`;

function Header() {
  const email = "ankkitseth@gmail.com";

  // Function to open the user's email client
  const openEmailClient = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <MobileHeader>
      <MobileButtons>
        <Button onClick={openEmailClient}>Email</Button>
        <Button>CV</Button>
      </MobileButtons>
      <SocialIcons>
        <IconButton href="https://www.linkedin.com/in/ankkit-seth-495182237" aria-label="LinkedIn">
          <FaLinkedinIn />
        </IconButton>
        <IconButton href="https://dribbble.com/" aria-label="Dribbble">
          <FaDribbble/>
        </IconButton>
        <IconButton href="https://www.instagram.com/" aria-label="Instagram">
          <FaInstagram/>
        </IconButton>
      </SocialIcons>
    </MobileHeader>
  );
}

export default Header;
