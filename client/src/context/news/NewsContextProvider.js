import React, {useReducer, createContext} from 'react'
import NewsReducer from './NewsReducer'
// import NewsContext from './NewsContext'

export const NewsContext = createContext();

const initialState = {
    news: [],
    newsItem: null
}

const NewsContextProvider = (props) => {

    const [state, dispatch] = useReducer(NewsReducer, initialState);

    const getNews = async () =>  {
        try {
            const res = await fetch('http://localhost:5000/api/v1/articles');
            const data = await res.json();
            dispatch({type: 'GET_NEWS', payload: data.data})
        }

        catch(err) {
            console.log(err.message)
        }

    }

    const getNewsItem = async (id) => {
        try {
            const res = await fetch(`http://localhost:5000/api/v1/articles/${id}`);
            const data = await res.json();
            dispatch({type: 'GET_NEWS_ITEM', payload: data.data})
        }
        catch(err) {
            console.log(err.message)
        }
    }
    

 return (
     <NewsContext.Provider value={{
        news: state.news,
        newsItem: state.newsItem,
        getNews,
        getNewsItem

     }
     }>
        {props.children}
     </NewsContext.Provider>
 )
}

export default NewsContextProvider