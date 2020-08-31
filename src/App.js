import React from 'react';

import Container from './components/Container';
import Box from './components/Box';
import DisplayValue from './components/DisplayCount';
import ButtonContainer from './components/ButtonContainer';
import EventLog from './components/EventLog';

const App = () => {  
  return (
    <Container>
      <Box>
        <h1>DAPP Counter</h1>

        <DisplayValue />

        <ButtonContainer />
        
        <EventLog />
      </Box>
    </Container>
  );
}

export default App;
