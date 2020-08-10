import React from 'react';
import GlobalStyles from './styles/GlobalStyle';
import styeld from 'styled-components';
import Header from './component/Header'
import { HashRouter as Router } from "react-router-dom";
import Routes from './component/Routes';

const Wrapper = styeld.div`
  display:flex;
  flex-direction: column;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyles/>
      <Router>
        <>
          <Wrapper>
            <Header/>
            <Routes />
          </Wrapper>
        </>
      </Router>
      

    </>
  );
}

export default App;
