import React from 'react'
import styled from 'styled-components'


const LandingContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;

    img { width: 40%; }
    img:nth-child(2) { width: 27%; }

    @media (max-width: 1280px) { 
        img { width: 50%; } 
        img:nth-child(2) { width: 36%; }
    }
    @media (max-width: 980px) { 
        img { width: 63%; } 
        img:nth-child(2) { width: 47%; }    
    }
    @media (max-width: 768px) { 
        img { width: 70%; } 
        img:nth-child(2) { width: 57%; }
    }
    @media (max-width: 540px) { 
        img { width: 90%; } 
        img:nth-child(2) { width: 73%; }
    }
`

export const Landing = () => {
    return (
        <LandingContainer>
            {/* <h1 className='NormalCharacterStyle'>BEARS</h1> */}
            
            <img 
                alt='title-BEARS'
                src={require(`./BEARS_logo.png`)} />

            <img
                alt='crest-BEARS'
                src={require(`./bear-crest.png`)} />
                
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
