import { UPDATE_SPECIES_OVERLAY,
    CHANGE_OVERLAY_OPACITY, } from './types'


export default (state, action) => {
    switch (action.type) {
        case UPDATE_SPECIES_OVERLAY:
            return {
                ...state,
                speciesOverlay: action.payload.split(' ')[0].toLowerCase(),
                overlayTransparency: false,
            }
        
        case CHANGE_OVERLAY_OPACITY:
            const mod = action.payload
            return {
                ...state,
                overlayTransparency: mod.split(' ')[0].toLowerCase() === 'show' ? true : false, 
            }
        
        default:
            return state
    }
}
