import React, { useContext, useEffect } from 'react' 
import NewsItem from './NewsItem'
import Loader from './Loader'
import {NewsContext} from '../context/news/NewsContextProvider'


const News = () => {

    const {news, loading, getNews} = useContext(NewsContext)

    // useEffect(() => {
    //      getNews();
    // }, [])

     useEffect(() => {
         getNews()
        //  news.length === 0 ? getNews() : false;
         document.querySelector('body').classList.add('news-page');

        return () => {
        document.querySelector('body').classList.remove('news-page'); 
        }
    }, [])

    return (
        <main className="news-page__main container">
            <section className="news-wrapper">
                {loading ? <Loader/> : (
                    <div className="news">
                    {news && news.length > 0 && news.map(el => {
                        return <NewsItem key={el._id} el={el}/>
    
                    })}
                    </div>
                )}


            </section>
        </main>
    )
}

export default News
