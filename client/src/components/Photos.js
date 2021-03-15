import React, {useContext, useEffect} from 'react'
import PhotosContext from '../context/photos/PhotosContext'
import PhotoItem from './PhotoItem'
import {motion} from 'framer-motion'

const Photos = () => {
    const {photos} = useContext(PhotosContext)
    //      useEffect(() => {
    //     document.querySelector('body').classList.remove('news-page');

    // }, [])
    return (
<main className="photo-page__main">
    <div className="container">
        <div className="photos-wrapper">
            <motion.div className="photos"
            initial={{y: '-100vh'}}
            animate={{y: 0}}
            transition={{duration: 0.5, type: 'spring', stiffness: 300}}
            >
            {photos.map(photo => {
                return <PhotoItem key={photo.id} photo={photo} />
            })}
               
            </motion.div>
        </div>  
    </div>
</main>
    )
}

export default Photos
