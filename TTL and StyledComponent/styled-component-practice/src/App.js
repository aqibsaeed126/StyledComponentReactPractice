import logo from './logo.svg';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import { UserSummary } from './components/UserSummary';
import { StyledParagraph } from './components/StyledParagraph';
import { StyledButton } from './components/StyledButton';
import { FancyButton } from './components/StyledButton';
import { SubmitButton } from './components/StyledButton';
import { DarkButton } from './components/StyledButton';
import { ThemeProvider } from 'styled-components';

const StyledDiv = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  border: 1px solid #ccc;
  padding: 1rem;
`

const buttonHandler = () => {
  console.log('Styled Button Clicked')
}

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  }
}
const GlobalStyle = createGlobalStyle`
 button {
  color: green !important;
 }
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
          <div className="App">
        <StyledButton bg='red' onClick={buttonHandler}>My Style Button</StyledButton>
        <FancyButton>My Fancy Button</FancyButton>
        <FancyButton as='a'>My Fancy Button as Anchor</FancyButton>
        <SubmitButton submit>Submitt Button</SubmitButton>
        <SubmitButton>Non Submitt Button</SubmitButton>
        <DarkButton>Dark Button</DarkButton>
        <StyledDiv>
          <UserSummary />
        </StyledDiv>
        <StyledParagraph>
          <UserSummary />
        </StyledParagraph>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
