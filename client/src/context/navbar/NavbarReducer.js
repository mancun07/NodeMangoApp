const NavbarReducer = (state, action) => {

    switch(action.type) {
        case 'SET_TRANSPARENT':
            return {
                ...state,
                transparentColor: !state.transparentColor
            }
        case 'TOGGLE_MENU':
            return {
                ...state,
                sidenavIsOpened: !state.sidenavIsOpened
            }

        default:
                return state 
    }

}  

export default NavbarReducer 