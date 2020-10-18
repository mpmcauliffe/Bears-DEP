import React, { Fragment, useState, useEffect, useContext, } from 'react'
import activeSpeciesContext from '../../context/activeSpeciesContext'
import { OpSwitch, } from '../opSwitch/OpSwitch'
import { SubBay, } from './Subs.comp'
import { brownSubs, } from './subsets'


export const Subs = () => {
    const [showSubOption, setShowOption]                = useState(false)
    const [activeToggle, setActiveToggle]               = useState(0)
    const [activeSub, setActiveSub]                     = useState(false)
    //const [, setState]                                  = useState()
    const speciesContext                                = useContext(activeSpeciesContext)
    const { speciesOverlay, changeOverlayOpacity, 
        overlayTransparency, addSubspeciesOverlay,
        showSubOverly, }    = speciesContext

    const subButtons = ['hide subspecies', 'show subspecies']

    const handleToggleSubMenu = e => {
        if (typeof e === 'string') {
            changeOverlayOpacity(e)
            e.split(' ')[0].toLowerCase() === 'show' ? setActiveToggle(1) : setActiveToggle(0)
            e.split(' ')[0].toLowerCase() === 'show' ? setActiveSub(true) : setActiveSub(false)
            setActiveSub(0)
            return
        }
        setActiveToggle(0)
        setActiveSub(false)
        changeOverlayOpacity('hide')
    }

    const handleToggleSubspecies = e => addSubspeciesOverlay(e)

    useEffect(() => {
        speciesOverlay === 'brown' || speciesOverlay === 'black' ? setShowOption(true) : setShowOption(false)
        setActiveToggle(0)
        setActiveSub(0)

console.log(activeSub)
    }, [speciesOverlay, activeSub])


    return (
        <Fragment>
            {showSubOption &&
                <OpSwitch 
                    optButtons={subButtons}
                    handleToggle={handleToggleSubMenu}
                    defaultOpt={activeToggle} />
            }
            <SubBay posModifier={overlayTransparency}>
                <i 
                    className='fas fa-times'
                    onClick={handleToggleSubMenu} />
                <OpSwitch 
                    optButtons={brownSubs}
                    handleToggle={handleToggleSubspecies}
                    defaultOpt={0} />
            </SubBay>
        </Fragment>
        
    )
}
