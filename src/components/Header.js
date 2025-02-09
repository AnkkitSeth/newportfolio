import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`    
    background-color:rgba(92, 92, 82, 0.21);
    color: white;
    text-align: center;
    @media (max-width: 768px) {
        display: none;
  }    
`;

const Container = styled.div`
    display:flex;
    padding: 50px 90px;
    justify-content:space-between;
    @media (max-width: 992px){
        padding:50px 0px;
        justify-content:center;
        gap:30px;
        
    }
`;

const LeftContainer = styled.div`
    display:flex;
    justify-content:space-between;
    gap:18px;

    @media (max-width: 576px) {
     gap:10px;
    }    
`;

const EmailContainer = styled.div`      
    display:flex;
    justify-content:space-between;
    gap:40px;
    background:rgba(92, 92, 82, 0.03);
    align-items:center;
    padding:4px 7px 4px 15px;
    border-radius:30px;
    h4{
        font-size:14px;
        color:black;
        font-weight:100;
    }

    @media (max-width: 576px) {
     gap:20px;
     padding:4px 7px 4px 12px;
     h4{
        font-size:12px;
        color:black;
        font-weight:100;
        display:none;
     }
    }
`;

const Copy = styled.button`
    color:black;
    background:white;
    border-radius:30px;
    padding:20px 45px;
    font-size:14px;
    font-weight:600;
    border: none;
    cursor: pointer;
    transition: background 0.3s;
    
    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 576px) {
     padding:10px 25px;
    } 
`;

const CvContainer = styled.div`
    align-items:center;
    background:rgba(92, 92, 82, 0.03);
    padding:4px 7px;
    border-radius:30px;
`;

const Cv = styled.div`
    display:flex;
    font-size:14px;
    font-weight:600;
    background:white;
    color:black;
    align-items:center;
    padding:20px 52px;
    border-radius:30px;

    @media (max-width: 576px) {
     padding:10px 28px;
    } 
`;

const RightContainer = styled.div`
    display:flex;
    justify-content:space-between;
    gap:15px;
    color:black;
    align-items:center;

    a{
      text-decoration:none;
      color:black;
      font-size:17px;  
    }

    a:hover{
        text-decoration:underline;
    }

    h4{
        font-size:17px;
    }
`;

function Header() {
    const email = "ankkitseth@gmail.com";

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText(email).then(() => {
            alert("Email copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy: ", err);
        });
    };

    return (
        <Wrapper>
            <Container>
                <LeftContainer>
                    <EmailContainer>
                        <h4>{email}</h4>
                        <Copy onClick={copyEmailToClipboard}>Copy</Copy>
                    </EmailContainer>
                    <CvContainer>
                        <Cv>CV</Cv>
                    </CvContainer>
                </LeftContainer>
                <RightContainer>
                    <a href="https://www.linkedin.com/in/ankkit-seth-495182237" aria-label="LinkedIn">LinkedIn</a>
                    <h4>/</h4>
                    <a href="https://dribbble.com/" aria-label="Dribbble">Dribbble</a>
                    <h4>/</h4>
                    <a href="https://www.instagram.com/" aria-label="Instagram">Instagram</a>
                </RightContainer>
            </Container>
        </Wrapper>
    );
}

export default Header;
