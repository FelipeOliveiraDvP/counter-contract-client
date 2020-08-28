import React from 'react';

import Container from './components/Container';
import Box from './components/Box';
import DisplayValue from './components/DisplayCount';
import Button from './components/Button';
import EventLog from './components/EventLog';

function App() {
  return (
    <Container>
      <Box>
        <h1>DAPP Counter</h1>

        <DisplayValue />

        <div>
          <Button>-</Button>
          <Button>+</Button>
        </div>
        
        <EventLog />
      </Box>
    </Container>    
  );
}

export default App;
