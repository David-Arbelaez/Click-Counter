import React from 'react';
import '../stylesheets/Counter.css';

function Counter( {clickNum} ){
    return(
        <div className='counter'>
            {clickNum}
        </div>
    )
}

export default Counter;