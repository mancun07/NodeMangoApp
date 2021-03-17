import React, {useReducer, createContext} from 'react'
import NewsReducer from './NewsReducer'

export const NewsContext = createContext();

const NewsContextProvider = (props) => {

    const initialState = {
        news: [],
        newsItem: null,
        loading: false
    }

    const [state, dispatch] = useReducer(NewsReducer, initialState);

    const getNews = async () =>  {
        try {
            console.log('new request to the server')
            setLoading();
            const res = await fetch('/api/v1/articles');
            const data = await res.json();
            dispatch({type: 'GET_NEWS', payload: data.data})
        }

        catch(err) {
            console.log(err.message)
        }

    }

    const getNewsItem = async (id) => {
        try {
            setLoading();
            const res = await fetch(`/api/v1/articles/${id}`);
            const data = await res.json();
            dispatch({type: 'GET_NEWS_ITEM', payload: data.data})
        }
        catch(err) {
            console.log(err.message)
        }
    }

    const setLoading = () => {
        dispatch({type: 'SET_LOADING'})
    }
    

 return (
     <NewsContext.Provider value={{
        news: state.news,
        newsItem: state.newsItem,
        loading: state.loading,
        getNews,
        getNewsItem

     }
     }>
        {props.children}
     </NewsContext.Provider>
 )
}

export default NewsContextProvider