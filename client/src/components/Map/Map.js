import React from 'react'

export const Map = () => {
    return (
        <div>
            <img 
                alt='map'
                src={require(`./natural_earth.svg`)} 
                style={{ width: '77rem', }} />
            <img 
                alt='brown-bear'
                src={require(`./overlays/brown.svg`)} 
                style={{ position: 'absolute', 
                    zIndex:10, 
                    left: 0, 
                    width: '77rem', }} />
        </div>
    )
}
