import React from 'react';
import Button from './component/button'
import GlobalStyles from './styles/GlobalStyle';
import styeld from 'styled-components';
import Header from './component/Header'
import { HashRouter as Router } from "react-router-dom";
import Routes from './component/Routes';

const Wrapper = styeld.div`
  display:flex;
  flex-direction: column;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles/>
      <Router>
        <>

          <Header/>
          <Routes />

        </>
      </Router>
      

    </Wrapper>
  );
}

export default App;
