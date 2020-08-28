import React from 'react';
import Wrapper from './styled';

const Box = props => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export default Box;