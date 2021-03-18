import {useContext, useEffect} from 'react'
import {VideoContext} from '../context/video/VideoContextProvider'
import VideoItem from './VideoItem'
import {motion} from 'framer-motion'

const Video = () => {
    const {video} = useContext(VideoContext)

    
    return (
            <main className="video-page__main">
    <div className="container">
        <div className="video-wrapper">
            <motion.h1
            initial={{x: '100vw'}}
            animate={{x: 0}}
            transition={{duration: 0.5, type: 'spring', stiffness: 100}}
            >Видео с концертов</motion.h1>
            {video.map(item => {
                return <VideoItem key={item.id} item={item}/>
            })}

        </div>    
    </div>
</main>

    )
}

export default Video
