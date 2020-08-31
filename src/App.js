import React from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';
import { useDispatch } from 'react-redux';

import { setupDrizzle } from './actions/drizzle';

import Container from './components/Container';
import Box from './components/Box';
import DisplayValue from './components/DisplayCount';
import ButtonContainer from './components/ButtonContainer';
import EventLog from './components/EventLog';


const App = props => {
  const dispatch = useDispatch();

  return (
    <DrizzleContext.Consumer>
      {drizzleContext => {
        const { drizzle, drizzleState, initialized } = drizzleContext;

        if(!initialized) {
          return "Loading...";
        }

        dispatch(setupDrizzle(drizzle, drizzleState));
        
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
      }}
    </DrizzleContext.Consumer>        
  );
}

export default App;
