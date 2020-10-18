import React, { Fragment, useState, useEffect, useContext, } from 'react'
import activeSpeciesContext from '../../context/activeSpeciesContext'
import { OpSwitch, } from '../opSwitch/OpSwitch'
import { SubBay, } from './Subs.comp'
import { brownSubs, } from './subsets'


export const Subs = () => {
    const [showSubOption, setShowOption]                = useState(false)
    const [activeButton, setActiveButton]               = useState(0)
    //const [, setState]                                  = useState()
    const speciesContext                                = useContext(activeSpeciesContext)
    const { speciesOverlay, changeOverlayOpacity, 
        overlayTransparency, }     = speciesContext

    const subButtons = ['hide subspecies', 'show subspecies']

    const handleToggleSubMenu = e => {
        if (typeof e === 'string') {
            changeOverlayOpacity(e)
            e.split(' ')[0].toLowerCase() === 'show' ? setActiveButton(1) : setActiveButton(0)
            return
        }
        setActiveButton(0)
        changeOverlayOpacity('hide')
    }

    const handleToggleSubspecies = e => console.log(e)

    useEffect(() => {
        speciesOverlay === 'brown' || speciesOverlay === 'black' ? setShowOption(true) : setShowOption(false)
        setActiveButton(0)
    }, [speciesOverlay])


    return (
        <Fragment>
            {showSubOption &&
                <OpSwitch 
                    optButtons={subButtons}
                    handleToggle={handleToggleSubMenu}
                    defaultOpt={activeButton} />
            }
            <SubBay posModifier={overlayTransparency}>
                <i 
                    className='fas fa-times'
                    onClick={handleToggleSubMenu} />
                <OpSwitch 
                    optButtons={brownSubs}
                    handleToggle={handleToggleSubspecies} />
            </SubBay>
        </Fragment>
        
    )
}
