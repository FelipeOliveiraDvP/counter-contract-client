import React from 'react';
import { useDispatch } from 'react-redux';

import { incrementCounter, decrementCounter } from '../../actions/index';
import Button from '../Button';

const ButtonContainer = () => {
    const dispatch = useDispatch();

    return (
        <div>
          <Button onClick={() => dispatch(decrementCounter())}>-</Button>
          <Button onClick={() => dispatch(incrementCounter())}>+</Button>
        </div>
    )
}

export default ButtonContainer;