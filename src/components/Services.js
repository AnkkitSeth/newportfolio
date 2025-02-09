import React from "react";
import styled from "styled-components";
import { MdOutlineDraw } from "react-icons/md";
import { BsBrush } from "react-icons/bs";
import { BsFillPaletteFill } from "react-icons/bs";
import { BsCode } from "react-icons/bs";

const Wrapper = styled.section`
  font-family: 'PT Sans Narrow', sans-serif;
  text-align: center;
  
`;

const Container = styled.div`
  background: rgba(92, 92, 82, 0.21);
  display: flex;
  align-items: center;
  flex-direction: column;
  
`;

const TitleBox = styled.div`
  width: 80%;
  padding: 120px 0px 40px 0px;

@media (max-width: 768px) {
    
    
}
@media (max-width: 576px) {
  padding: 50px 0px 40px 0px;
}
`;

const Title = styled.h3`
  font-size: 50px;
  background: linear-gradient(90deg, #000, #555);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 768px) {
    
    
  }
  @media (max-width: 576px) {
    font-size:34px;
  }
`;


const LineContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

const Line = styled.div`
  width: 80%;
  height: 0.5px;
  background: rgba(136, 138, 115, 0.56); /* Light gray border */
`;

const TiltedLabel = styled.div`
  position: absolute;
  background: white;
  padding: 20px 60px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 50px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transform: rotate(-15deg); /* Tilt the label */

@media (max-width: 768px) {
    
    
}
@media (max-width: 576px) {
  padding: 15px 40px;
}

`;

const ServicesBox = styled.div`
  display: flex;
  gap: 35px;
  width: 80%;
  justify-content: center;
  padding: 70px 0px;
  flex-wrap: wrap;

@media (max-width: 768px) {
    
    
}
@media (max-width: 576px) {
  padding: 50px 0px;
}

`;

const Card = styled.div`
  width: 200px;
  height: 200px;
  text-align: left;
  gap: 20px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 100;

  h3 {
    font-weight: 500;
  }

@media (max-width: 768px) {
    
    
}
@media (max-width: 576px) {
  width: 120px;
  height: 200px;
  font-size: 15px;
  font-weight: 100;
  

}

`;

const Icon = styled.div`
  font-size: 40px;
  @media (max-width: 768px) {
    
    
  }
  @media (max-width: 576px) {
     font-size: 30px;
  }
`;

function Services() {
  return (
    <Wrapper>
      <Container>
        <TitleBox>
          <Title>
            Collaborate with brands and agencies to <br /> create impactful results.
          </Title>
        </TitleBox>

        <LineContainer>
          <Line />
          <TiltedLabel>Services</TiltedLabel>
        </LineContainer>

        <ServicesBox>
          <Card>
            <Icon><MdOutlineDraw /></Icon>
            <h3>UX & UI</h3>
            <p>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
          </Card>

          <Card>
            <Icon><BsBrush /></Icon>
            <h3>Web & Mobile App</h3>
            <p>Transforming ideas into exceptional web and mobile app experiences.</p>
          </Card>

          <Card>
            <Icon><BsFillPaletteFill /></Icon>
            <h3>Design & Creative</h3>
            <p>Crafting visually stunning designs that connect with your audience.</p>
          </Card>

          <Card>
            <Icon><BsCode /></Icon>
            <h3>Development</h3>
            <p>Bringing your vision to life with the latest technology and design trends.</p>
          </Card>
        </ServicesBox>
      </Container>
    </Wrapper>
  );
}

export default Services;
