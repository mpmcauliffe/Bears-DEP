import React from 'react'
import styled from 'styled-components'
//import './BEARS.css'


const LandingContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`

export const Landing = () => {
    return (
        <LandingContainer>
            {/* <h1 className='NormalCharacterStyle'>BEARS</h1> */}
            
            <img 
                alt='title-BEARS'
                src={require(`./BEARS_logo.png`)}
                style={{ width: '33%', }} />
                
            {/*<img 
                alt='bears' 
                src={require(`./bears-at-play.png`)} 
                style={{ width: '70%', 
                    //position: 'absolute',
                   // top: '-150px', 
                 //   left: '-25px',
                 }} /> */}
            
        </LandingContainer>
    )
}


// <a href='https://www.freepik.com/vectors/flyer'>Flyer vector created by pch.vector - www.freepik.com</a>