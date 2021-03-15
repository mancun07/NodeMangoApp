const NavbarReducer = (state, action) => {

    switch(action.type) {
        case 'SET_TRANSPARENT':
            return {
                ...state,
                transparentColor: !state.transparentColor
            }

        default:
                return state 
    }

}  

export default NavbarReducer 