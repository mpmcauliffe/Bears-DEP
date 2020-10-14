import React from 'react'
import { Landing } from './pages/'
import { MainController, Map, } from './components'



const App = props => {
    return (
        <div>
            {/* <Landing /> */}
            
            
            <Map />
            <MainController />
             
        </div>
    )
}


export default App
