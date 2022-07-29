import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <LogoAndCompany>
            <img src='https://mithela.esimsol.com/Company/GetCompanyLogo/1' alt='logo'></img>
        <Heading><span>Mithela Textile Industries Ltd.</span></Heading>
        </LogoAndCompany>
        <Heading><span>ERP Dyes/Chemical Calculator</span></Heading>
       <div></div>
        </Container>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
background-color: rgb(207, 181, 59);
display: flex;
justify-content: center;
width: 100%;

`;

const Container = styled.div`
/* background: #000; */
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 1400px;
padding: 5px;
`

const Heading = styled.div`
span{
    color: #fff;
    font-size: 18px;
font-weight: 600;
}

`;
const LogoAndCompany = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
img{
    width: 40px;
    height: 40px;
    margin-right: 12px;
}
`;