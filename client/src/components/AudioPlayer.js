import React, {useEffect, useRef, useState, useMemo} from 'react';
import pic1 from '../img/Annie.jpg';
import pic2 from '../img/It_was_you.jpg';
import pic3 from '../img/Slave.jpg';
import Annie from '../music/Annie.mp3';
import It_was_you from '../music/It_was_you.mp3';
import Slave from '../music/Slave.mp3';



const AudioPlayer = React.memo(() => {
    const audio = useRef(null);
    const cover = useRef(null);
    const playBtn = useRef(null);
    const progressTitle = useRef(null);
    const progressBar = useRef(null);
    const musicContainer = useRef(null);
    const prev = useRef(null);
    const next = useRef(null);

    const [songs, setSongs] = useState(['Annie', 'It was you', 'Slave']);
    const [images, setImages] = useState([pic1, pic2, pic3]);
    const [records, setRecords] = useState([Annie, It_was_you, Slave]);
    let [songIndex, setSongIndex] = useState(2);

    useEffect(() => {
        audio.current.addEventListener('timeupdate', updateProgress);
        audio.current.addEventListener('ended', handleNextSongs);
        // return () => {
        //     audio.current.removeEventListener('timeupdate', updateProgress);
        //     audio.current.removeEventListener('ended', handleNextSongs);
        // } 
    }, [])

    const updateProgress = () => {
        const duration = audio.current.duration;
        const currentTime = audio.current.currentTime;
        const percentage = (currentTime / duration) * 100;
        progressBar.current.style.width = `${percentage}%`;
    }



  
    const setProgress = (e) => {
        const progressWidth = e.target.clientWidth;
        const offsetByClick = e.nativeEvent.offsetX;
        const duration = audio.current.duration;
        audio.current.currentTime = (offsetByClick/progressWidth) * duration;

    }

      

    const handlePlayStatus = () => {
        if (!musicContainer.current.classList.contains('play')) {
            playMusic();
        } else {
            pauseMusic();
        }
    }

    const playMusic = () => {
        musicContainer.current.classList.add('play');
        audio.current.play();
        playBtn.current.querySelector('.fas').classList.remove('fa-play');
        playBtn.current.querySelector('.fas').classList.add('fa-pause');
    }

    const pauseMusic = () => {
        musicContainer.current.classList.remove('play');
        audio.current.pause();
        playBtn.current.querySelector('.fas').classList.add('fa-play');
        playBtn.current.querySelector('.fas').classList.remove('fa-pause');
    }

    const handlePrevSongs = () => {
       
        if (songIndex > 0 ) {
            console.log('works')   
            setSongIndex(songIndex - 1); 
        } else {
            setSongIndex(songs.length - 1)
        }
        musicContainer.current.classList.remove('play');
        setTimeout(() => {
            handlePlayStatus()
        }, 500);
    }

    const handleNextSongs = () => {
        if (songIndex >= songs.length - 1) {
            setSongIndex(0);
        } else {
            setSongIndex(songIndex+1);
        }
        musicContainer.current.classList.remove('play');
        setTimeout(() => {
            handlePlayStatus()
        }, 500);
        console.log(songIndex);
    }


    return (
    <div ref={musicContainer} className="music-container">
        <div className="progress-container">
            <h2 ref={progressTitle} className="progress-title">{songs[songIndex]}</h2>
            <div className="progress" onClick={setProgress}>
                <div ref={progressBar} className="progress-bar"></div>
            </div>
        </div>

        <audio ref={audio} src={records[songIndex]} ></audio>

        <div className="img-container">
            <img ref={cover} className="cover" src={images[songIndex]} alt=""/>
        
        </div>

        <div className="navigation">
            <button ref={prev} onClick={handlePrevSongs} className="navButton" id="prev">
                <i className="fas fa-backward fa-2x"></i>
            </button>
            <button ref={playBtn} onClick={handlePlayStatus} className="navButton" id="play">
                <i className="fas fa-play fa-2x"></i>
            </button>
            <button ref={next} onClick={handleNextSongs} className="navButton" id="next">
                <i className="fas fa-forward fa-2x"></i>
            </button>
        </div>
    </div>
    )
})

export default AudioPlayer
