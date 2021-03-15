import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewsState from './context/news/NewsState'
import PhotosState from './context/photos/PhotosState'
import VideoState from './context/video/VideoState'
import NavbarState from './context/navbar/NavbarState'

import Navbar from './components/Navbar'
import News from './components/News'
import Footer from './components/Footer'
import Photos from './components/Photos'
import About from './components/About'
import Video from './components/Video'
import AudioPlayer from './components/AudioPlayer'
import SingleNews from './components/SingleNews'



function App() {
  return (
    <NavbarState>
    <NewsState>
    <PhotosState>
    <VideoState>
    <div className="App">
        <Router>
          <Navbar/>
          <Switch>
              <Route exact path={'/single-page-app'} component={About} />
              <Route exact path={'/single-page-app/news'} component={News} />
              <Route path={'/single-page-app/photos'} component={Photos} />
              <Route path={'/single-page-app/video'} component={Video} />
              <Route path={'/single-page-app/audio'} component={AudioPlayer} />
              <Route path={'/single-page-app/news/:id'} component={SingleNews} />
          </Switch>

         </Router>
        <Footer />
    </div>
    </VideoState>
    </PhotosState>
    </NewsState>    
    </NavbarState>

  );  
}

export default App;
