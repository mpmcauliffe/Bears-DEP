import React from 'react'
import SpeciesState from './context/SpeciesState'
import { Landing } from './pages/'
import { MainController, Map, MainText, } from './components'


const App = props => {
    return (
        <SpeciesState>
            {/* <Landing /> */}
            
            
            <Map />
            <MainController />
            <MainText />
             
        </SpeciesState>
    )
}


export default App
