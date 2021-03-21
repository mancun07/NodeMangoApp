import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewsContextProvider from './context/news/NewsContextProvider'
import PhotosContextProvider from './context/photos/PhotosContextProvider'
import VideoContextProvider from './context/video/VideoContextProvider'
import NavbarContextProvider from './context/navbar/NavbarContextProvider'

import Navbar from './components/Navbar'
import News from './components/News'
import Footer from './components/Footer'
import Photos from './components/Photos'
import About from './components/About'
import Video from './components/Video'
import AudioPlayer from './components/AudioPlayer'
import SingleNews from './components/SingleNews'
import NoMatch from './components/NoMatch'



function App() {
  return (
    <NavbarContextProvider>
    <NewsContextProvider>
    <PhotosContextProvider>
    <VideoContextProvider>
    <div className="App">
        <Router>
          <Navbar/>
          <Switch>
              <Route exact path={'/'} component={About} />

              <Route exact path={'/news'} component={News} />
                            <Route path={'/news/:id'} component={SingleNews}/>
              <Route path={'/photos'} component={Photos} />
              <Route path={'/video'} component={Video} />
              <Route path={'/audio'} component={AudioPlayer} />
              <Route path={'*'} component={NoMatch} />
          </Switch>

         </Router>
        <Footer />
    </div>
    </VideoContextProvider>
    </PhotosContextProvider>
    </NewsContextProvider>    
    </NavbarContextProvider>

  );  
}

export default App;
