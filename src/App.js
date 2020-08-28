import React from 'react';

import Container from './components/Container';
import Box from './components/Box';
import DisplayValue from './components/DisplayCount';

function App() {
  return (
    <Container>
      <Box>
        <h1>DAPP Counter</h1>

        <DisplayValue value={0} />

        <div>
          <button>Increment</button>
          <button>Decrement</button>
        </div>
      </Box>
    </Container>    
  );
}

export default App;
