import React from "react";
import styled, { keyframes } from "styled-components";
import { ArrowUpRight } from "lucide-react";
import ProfilePic from "../assets/profilepic.jpg";
import cocacola from "../assets/cocacola.svg";
import mattered from "../assets/mattered.svg";
import nationalbank from "../assets/nationalbank.svg";
import adobe from "../assets/adobe.svg";
import codeacedemy from "../assets/codeacedemy.svg";
import subway from "../assets/subway.svg";

const Wrapper = styled.section`
  font-family: 'PT Sans Narrow', sans-serif;
  width: 100%;
  text-align: center;
`;

const B_Container = styled.div`
  background-color: rgba(92, 92, 82, 0.21);
  width: 100%;
  padding: 0 0 10px 0;
  overflow-x: hidden;
`;

const M_Container = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 0 0 120px 120px;
  padding: 0px 0px 60px 0px;
  overflow-x: hidden;
`;

const S_Container = styled.div`
  background-color: rgba(92, 92, 82, 0.21);
  width: 100%;
  overflow-x: hidden;
  border-radius: 0 0 100px 100px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 100px 0 130px 0px;
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 50%;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 5px;
`;

const moveUpAndDown = keyframes`
  0% { transform: translateY(0) rotate(-20deg); }
  50% { transform: translateY(-10px) rotate(-20deg); }
  100% { transform: translateY(0) rotate(-20deg); }
`;

const NameTag = styled.div`
  position: absolute;
  top: 60px;
  right: -80px;
  background: white;
  padding: 16px 22px;
  font-size: 13px;
  font-weight: bold;
  border-radius: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${moveUpAndDown} 3s ease-in-out infinite;
`;

const GradientText = styled.h1`
  font-size: 70px;
  font-weight: 600;
  margin-top: 20px;
  background: linear-gradient(90deg, #000, #555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.3;
  @media (max-width: 576px) {
    font-size: 43px;
    font-weight: 600;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 30px 50px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background: black;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 50px;

  &:hover {
    background: #333;
  }

  svg {
    transform: rotate(15deg);
  }

  @media (max-width: 576px) {
    padding: 20px 35px;
  }
`;

/* Marquee Animation */
const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const LogoContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 110px 0;
  position: relative;

  @media (max-width: 576px) {
    padding: 70px 0;
  }
`;

const MarqueeWrapper = styled.div`
  display: flex;
  gap: 100px;
  animation: ${marquee} 35s linear infinite;
`;

const BrandImg = styled.img`
  width: auto;
  height: 50px;

  @media (max-width: 576px) {
    height: 43px;
  }
`;

function Hero() {
  return (
    <Wrapper>
      <B_Container>
        <M_Container>
          <S_Container>
            <Content>
              <ProfileContainer>
                <ProfileImage src={ProfilePic} alt="Profile" />
                <NameTag>Ankkit Seth 👋</NameTag>
              </ProfileContainer>
              <GradientText>
                Building digital <br /> products, brands, and <br /> experience.
              </GradientText>
              <Button>
                Latest Shots <ArrowUpRight size={20} />
              </Button>
            </Content>
          </S_Container>

          <LogoContainer>
            <MarqueeWrapper>
              {/* Original Set */}
              <BrandImg src={subway} alt="subway" />
              <BrandImg src={codeacedemy} alt="codeacademy" />
              <BrandImg src={adobe} alt="adobe" />
              <BrandImg src={nationalbank} alt="national bank" />
              <BrandImg src={cocacola} alt="cocacola" />
              <BrandImg src={mattered} alt="mattered" />

              {/* Duplicate Set for Seamless Scrolling */}
              <BrandImg src={subway} alt="subway" />
              <BrandImg src={codeacedemy} alt="codeacademy" />
              <BrandImg src={adobe} alt="adobe" />
              <BrandImg src={nationalbank} alt="national bank" />
              <BrandImg src={cocacola} alt="cocacola" />
              <BrandImg src={mattered} alt="mattered" />
            </MarqueeWrapper>
          </LogoContainer>
        </M_Container>
      </B_Container>
    </Wrapper>
  );
}

export default Hero;
