import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";

import hideMobileMenu from "src/utils/hideMobileMenu";
import videos from "src/data/videos";

import "./videos.scss";

const YoutubeSlide = ({ url, isSelected }) => (
  <div className="player-wrapper">
    <ReactPlayer
      className="react-player"
      width="100%"
      height="100%"
      url={url}
      playing={isSelected}
      controls={true}
    />
  </div>
);

const Videos = () => {
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoThumb = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url) =>
    url.substr("https://www.youtube.com/embed/".length, url.length);

  const customRenderThumb = (children) =>
    children.map((item) => {
      const videoId = getVideoId(item.props.url);
      return <img src={getVideoThumb(videoId)} />;
    });

  return (
    <div className="videos" onClick={hideMobileMenu}>
      <div className="videos-title">
        <h2>Vidéos</h2>
      </div>
      <Carousel
        className="carousel-container"
        autoPlay={false}
        showArrows={true}
        showThumbs={true}
        showStatus={false}
        renderItem={customRenderItem}
        renderThumbs={customRenderThumb}
      >
        {videos.map((video) => (
          <YoutubeSlide key={video._id} url={video.url} />
        ))}
      </Carousel>
    </div>
  );
};

export default Videos;
