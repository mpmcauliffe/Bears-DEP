import React, { useReducer, } from 'react'
import ActiveSpeciesContext from './activeSpeciesContext'
import speciesReducer from './speciesReducer'
import { UPDATE_SPECIES_OVERLAY,
    CHANGE_OVERLAY_OPACITY,
    ADD_SUBSPECIES_OVERLAY, } from './types'


const SpeciesState = props => {
    const initialState = {
        speciesOverlay: 'black',
        overlayTransparency: false,
        subspeciesOverly: '',
        showSubOverly: false,
    }
    const [state, dispatch] = useReducer(speciesReducer, initialState)

    const changeSpeciesOverlay = buttonName => dispatch({ type: UPDATE_SPECIES_OVERLAY, payload: buttonName })

    const changeOverlayOpacity = mod => dispatch({ type: CHANGE_OVERLAY_OPACITY, payload: mod })

    const addSubspeciesOverlay = mod => dispatch({ type: ADD_SUBSPECIES_OVERLAY, payload: mod })

    return (
        <ActiveSpeciesContext.Provider
            value={{ speciesOverlay: state.speciesOverlay,          // string
                overlayTransparency: state.overlayTransparency,     // bool
                subspeciesOverly: state.subspeciesOverly,           // string
                showSubOverly: state.showSubOverly,                 // bool

                changeSpeciesOverlay,
                changeOverlayOpacity,
                addSubspeciesOverlay, }}

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
