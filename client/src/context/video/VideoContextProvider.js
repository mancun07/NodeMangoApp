import React, { useState, createContext } from 'react'
import {v4} from 'uuid'
export const VideoContext = createContext();


const VideoContextProvider = (props) => {
    const [video, setVideo] = useState([
        {id: v4(), url: 'https://www.youtube.com/embed/ACYTaBexgdw' , title: 'Era of Machines', date:'04/02/2018', venue: 'Emergenza, Санкт-Петербург, 2-й этап в Opera Concert Hall' },
        {id: v4(), url: 'https://www.youtube.com/embed/wIMaLmlnT_0' , title: 'Annie', date:'04/02/2018', venue: 'Emergenza, Санкт-Петербург, 2-й этап в Opera Concert Hall' },
        {id: v4(), url: 'https://www.youtube.com/embed/gXbjeXW-BFU' , title: 'Slave', date:'04/02/2018', venue: 'Emergenza, Санкт-Петербург, 2-й этап в Opera Concert Hall' },
        {id: v4(), url: 'https://www.youtube.com/embed/HC3o7_FMA0Y', title: 'Better way', date:'04/02/2018', venue: 'Emergenza, Санкт-Петербург, 2-й этап в Opera Concert Hall' }
    ])
   
    // https://git.heroku.com/leather-jackets-app.git

 return (
     <VideoContext.Provider value={{
        video: video
     }
     }>
        {props.children}
     </VideoContext.Provider>
 )
}

export default VideoContextProvider