import React, { Fragment, useContext, } from 'react'
import activeSpeciesContext from '../../context/activeSpeciesContext'
import { txt, } from './txt'


export const MainText = () => {
    const speciesContext                = useContext(activeSpeciesContext)
    const { speciesOverlay, }           = speciesContext

    return (
        <Fragment>
            {txt[`${speciesOverlay}`].map(text => (
                <p key={text.substring(1,20)}>{text}</p>
            ))}
        </Fragment>
    )
}
