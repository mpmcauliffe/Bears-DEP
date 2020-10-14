import React from 'react'
import { OpSwitch, } from '../opSwitch/OpSwitch'


export const MainController = () => {
    const species = ['Black Bear', 'Brown Bear', 'Moon Bear', 'Panda Bear', 'Polar Bear',
                        'Sloth Bear', 'Spectacled Bear', 'Sun Bear']

    const handleToggle = e => { console.log(e) }

    return (

        <OpSwitch 
            optButtons={species}
            handleToggle={handleToggle} />
    )
}
