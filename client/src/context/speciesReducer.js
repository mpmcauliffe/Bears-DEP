import { UPDATE_SPECIES_OVERLAY, } from './types'


export default (state, action) => {
    switch (action.type) {
        case UPDATE_SPECIES_OVERLAY:
            console.log(action.payload)
            return {
                ...state,
                speciesOverlay: action.payload.split(' ')[0].toLowerCase(),
            }
        
        default:
            return state
    }
}
