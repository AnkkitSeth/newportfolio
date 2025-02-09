import React from "react";
import styled from "styled-components";
import Handshake from "../assets/handshake.png";
import { FaLinkedinIn, FaDribbble, FaInstagram } from "react-icons/fa";

const Wrapper = styled.section`
  text-align: center;
  overflow-x: hidden;
`;

const OutContainer = styled.div`
  padding: 40px 0 0 0;
  background-color: rgba(92, 92, 82, 0.21);
`;

const InContainer = styled.div`
  background: white;
  border-radius: 120px 120px 0px 0px;
  display: flex;
  padding: 70px 0px 0px 0;
  justify-content: center;
`;

const HandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, rgba(92, 92, 82, 0.2), rgba(92, 92, 82, 0.02));
  border-radius: 50%;
  width: 170px;
  height: 170px;
  padding: 20px;

  @media (max-width: 576px) {
    width: 130px;
    height: 130px;
  }
`;

const HandImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TitleContainer = styled.div`
  font-family: 'PT Sans Narrow', sans-serif;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 50px;

  @media (max-width: 576px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 75px;
  font-weight: 700;
  background: linear-gradient(90deg, #000, #555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.3;

  @media (max-width: 576px) {
    font-size: 40px;
  }
`;

const EmWhContainer = styled.div`
  display: flex;
  padding: 0px 0 70px 0;
  gap: 20px;
  justify-content: center;
`;

const ActionButton = styled.a`
  border-radius: 40px;
  border: 5px solid rgba(92, 92, 82, 0.28);
  padding: 18px 22px;
  width: 200px;
  color: ${(props) => (props.black ? "white" : "black")};
  background: ${(props) => (props.black ? "black" : "white")};
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 576px) {
    padding: 12px 12px;
    width: 150px;
  }
`;

const Linediv = styled.div`
  height: 3px;
  background-color: rgba(92, 92, 82, 0.21);
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 65px 80px 70px 80px;
  background: white;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CopyrightBox = styled.div`
  font-size: 16px;
`;

const SocialBox = styled.div`
  display: flex;
  gap: 10px;

  a {
    text-decoration: none;
    color: black;
    font-size: 17.5px;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const MobileFooter = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: white;
  text-align: center;
  gap:10px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  
  justify-content: center;

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
  border: 2px solid #d1d1d1;
  color: black;

  &:hover {
    transform: scale(1.1);
  }
`;

function Contact() {
  const email = "ankkitseth@gmail.com";
  const meetingLink = "https://cal.com/ankkitseth/letsbuild";

  return (
    <Wrapper>
      <OutContainer>
        <InContainer>
          <TitleContainer>
            <HandContainer>
              <HandImageStyled src={Handshake} alt="Handshake" />
            </HandContainer>
            <Title>
              Tell me about your next<br /> project
            </Title>
            <EmWhContainer>
              {/* Updated Email Button */}
              <ActionButton 
                black 
                href={`mailto:${email}?subject=Inquiry&body=Hi Ankkit, I am interested in discussing a project.`}
              >
                Email Me
              </ActionButton>
              {/* Schedule a Meeting Button */}
              <ActionButton 
                href={meetingLink} 
                target="_blank"
              >
                Schedule a Meeting
              </ActionButton>
            </EmWhContainer>
          </TitleContainer>
          <Linediv></Linediv>
        </InContainer>
        
        {/* Default Footer */}
        <Footer>
          <CopyrightBox>
            <h4>2024 All rights reserved.</h4>
          </CopyrightBox>
          <SocialBox>
            <a href="https://www.linkedin.com/in/ankkit-seth-495182237" aria-label="LinkedIn">LinkedIn</a>
            <h4>/</h4>
            <a href="https://dribbble.com/" aria-label="Dribbble">Dribbble</a>
            <h4>/</h4>
            <a href="https://www.instagram.com/" aria-label="Instagram">Instagram</a>
          </SocialBox>
        </Footer>

        {/* Mobile Footer */}
        <MobileFooter>
          <p>© 2024 All rights reserved.</p>
          <SocialIcons>
            <IconButton href="https://www.linkedin.com/in/ankkit-seth-495182237" aria-label="LinkedIn"><FaLinkedinIn/></IconButton>
            <IconButton href="https://dribbble.com/" aria-label="Dribbble"><FaDribbble/></IconButton>
            <IconButton href="https://www.instagram.com/" aria-label="Instagram"><FaInstagram/></IconButton>
          </SocialIcons>
        </MobileFooter>

      </OutContainer>
    </Wrapper>
  );
}

export default Contact;
