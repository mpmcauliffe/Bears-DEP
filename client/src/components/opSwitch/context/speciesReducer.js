import { UPDATE_SPECIES_OVERLAY, } from './types'


export default (state, action) => {
    switch (action.type) {
        case UPDATE_SPECIES_OVERLAY:
            return {
                ...state,
                
            }
        
        default:
            return state
    }
}
