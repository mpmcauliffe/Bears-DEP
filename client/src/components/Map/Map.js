import React, { useContext, } from 'react'
import activeSpeciesContext from '../../context/activeSpeciesContext'
import { MapFrame, Overlay, } from './Map.comp'


export const Map = () => {
    //const [mapOverlay, setMapOverlay]   = useState('')
    const speciesContext                            = useContext(activeSpeciesContext)
    const { speciesOverlay, overlayTransparency,
        subspeciesOverlay, showSubOverlay, }         = speciesContext
//console.log(subspeciesOverlay)

    return (
        <MapFrame posMod={overlayTransparency}>
            <img 
                alt='map'
                src={require(`./natural_earth.svg`)} />

            {/** */}
            <Overlay 
                alt='bear-overlay'
                src={require(`./overlays/${speciesOverlay}.svg`)} 
                transparency={overlayTransparency} />
            
            {showSubOverlay &&
                <Overlay 
                    alt='bear-sub-overlay'
                    src={require(`./${speciesOverlay}/${subspeciesOverlay}.svg`)} />
            }
        </MapFrame>
    )
}
