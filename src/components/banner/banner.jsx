import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './banner.scss';
import jogoUm from '../../assets/img/principal_banner_desktop 1.png';
import jogoDois from '../../assets/img/principal_banner_desktop_02.png';

const BannerSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

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
      description: 'Dragon Quest Champions é um videogame RPG de ação baseado em turnos desenvolvido pela Omega Force, uma divisão da Koei Tecmo, com publicação da Square Enix.',
      price: '$49.99',
      imageUrl: jogoUm,
    },
    {
      name: 'Red dead redemption 2',
      description: 'Kingdom Hearts III é um jogo eletrônico do gênero RPG de ação desenvolvido e publicado pela Square Enix e distribuído pela Disney Interactive Studios para o PlayStation 4 e Xbox One.',
      price: '$59.99',
      imageUrl: jogoDois,
    },
  ];

  return (
    <div className="banner-slider">
      <Slider ref={sliderRef} {...settings}>
        {games.map((game, index) => (
          <div key={index} className="slide">
            <img src={game.imageUrl} alt={`Slide ${index + 1}`} />
            <div className="game-details">
              <span>{game.name}</span>
              <p className="game-description">{game.description}</p>
              <p className="game-price">{game.price}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="game-info">
        <span className="game-name">{games[currentSlide].name}</span>
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
    </div>
  );
};

export default BannerSlider;
