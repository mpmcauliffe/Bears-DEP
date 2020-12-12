import React from 'react'
import styled from 'styled-components'
import SpeciesState from './context/SpeciesState'
import { Footer, Landing, } from './pages/'
import { MainController, Map, MainText, Subs, } from './components'


const BackgroundContainer = styled.div`
    width: 100%;
    background: linear-gradient(0deg, rgba(248,252,255,1) 0%, rgba(242,250,255,1) 50%);
`

const ContentContainer = styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;

    @media(min-width: 769px) { width: 90%; }
    @media(min-width: 1081px) { width: 77%; }
    @media(min-width: 1921px) { width: 63%; }
`

const App = props => {
    return (
        <BackgroundContainer>
            <SpeciesState>
                {/*  */}
                <Landing />
                
                <div style={{ marginTop: '12rem' }} />
                
                <div style={{ position: 'relative', }}>
                    <Map />
                    <Subs />
                </div>

                <MainController />

                <ContentContainer>
                    <MainText />
                </ContentContainer>
            </SpeciesState>

            <Footer />
        </BackgroundContainer>
        
    )
}


export default App
