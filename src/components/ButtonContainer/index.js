import React from 'react';
import { useDispatch } from 'react-redux';
import { DrizzleContext } from '@drizzle/react-plugin';

import { logEvent } from '../../actions/index';
import Button from '../Button';

const ButtonContainer = () => {
  const dispatch = useDispatch();
   
  return (
    <DrizzleContext.Consumer>
      {drizzleContext => {
        const { drizzle, initialized } = drizzleContext;

        if (!initialized) return 'Loading...';

        const { Counter } = drizzle.contracts;
        const { increment, decrement } = Counter.methods;

        return (
          <div>
            <Button onClick={
              () => { 
                decrement().send()
                  .then(res => {        
                    const { returnValues } = res.events.CounterDecrement;
                    const log = `blockHash: ${res.blockHash}\nmessage: ${returnValues[0]}\n`;
                    dispatch(logEvent(log));
                  }); 
              }
            }>-</Button>
            
            <Button onClick={
              () => { 
                increment().send()
                  .then(res => {                    
                    const { returnValues } = res.events.CounterIncrement;
                    const log = `blockHash: ${res.blockHash}\nmessage: ${returnValues[0]}`;
                    dispatch(logEvent(log));
                  }); 
              }
            }>+</Button>
          </div>
        );
      }}
      
    </DrizzleContext.Consumer>        
  )
}

export default ButtonContainer;