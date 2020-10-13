import React from 'react'
import { Landing } from './pages/'
import { MainController } from './components'



const App = props => {
    return (
        <div>
            {/* <Landing /> */}
            
            <div>
                <img 
                    alt='map'
                    src={require(`./components/Map/natural_earth.svg`)} 
                    style={{ width: '77rem', }} />
                <img 
                    alt='brown-bear'
                    src={require(`./components/Map/overlays/brown.svg`)} 
                    style={{ position: 'absolute', 
                        zIndex:10, 
                        left: 0, 
                        width: '77rem', }} />
            </div>

            <MainController />
             
        </div>
    )
}


export default App
