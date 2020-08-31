import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Wrapper from './styled';

const DisplayCount = props => {
    const drizzle = useSelector(state => state.drizzle.drizzle);
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const getCount = async () => {
            const { Counter } = drizzle.contracts;
            const result = await Counter.methods.getCount().call();
            setCount(result);
        }
        getCount();
    }, []);
    
    
    return (
        <Wrapper>
            {count}
        </Wrapper>
    );
}

export default DisplayCount;