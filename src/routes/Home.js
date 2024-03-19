function Home() {
  return (
    <div className="home">
      <div className="cover">
        <img className="cover-photo" src="cover_photo.jpg" alt="cover" />
      </div>
      <div className="content-body audio">
        <div className="inner-content">
          <h1>LISTEN TO MY MUSIC</h1>
          <iframe className="spotify-player" src="https://open.spotify.com/embed/artist/0g8QobxQN6Ycsqbr5t0pBX?utm_source=generator" title="Spotify audio player" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
      <div className="content-body bookings">
        <div className="inner-content stretch">
          <h1>LET ME PLAY FOR YOU</h1>
          <div className="button-container">
            <a>BOOK NOW</a>
            <a>UPCOMING SHOWS</a>
          </div>
        </div>
      </div>
      <div className="content-body video">
        <div className="inner-content stretch">
          <h1>LOOK, I MADE YOU SOME CONTENT</h1>
          <div className="video-container container-xl d-flex justify-content-center">
            <div className="row">
              <div className="col-xl-3">
                <iframe className="youtube-player" src="https://www.youtube.com/embed/O5Zd04dt9-A?si=SkZz2PT-Q4xY5jwl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
              </div>
              <div className="col-xl-3">
                <iframe className="youtube-player" src="https://www.youtube.com/embed/Qey4qv3KnYI?si=wOrA7rqFIYjx8YAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
              </div>
              <div className="col-xl-3">
                <iframe className="youtube-player" src="https://www.youtube.com/embed/Mw-tnLYUUWU?si=YamIeAI598YMLZK2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
              </div>
              <div className="col-xl-3">
                <iframe className="youtube-player" src="https://www.youtube.com/embed/ygOsHzx8rwg?si=Fi6PIqlwmxXkGupn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="button-container">
            <a href="https://www.youtube.com/@samswerczek" target="_blank" rel="noreferrer">VIEW MORE</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;