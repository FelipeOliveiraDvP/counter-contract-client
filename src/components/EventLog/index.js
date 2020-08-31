import React, { useState, useEffect } from 'react';
import Wrapper from './styled';
import { useSelector } from 'react-redux';

const EventLog = props => {
    const lastEvent = useSelector(state => state.lastEvent);
    const [feed, setFeed] = useState('Welcome to DAPP counter');
    
    useEffect(() => {
        let newFeed = feed;
        newFeed += '\n' + lastEvent;
        setFeed(newFeed);
    }, [lastEvent]);

    return (
        <Wrapper>
          <h3>Event log</h3>
          <textarea 
            placeholder="No event has called" 
            readOnly={true} 
            rows={12}
            value={feed !== null ? feed : ''}
        ></textarea>          
        </Wrapper>
    );
}

export default EventLog;