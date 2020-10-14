import React, { useReducer, } from 'react'
import OpSwitchContext from './opSwitchContext'
import speciesReducer from './speciesReducer'
import { UPDATE_SPECIES_OVERLAY, } from './types'


export const OpSwitchState = props => {
    const initialState = {
        speciesOverlay: 'black'
    }
    const [state, dispatch] = useReducer(speciesReducer, initialState)

    const changeSpeciesOverlay = buttonName => dispatchEvent({ type: UPDATE_SPECIES_OVERLAY, payload: buttonName })


    return (
        <OpSwitchContext.Provider


        >   {props.children}
        </OpSwitchContext.Provider>
    )
}


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
