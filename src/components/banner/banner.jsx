import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
//import { useMediaQuery } from 'react-responsive'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './banner.scss';
import jogoUm from '../../assets/img/principal_banner_desktop 1.png';
import jogoDois from '../../assets/img/principal_banner_desktop_02.png';

const BannerSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  //const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const settings = {
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      sliderRef.current.slickGoTo(sliderRef.current.props.children.length - 1);
    } else {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextSlide = () => {
    if (currentSlide === sliderRef.current.props.children.length - 1) {
      sliderRef.current.slickGoTo(0);
    } else {
      sliderRef.current.slickNext();
    }
  };

  const games = [
    {
      name: 'Mortal Kombat',
      description: 'Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.',
      price: 'R$299.99',
      imageUrl: jogoUm,
    },
    {
      name: 'Red dead redemption 2',
      description: 'Red dead 2 combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.',
      price: 'R$399.99',
      imageUrl: jogoDois,
    },
  ];

  return (
    <div className="banner-slider">

      <Slider ref={sliderRef} {...settings}>
        {games.map((game, index) => (
          <div key={index} className="slide">
            <div className="sub-banner">
              <img className="img-banner" src={game.imageUrl} alt={`Slide ${index + 1}`} />
              <div className="game-details">
                <span className="name">{game.name}</span>
                <p className="price">{game.price}</p>
                <p className="description">{game.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
<div className="game-info">

  <span className="game-name">{games[currentSlide].name}<span></span></span>

  <div className="arrow-container">
    <p>{currentSlide + 1}/{games.length}</p>
    <button className="arrow-button" onClick={handlePrevSlide}>
      <FaChevronLeft />
    </button>
    <button className="arrow-button" onClick={handleNextSlide}>
      <FaChevronRight />
    </button>
  </div>
</div>
    </div >
  );
};

export default BannerSlider;
