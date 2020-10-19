import React, { useContext, } from 'react'
import activeSpeciesContext from '../../context/activeSpeciesContext'
import { OpSwitch, } from '../opSwitch/OpSwitch'


export const MainController = () => {
    const speciesContext                    = useContext(activeSpeciesContext)
    const { changeSpeciesOverlay, }         = speciesContext

    const species = ['Black Bear', 'Brown Bear', 'Giant Panda', 'Moon Bear', 'Polar Bear',
                        'Sloth Bear', 'Spectacled Bear', 'Sun Bear']

    const handleToggle = e => changeSpeciesOverlay(e)


    return (
        <OpSwitch 
            optButtons={species}
            handleToggle={handleToggle} />
    )
}
