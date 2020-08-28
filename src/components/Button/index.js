import React from 'react';
import Wrapper from './styled';

const Button = props => {
    return (
        <Wrapper onClick={props.onClick}>
            {props.children}
        </Wrapper>
    );
}

export default Button;