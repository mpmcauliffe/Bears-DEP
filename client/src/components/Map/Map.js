import React, { useContext, } from 'react'
import styled from 'styled-components'
import activeSpeciesContext from '../../context/activeSpeciesContext'


const MapFrame = styled.section`
    margin: 0 auto;
    
    .overlay { 
        position: absolute; 
        z-index: 10; 
        left: 0;
    }
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
