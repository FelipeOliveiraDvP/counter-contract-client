import React from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';

import Button from '../Button';

const ButtonContainer = () => {
   
    return (
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, initialized } = drizzleContext;

          if (!initialized) return 'Loading...';

          const { Counter } = drizzle.contracts;
          const { increment, decrement } = Counter.methods;

          return (
            <div>
              <Button onClick={async () => { await decrement().send(); }}>-</Button>
              <Button onClick={async () => { await increment().send(); }}>+</Button>
            </div>
          );
        }}
        
      </DrizzleContext.Consumer>        
    )
}

export default ButtonContainer;