import React, { Fragment, useState, useEffect, useContext, } from 'react'
import activeSpeciesContext from '../../context/activeSpeciesContext'
import { OpSwitch, } from '../opSwitch/OpSwitch'


export const Subs = () => {
    const [showSubOption, setShowOption]                = useState(false)
    const [, setState]                                  = useState()
    const speciesContext                                = useContext(activeSpeciesContext)
    const { speciesOverlay, changeOverlayOpacity, }     = speciesContext

    const subButtons = ['hide subspecies', 'show subspecies']

    const handleToggle = e => changeOverlayOpacity(e)

    useEffect(() => {
        speciesOverlay === 'brown' || speciesOverlay === 'black' ? setShowOption(true) : setShowOption(false)
    }, [speciesOverlay])


    return (
        <Fragment>
            {showSubOption &&
                <OpSwitch 
                    optButtons={subButtons}
                    handleToggle={handleToggle} />
            }
        </Fragment>
        
    )
}
