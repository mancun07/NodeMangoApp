import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';
import Button from './Button';


const NewsItem = ({el}) => {
    console.log(el)
    return (
        <div className="news-item">
            <div className="news-item__image">
                <img src={`/img/${el._id}.jpg`} alt="one of the news"/>
            </div>
            <div className="news-item__date">{el.date}</div>
            <h2>{el.title}</h2>
            <p>{el.content}</p>
            <Link to={`/single-page-app/news/${el._id}`}>
                <Button text={'Читать Далее'}  style={{boxShadow: "0px 0px 8px rgb(255, 255, 255)"}}/>
            </Link>
        </div>
    )
}

// NewsItem.propTypes = {
//     el: PropTypes.object
//   };

export default NewsItem
