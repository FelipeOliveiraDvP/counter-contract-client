import React from 'react';

import Container from './components/Container';

function App() {
  return (
    <Container>
      <h1>DAPP Counter</h1>

      <div>Count: 0</div>

      <div>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    </Container>    
  );
}

export default App;
