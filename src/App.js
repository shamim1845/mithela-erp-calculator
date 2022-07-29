import Header from "./components/Header";
import styled from "styled-components";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <AppContainer>
    
    <Header/>
    <Body/>
    <Footer />
   
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
font-family: 'Roboto', sans-serif;
/* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */
width: 100%;
min-height: 100vh;
background-color: #fff;
color: #000;
position: relative;
/* margin: auto; */

`;
