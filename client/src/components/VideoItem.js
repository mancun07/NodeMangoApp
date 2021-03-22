import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/lazy';

const VideoItem = ({item}) => {
    return (
            <div className="video-item">
                <h2>{item.title}</h2>
                <h3>{item.date}</h3>
                <p>{item.venue}</p>
                <div className="player-wrapper">
                <ReactPlayer 
                          className='react-player'
                          controls
                          url={item.url}
                          width='100%'
                          height='100%'
                          muted={true}
                />
                {/* <div className="video-item__video">
                    <iframe width="789" height="444" src={item.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>
                </div> */}
                </div>
            </div>
    )
}

VideoItem.propTypes = {
    item: PropTypes.object
  };

export default VideoItem
