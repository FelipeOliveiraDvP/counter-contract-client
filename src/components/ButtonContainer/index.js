import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { incrementCounter, decrementCounter } from '../../actions/index';
import Button from '../Button';

const ButtonContainer = () => {
    const dispatch = useDispatch();
    const drizzle = useSelector(state => state.drizzle.drizzle);
    const drizzleState = useSelector(state => state.drizzle.drizzleState);
    const { Counter } = drizzle.contracts;

    const increment = async () => {
      await Counter.methods.increment().send()
        .then(res => {
          console.log(res);
        });
    }

    const decrement = async () => {
      await Counter.methods.decrement().send()
        .then(res => {
          console.log(res);
        });
    }

    //console.log(drizzleState, drizzle.contracts.Counter.methods.increment.call())
    return (
        <div>
          <Button onClick={async () => { await decrement(); }}>-</Button>
          <Button onClick={async () => { await increment(); }}>+</Button>
        </div>
    )
}

export default ButtonContainer;