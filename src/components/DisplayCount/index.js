import React from 'react';
import Wrapper from './styled';
import { useSelector } from 'react-redux';

const DisplayCount = props => {
    const count = useSelector(state => state.count);

    return (
        <Wrapper>
            {count}
        </Wrapper>
    );
}

export default DisplayCount;