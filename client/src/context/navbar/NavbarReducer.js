const NavbarReducer = (state, action) => {
    switch(action.type) {
        case 'GET_NEWS':
            return {
                ...state,
                news: action.payload
            }
        case 'GET_NEWS_ITEM':
            return {
                ...state,
                newsItem: action.payload 
            }

        default:
                return state 
    }

}  

export default NavbarReducer 