import React from 'react';
import Wrapper from './styled';

const Button = props => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export default Button;