import React, { Fragment, useState, useEffect, useContext, } from 'react'
import activeSpeciesContext from '../../context/activeSpeciesContext'
import { OpSwitch, } from '../opSwitch/OpSwitch'
import { SubBay, } from './Subs.comp'
import { blackSubs, brownSubs, } from './subsets'


export const Subs = () => {
    const [showSubOption, setShowOption]                = useState(false)
    const [activeToggle, setActiveToggle]               = useState(0)
    
    const speciesContext                                = useContext(activeSpeciesContext)
    const { speciesOverlay, changeOverlayOpacity, 
        overlayTransparency, addSubspeciesOverlay, }    = speciesContext

    const subButtons = ['hide subspecies', 'show subspecies']

    const handleToggleSubMenu = e => {
        if (typeof e === 'string') {
            changeOverlayOpacity(e)

            const mod = e.split(' ')[0].toLowerCase()
            mod === 'show' ? setActiveToggle(1) : setActiveToggle(0)
            
            return
        }
        setActiveToggle(0)
        changeOverlayOpacity('hide')
    }

    const handleToggleSubspecies = e => addSubspeciesOverlay(e)

    useEffect(() => {
        speciesOverlay === 'brown' || speciesOverlay === 'black' ? setShowOption(true) : setShowOption(false)
        setActiveToggle(0)

    }, [speciesOverlay, showSubOption])

//console.log(showSubOption)
    return (
        <Fragment>
            {/*  */}
            {showSubOption &&
                <OpSwitch 
                    //disabled={!showSubOption}
                    optButtons={subButtons}
                    handleToggle={handleToggleSubMenu}
                    defaultOpt={activeToggle} />
            }
            <SubBay posModifier={overlayTransparency}>
                <i 
                    className='fas fa-times'
                    onClick={handleToggleSubMenu} />
                {speciesOverlay === 'black' &&
                    <OpSwitch 
                        defaultOpt={0}
                        optButtons={blackSubs}
                        handleToggle={handleToggleSubspecies} />
                }
                {speciesOverlay === 'brown' &&
                    <OpSwitch 
                        defaultOpt={0}
                        optButtons={brownSubs}
                        handleToggle={handleToggleSubspecies} />
                }         
            </SubBay>
        </Fragment>
        
    )
}
