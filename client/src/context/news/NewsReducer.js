const NewsReducer = (state, action) => {
    switch(action.type) {
        case 'GET_NEWS':
            return {
                ...state,
                news: action.payload,
                loading: false
            }
        case 'GET_NEWS_ITEM':
            return {
                ...state,
                newsItem: action.payload,
                loading: false
            }

        case 'SET_LOADING':
            return {
                ...state,
                loading: true 
            }
        
            

        default:
                return state 
    }

}  

export default NewsReducer 