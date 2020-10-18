import { UPDATE_SPECIES_OVERLAY,
    CHANGE_OVERLAY_OPACITY,
    ADD_SUBSPECIES_OVERLAY, } from './types'


export default (state, action) => {
    switch (action.type) {
        case UPDATE_SPECIES_OVERLAY:
            return {
                ...state,
                speciesOverlay: action.payload.split(' ')[0].toLowerCase(),
                overlayTransparency: false,
                showSubOverly: false,
            }
        
        case CHANGE_OVERLAY_OPACITY:
            const mod = action.payload
            return {
                ...state,
                overlayTransparency: mod.split(' ')[0].toLowerCase() === 'show' ? true : false, 
                subspeciesOverly: mod.split(' ')[0].toLowerCase() === 'show' 
                    ? state.speciesOverlay === 'brown' 
                        ? 'atlas'
                        : state.speciesOverlay === 'black'
                            ? ''
                            : ''
                    : '',
                showSubOverly: mod.split(' ')[0].toLowerCase() === 'show' ? true : false,
            }

        case ADD_SUBSPECIES_OVERLAY:
            return {
                ...state,
                subspeciesOverly: action.payload.split(' ')[0].toLowerCase(),
            }
        
        default:
            return state
    }
}
