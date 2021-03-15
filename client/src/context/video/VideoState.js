import React, { useState } from 'react'
import VideoContext from './VideoContext'


const VideoState = (props) => {
    const [video, setVideo] = useState([
        {id: 1, url: 'https://www.youtube.com/embed/ACYTaBexgdw' , title: 'Era of Machines', date:'04/02/2018', venue: 'Emergenza, Санкт-Петербург, 2-й этап в Opera Concert Hall' },
        {id: 2, url: 'https://www.youtube.com/embed/wIMaLmlnT_0' , title: 'Annie', date:'04/02/2018', venue: 'Emergenza, Санкт-Петербург, 2-й этап в Opera Concert Hall' },
        {id: 3, url: 'https://www.youtube.com/embed/gXbjeXW-BFU' , title: 'Slave', date:'04/02/2018', venue: 'Emergenza, Санкт-Петербург, 2-й этап в Opera Concert Hall' },
        {id: 4, url: 'https://www.youtube.com/embed/HC3o7_FMA0Y', title: 'Better way', date:'04/02/2018', venue: 'Emergenza, Санкт-Петербург, 2-й этап в Opera Concert Hall' }
    ])


 return (
     <VideoContext.Provider value={{
        video: video
     }
     }>
        {props.children}
     </VideoContext.Provider>
 )
}

export default VideoState