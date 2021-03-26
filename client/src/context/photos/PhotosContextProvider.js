import React, { useState, createContext } from "react";
import { v4 } from "uuid";
import photo1 from "../../img/about1.jpg";
import photo2 from "../../img/about2.jpg";
import photo3 from "../../img/about3.jpg";
import photo4 from "../../img/about4.jpg";
import photo5 from "../../img/about5.jpg";
import photo6 from "../../img/about6.jpg";
import photo7 from "../../img/concert1.jpg";
import photo8 from "../../img/concert2.jpg";
import photo9 from "../../img/concert3.jpg";
import member1 from "../../img/boris.jpg";
import member2 from "../../img/maxim.jpg";
import member3 from "../../img/dima.jpg";
import member4 from "../../img/andrew.jpg";
import back1 from "../../img/boris2.jpg";
import back2 from "../../img/maxim2.jpg";
import back3 from "../../img/dima2.jpg";
import back4 from "../../img/andrew2.jpg";

export const PhotosContext = createContext();

const PhotosContextProvider = (props) => {
  const [photos, setPhotos] = useState({
    gallery: [
      { id: v4(), img: photo1 },
      { id: v4(), img: photo2 },
      { id: v4(), img: photo3 },
      { id: v4(), img: photo4 },
      { id: v4(), img: photo5 },
      { id: v4(), img: photo6 },
      { id: v4(), img: photo7 },
      { id: v4(), img: photo8 },
      { id: v4(), img: photo9 },
    ],
    members: [
      {
        id: v4(),
        img: member1,
        img2: back1,
        desc: "Boris Britva - вокал, гитара",
      },
      {
        id: v4(),
        img: member2,
        img2: back2,
        desc: "Боярский Максим - ударные",
      },
      { id: v4(), img: member3, img2: back3, desc: "Музыченко Дмитрий - бас" },
      { id: v4(), img: member4, img2: back4, desc: "Андрей Лазук - клавишные" },
    ],
  });

  return (
    <PhotosContext.Provider
      value={{
        photos: photos.gallery,
        members: photos.members,
      }}
    >
      {props.children}
    </PhotosContext.Provider>
  );
};

export default PhotosContextProvider;
