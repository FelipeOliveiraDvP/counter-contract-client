import React from 'react';

import Container from './components/Container';
import Box from './components/Box';

function App() {
  return (
    <Container>
      <Box>
        <h1>DAPP Counter</h1>

        <div>Count: 0</div>

        <div>
          <button>Increment</button>
          <button>Decrement</button>
        </div>
      </Box>
    </Container>    
  );
}

export default App;
