import React from 'react';
import Wrapper from './styled';

const DisplayCount = props => {
    return (
        <Wrapper>
            {props.value}
        </Wrapper>
    );
}

export default DisplayCount;