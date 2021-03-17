import React, {useEffect, useContext} from 'react'
import {Link, useParams} from 'react-router-dom'
import Button from './Button';
import {NewsContext} from '../context/news/NewsContextProvider'
import Loader from './Loader'


const SingleNews = ({match}) => {
    const {loading, newsItem, getNewsItem} = useContext(NewsContext)
    const {id} = useParams();

             useEffect(() => {
                getNewsItem(id)

    }, [])

    return (
        <>
        {loading ? <Loader/> : (
              newsItem && <div className="news-item container text-center details-item">
              <Link to={'/news'}>
                <Button text={'Вернуться к списку новостей'} style={{boxShadow: "0px 0px 8px rgb(255, 255, 255)"}}/>
              </Link>
              <div className="news-item__image">
                <img src={`/img/${newsItem._id}.jpg`} alt="one of the news"/>
              </div>
              <div className="news-item__date">{newsItem.date}</div>
              <h2>{newsItem.title}</h2>
              <p>{newsItem.content}</p>
          </div>
        )}
      
        </>

    )
}

export default SingleNews
