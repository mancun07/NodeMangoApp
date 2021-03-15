import React, { useState } from 'react'
import PhotosContext from './PhotosContext'
import photo1 from '../../img/about1.jpg' // relative path to image 
import photo2 from '../../img/about2.jpg' // relative path to image 
import photo3 from '../../img/about3.jpg' // relative path to image 
import photo4 from '../../img/about4.jpg' // relative path to image 
import photo5 from '../../img/about5.jpg' // relative path to image 
import photo6 from '../../img/about6.jpg' // relative path to image
import photo7 from '../../img/concert1.jpg' // relative path to image
import photo8 from '../../img/concert2.jpg' // relative path to image
import photo9 from '../../img/concert3.jpg' // relative path to image
import member1 from '../../img/boris.jpg' // relative path to image
import member2 from '../../img/maxim.jpg' // relative path to image
import member3 from '../../img/dima.jpg' // relative path to image
import member4 from '../../img/andrew.jpg' // relative path to image

const PhotosState = (props) => {
    const [photos, setPhotos] = useState(
        {
            gallery: 
            [
        {id: 1, img: photo1 },
        {id: 2, img: photo2 },
        {id: 3, img: photo3 },
        {id: 4, img: photo4 },
        {id: 5, img: photo5 },
        {id: 6, img: photo6 },
        {id: 7, img: photo7 },
        {id: 8, img: photo8 },
        {id: 9, img: photo9 },
    ], 
        members:
        [
        {id: 1, img: member1, desc:'Boris Britva - вокал, гитара' },
        {id: 2, img: member2, desc:'Боярский Максим - ударные' },
        {id: 3, img: member3, desc:'Музыченко Дмитрий - бас' },
        {id: 4, img: member4, desc:'Андрей Лазук - клавишные' },
        ]
        })


 return (
     <PhotosContext.Provider value={{
        photos: photos.gallery,
        members: photos.members
     }
     }>
        {props.children}
     </PhotosContext.Provider>
 )
}

export default PhotosState