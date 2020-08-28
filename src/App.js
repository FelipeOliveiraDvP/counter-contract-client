import React from 'react';

import Container from './components/Container';
import Box from './components/Box';
import DisplayValue from './components/DisplayCount';
import Button from './components/Button';

function App() {
  return (
    <Container>
      <Box>
        <h1>DAPP Counter</h1>

        <DisplayValue value={10} />

        <div>
          <Button>-</Button>
          <Button>+</Button>
        </div>
        
      </Box>
    </Container>    
  );
}

export default App;
