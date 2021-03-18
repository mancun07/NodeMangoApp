import {useContext, useEffect} from 'react'
import MySwiper from './MySwiper'
import {PhotosContext} from '../context/photos/PhotosContextProvider'
import {NavbarContext} from '../context/navbar/NavbarContextProvider'
import MemberItem from './MemberItem'


const About = () => {
    const {members} = useContext(PhotosContext)
    const {setTransparentColor} = useContext(NavbarContext)
     useEffect(() => {
            setTransparentColor();


      return () => {
        setTransparentColor();
      }
    }, [])
    return (
        <>
            <MySwiper/>
  <main className="about-page__main">
    <div className="container">
        <section className="about-us-wrapper">
          <div className="about-us">
            <div className="about-us__desc">
              <p>LEATHER JACKETS (КОЖАНЫЕ КУРТКИ) — музыкальный коллектив из Санкт-Петербурга основаный в 2012 году с целью нести любовь к жизни и свободы посредством экспериментов с такими жанрами музыки, как электроник-рок, психоделический рок, арена-рок, инди-рок, гаражный рок, индастриал-рок, поп-рок.</p>
              <p>Песни группы будут понятны каждому человеку, который любит жизнь и свободу!
                Группа Кожаные Куртки основана в 2012 году и с тех пор накопила огромный опыт в написании песен и живых выступлений.</p>
            </div>
            <div className="about-us__socials">
              <h2>мы в соцсетях</h2>
              <div className="about-us__socials__socials-item">
                <a href="https://www.youtube.com/channel/UCcUbnoi0qkje6LeWTYyEIcg" target="blank">
                  <i className="fab fa-youtube"></i>
                  <span>Канал группы в YouTube</span>
                </a>
              </div>

              <div className="about-us__socials__socials-item">
                <a href="https://vk.com/kkurtki" target="blank">
                  <i className="fab fa-vk"></i>
                  <span>Сообщество группы в VK</span>
                </a>
              </div>

              <div className="about-us__socials__socials-item">
                <a href="https://www.instagram.com/music_jackets/" target="blank">
                  <i className="fab fa-instagram"></i>
                  <span>Сообщество группы в Instagram</span>
                </a>
              </div>
            </div>

          </div>
    
      
        </section>

        <section className="members-wrapper">
            <div className="members">
              <h1>Участники группы</h1>
                {members.map(member => {
                    return <MemberItem key={member.id} member={member}/>
                })}
            </div>
        </section>
    </div>
  </main>
        </>
    )
}

export default About
