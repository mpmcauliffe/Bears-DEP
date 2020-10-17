import React, { Fragment, useState, useEffect, useContext, } from 'react'
import activeSpeciesContext from '../../context/activeSpeciesContext'
import { OpSwitch, } from '../opSwitch/OpSwitch'


export const Subs = () => {
    const [showSubOption, setShowOption]                = useState(false)
    const [activeButton, setActiveButton]               = useState(0)
    //const [, setState]                                  = useState()
    const speciesContext                                = useContext(activeSpeciesContext)
    const { speciesOverlay, changeOverlayOpacity, }     = speciesContext

    const subButtons = ['hide subspecies', 'show subspecies']

    const handleToggle = e => {
        changeOverlayOpacity(e)
        e.split(' ')[0].toLowerCase() === 'show' ? setActiveButton(1) : setActiveButton(0)
    }

    useEffect(() => {
        speciesOverlay === 'brown' || speciesOverlay === 'black' ? setShowOption(true) : setShowOption(false)
        setActiveButton(0)
    }, [speciesOverlay])


    return (
        <Fragment>
            {showSubOption &&
                <OpSwitch 
                    optButtons={subButtons}
                    handleToggle={handleToggle}
                    defaultOpt={activeButton} />
            }
        </Fragment>
        
    )
}
