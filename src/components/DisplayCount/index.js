import React, { useState } from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';

import Wrapper from './styled';

const DisplayCount = props => {
    const [count, setCount] = useState(0);

    return (
        <DrizzleContext.Consumer>
            {drizzleContext => {
                const { drizzle, initialized } = drizzleContext;
                const { Counter } = drizzle.contracts;

                if(!initialized) return "Loading...";

                const { getCount } = Counter.methods;

                getCount().call().then(res => { setCount(res); });
                                
                return (
                    <Wrapper>
                        {count}
                    </Wrapper>
                )
            }}
        </DrizzleContext.Consumer>        
    );
}

export default DisplayCount;