import React, { useContext, } from 'react'
import styled from 'styled-components'
import activeSpeciesContext from '../../context/activeSpeciesContext'


const MapFrame = styled.section`
    position: relative;
    margin: 3rem auto 3rem auto;
    max-width: 76.8rem;
    
    .overlay { 
        position: absolute; 
        z-index: 10; 
        left: 0;
        max-width: 76.8rem;
    }
    /* @media (min-width: 769px) { .overlay { left: 10vw; } } */
`

export const Map = () => {
    //const [mapOverlay, setMapOverlay]   = useState('')
    const speciesContext                = useContext(activeSpeciesContext)
    const { speciesOverlay, }           = speciesContext


    return (
        <MapFrame>
            <img 
                alt='map'
                src={require(`./natural_earth.svg`)} />

            {/** */}
            <img 
                alt='brown-bear'
                src={require(`./overlays/${speciesOverlay}.svg`)} 
                className='overlay' />
        </MapFrame>
    )
}
