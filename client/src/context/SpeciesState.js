import React, { useReducer, } from 'react'
import ActiveSpeciesContext from './activeSpeciesContext'
import speciesReducer from './speciesReducer'
import { UPDATE_SPECIES_OVERLAY, } from './types'


const SpeciesState = props => {
    const initialState = {
        speciesOverlay: 'black',
        species: ['Black Bear', 'Brown Bear', 'Giant Panda', 'Moon Bear', 'Polar Bear',
                        'Sloth Bear', 'Spectacled Bear', 'Sun Bear'],
    }
    const [state, dispatch] = useReducer(speciesReducer, initialState)

    const changeSpeciesOverlay = buttonName => dispatch({ type: UPDATE_SPECIES_OVERLAY, payload: buttonName })


    return (
        <ActiveSpeciesContext.Provider
            value={{ speciesOverlay: state.speciesOverlay,
                changeSpeciesOverlay,}}

        >   {props.children}
        </ActiveSpeciesContext.Provider>
    )
}


export default SpeciesState

// export default (state, action) => {
//     switch (action.type) {
//         case USER_LOADED:
//             return {
//                 ...state,
//                 isAuthenticated: true,
//                 loading: false,
//                 user: action.payload
//             }
//     }
// }
