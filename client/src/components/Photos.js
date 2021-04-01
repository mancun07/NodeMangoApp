import { useContext, useEffect } from "react";
import { PhotosContext } from "../context/photos/PhotosContextProvider";
import PhotoItem from "./PhotoItem";
import { motion } from "framer-motion";

const Photos = () => {
  const { photos } = useContext(PhotosContext);

  return (
    <main className="photo-page__main">
      <div className="container">
        <div className="photos-wrapper">
          <motion.div
            className="photos"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 150 }}
          >
            {photos.map((photo) => {
              return <PhotoItem key={photo.id} photo={photo} />;
            })}
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Photos;
