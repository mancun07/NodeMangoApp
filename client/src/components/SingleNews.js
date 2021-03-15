import React, {useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'
import NewsContext from '../context/news/NewsContext'

const SingleNews = ({match}) => {
    const {newsItem, getNewsItem} = useContext(NewsContext)
    let id = match.params.id;
    console.log(id)
    // let newsItem = news.find(el => {
    //     return el._id === id
    // });
    // console.log(newsItem)

             useEffect(() => {
                getNewsItem(id)
        // document.querySelector('body').classList.remove('news-page');
    }, [])
    return (
        <>
        {newsItem && (
              <div className="news-item container text-center details-item">
              <Link to={'/single-page-app/news'} className="btn btn-primary inline-block m-1 p-1" style={{boxShadow: "0px 0px 8px rgb(255, 255, 255)"}}>Вернуться к списку новостей</Link>
              <div className="news-item__image">
                <img src={`../img/${newsItem._id}.jpg`} alt="one of the news"/>
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
