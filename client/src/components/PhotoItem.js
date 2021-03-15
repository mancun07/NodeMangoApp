import React from 'react'

const PhotoItem = ({photo}) => {
    return (

                <a className="photo-item" href={photo.img} data-lightbox="photos">
                    <img src={photo.img} alt="band members" />
                </a>
   
    )
}

export default PhotoItem
