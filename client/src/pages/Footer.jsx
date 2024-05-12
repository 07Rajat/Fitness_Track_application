import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 0px;
  width: 100%;
  position: float;
  bottom: 0;
  left: 0;
`;

const FooterLink = styled.p`
  float: left;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink>Terms of use</FooterLink>
      <FooterLink>Privacy policy</FooterLink>
      <FooterLink>Contact us</FooterLink>
      <p style={{ float: 'right' }}>&copy; 2024 FitnessTrack. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
