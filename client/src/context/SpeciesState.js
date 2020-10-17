import React, { useReducer, } from 'react'
import ActiveSpeciesContext from './activeSpeciesContext'
import speciesReducer from './speciesReducer'
import { UPDATE_SPECIES_OVERLAY,
    CHANGE_OVERLAY_OPACITY, } from './types'


const SpeciesState = props => {
    const initialState = {
        speciesOverlay: 'black',
        overlayTransparency: false,
    }
    const [state, dispatch] = useReducer(speciesReducer, initialState)

    const changeSpeciesOverlay = buttonName => dispatch({ type: UPDATE_SPECIES_OVERLAY, payload: buttonName })

    const changeOverlayOpacity = mod => dispatch({ type: CHANGE_OVERLAY_OPACITY, payload: mod })

    return (
        <ActiveSpeciesContext.Provider
            value={{ speciesOverlay: state.speciesOverlay,
                overlayTransparency: state.overlayTransparency,

                changeSpeciesOverlay,
                changeOverlayOpacity, }}

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
