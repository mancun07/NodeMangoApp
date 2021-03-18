import PropTypes from 'prop-types';

const PhotoItem = ({photo}) => {
    return (

                <a className="photo-item" href={photo.img} data-lightbox="photos">
                    <img src={photo.img} alt="band members" />
                </a>
   
    )
}

PhotoItem.propTypes = {
    photo: PropTypes.object
  };

export default PhotoItem
