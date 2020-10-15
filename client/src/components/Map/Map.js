import React, { useContext, } from 'react'
import activeSpeciesContext from '../../context/activeSpeciesContext'


export const Map = () => {
    //const [mapOverlay, setMapOverlay]   = useState('')
    const speciesContext                = useContext(activeSpeciesContext)
    const { speciesOverlay, }           = speciesContext


    return (
        <div>
            <img 
                alt='map'
                src={require(`./natural_earth.svg`)} 
                style={{ width: '77rem', }} />

            {/** */}
            <img 
                alt='brown-bear'
                src={require(`./overlays/${speciesOverlay}.svg`)} 
                style={{ position: 'absolute', 
                    zIndex:10, 
                    left: 0, 
                    width: '77rem', }} />
        </div>
    )
}
