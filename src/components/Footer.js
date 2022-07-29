import React from 'react';
import styled from "styled-components";


const Footer = () => {
  return (
    <FooterContainer>
  
  <div>Created by 💘 with Shamim</div>

    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.div`
background-color: rgb(207, 181, 59);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem 0;
    color: #fff;

`