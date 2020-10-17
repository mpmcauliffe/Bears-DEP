import React, { useState, useEffect, useContext, } from 'react'
import styled from 'styled-components'
import activeSpeciesContext from '../../context/activeSpeciesContext'
import PropTypes from 'prop-types'
import { ButtonSet, } from './OpSwitchComp'


const ButtonWrapper = styled.div`
    width: 100%;
    margin: 0 auto 5rem auto;
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;

    @media(min-width: 769px) { width: 90%; }
    @media(min-width: 1081px) { width: 77%; }
    @media(min-width: 1599px) { width: 69%; }
    @media(min-width: 1921px) { width: 63%; }
`

export const OpSwitch = ({ optButtons, setting, handleToggle, defaultOpt, }) => {

    const [buttonState, setButtonState]     = useState([ ])
    const [buttonSize, setButtonSize]       = useState(0)

    // const speciesContext                            = useContext(activeSpeciesContext)
    // const { resetOption }                        = speciesContext

    useEffect(() => {

        setButtonState(optButtons.map((opt, index) => {
            return {
                name: opt,
                active: index === defaultOpt ? true : false,
            }
        }))

        setButtonSize(100 / optButtons.length)

    // eslint-disable-next-line
    }, [defaultOpt])

    const handleClick = e => {
        e.preventDefault()

        //console.log(e.target.name)
        handleToggle(e.target.name)
        setButtonState(buttonState.map(button => {
            return {
                ...button,
                active: button.name === e.target.name ? true : false,
            }
        }))
    }


    return (
        <ButtonWrapper>
            {buttonState.map(button => (
                    <ButtonSet
                        key={button.name} 
                        name={button.name}
                        active={button.active}
                        onClick={handleClick}
                        size={buttonSize}

                    >   {button.name}
                    </ButtonSet>
            ))}
        </ButtonWrapper>
    )
}

OpSwitch.propTypes = {
    optButtons: PropTypes.array, 
    setting: PropTypes.bool,
    defaultOpt: PropTypes.number,
    handleToggle: PropTypes.func,
}

OpSwitch.defaultProps = {
    optButtons: ['Option One', 'Option Two'],
    setting: true,
    defaultOpt: 0,
}
