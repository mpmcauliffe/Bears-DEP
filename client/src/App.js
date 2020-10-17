import React from 'react'
import styled from 'styled-components'
import SpeciesState from './context/SpeciesState'
import { Landing } from './pages/'
import { MainController, Map, MainText, } from './components'


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
        <SpeciesState>
            {/* <Landing /> */}
            
            <Map />
            <MainController />
            
            <ContentContainer>
                <MainText />
            </ContentContainer>
        </SpeciesState>
    )
}


export default App
