import React from 'react';
import Wrapper from './styled';

const Container = props => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export default Container;