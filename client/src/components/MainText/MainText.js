import React, { useContext, } from 'react'
import styled from 'styled-components'
import activeSpeciesContext from '../../context/activeSpeciesContext'
import { txt, } from './txt'


const TextContainer = styled.div`
    width: 95%;
    margin: 0 auto;
    padding-bottom: ${p => p.paddingMod ? '50rem' : '10rem'};

    @media(min-width: 769px) { width: 80%; }
    @media(min-width: 1081px) { width: 67%; }
    @media(min-width: 1921px) { width: 57%; }
`

export const MainText = () => {
    const speciesContext                                   = useContext(activeSpeciesContext)
    const { speciesOverlay, overlayTransparency, }         = speciesContext
    //console.log(overlayTransparency)

    return (
        <TextContainer paddingMod={overlayTransparency}>
            {txt[`${speciesOverlay}`].map(text => (
                <p key={text.substring(1,20)}>{text}</p>
            ))}
        </TextContainer>
    )
}
