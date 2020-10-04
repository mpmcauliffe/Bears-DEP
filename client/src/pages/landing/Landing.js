import React from 'react'
import './BEARS.css'

export const Landing = () => {
    return (
        <div>
            <h1 className='NormalCharacterStyle'>BEARS</h1>
            <img 
                alt='bears' 
                src={require(`./BEARS-2.png`)} 
                style={{ width: '101.7%', 
                    position: 'absolute',
                   // top: '-150px', 
                 //   left: '-25px',
                 }} />
        </div>
    )
}
