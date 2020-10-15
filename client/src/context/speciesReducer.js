import { UPDATE_SPECIES_OVERLAY, } from './types'


export default (state, action) => {
    switch (action.type) {
        case UPDATE_SPECIES_OVERLAY:
            return {
                ...state,
                speciesOverlay: action.payload.split(' ')[0].toLowerCase(),
            }
        
        default:
            return state
    }
}
