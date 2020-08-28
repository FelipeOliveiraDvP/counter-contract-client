import React from 'react';
import Wrapper from './styled';

const EventLog = props => {
    return (
        <Wrapper>
          <h3>Event log</h3>
          <textarea 
            placeholder="No event has called" 
            readOnly={true} 
            rows={12}
            value="Hello&#10;World&#10;World&#10;World&#10;World&#10;World&#10;World&#10;World&#10;World&#10;World&#10;World&#10;World&#10;World&#10;World"
        ></textarea>          
        </Wrapper>
    );
}

export default EventLog;