import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/header/header';
import BannerSlider from './components/banner/banner';
import Card from './components/cards/cards';
import Destaque from './components/produtosDestaque/destaques';
import Footer from './components/footer/footer';
import './app.scss';
import Recomendacoes from './components/recomendacoes/recomendacoes';
import imgDestaque from './assets/svgs/Shelf Title.svg';
import imgSekiro from './assets/img/sekiro_banner.png';
import imgZelda from './assets/img/zelda_banner.png';
import Mario from './assets/svgs/comprado-removebg-preview.svg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

const App = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
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

  const [cartItems, setCartItems] = React.useState([]);
  const [selectedGenre, setSelectedGenre] = React.useState('shooter');

  const handleAddToCart = (item) => {

    const meuBotao = document.getElementById(item.buttonId);
    if (meuBotao.disabled === true) {
      return null
    } else {
      const meuParagrafo = meuBotao.querySelector('p');
      const meuImg = document.createElement('img');
      meuImg.setAttribute('src', Mario);
      meuImg.setAttribute('alt', 'addCartSuccess');
      meuImg.setAttribute('class', 'img-mario');
      meuBotao.appendChild(meuImg);
      meuParagrafo.textContent = 'COMPRAR!';
      setCartItems([...cartItems, item]);
      meuBotao.style.backgroundColor = "#084154";
      meuBotao.style.display = "flex";
      meuBotao.style.gap = "10px";
      meuBotao.style.padding = "10px";

      meuBotao.disabled = true;
    }


  };

  const gameGenres = [
    { label: 'MMORPG', value: 'mmorpg', selected: true },
    { label: 'Shooter', value: 'shooter', selected: false },
    { label: 'PVP', value: 'pvp', selected: false },
  ];

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  if (isMobile) {
    return (
      <React.StrictMode>
        <div className="app-container">
          <div className="navbar">
            <Navbar cartItems={cartItems} />
          </div>

          <div className="banner-slider">
            <BannerSlider />

            <div className="card-container">
              <div className="card-container-2">

                <Card
                  title="The Legend of Zelda - Breath of th wild"
                  imageSrc={imgZelda} />
                <Card
                  title="SEKIRO - Shadows die twice"
                  imageSrc={imgSekiro} />

              </div>
            </div>
          </div>

          <div className="middle-container">
            <div className='container-title-shelf'>
              <img src={imgDestaque} alt=""></img>
              <p className='title-shelf'>Produtos em destaque</p>
            </div>
            <div className="destaques-container">

              <Slider ref={sliderRef} {...settings}>
                <Destaque addToCart={() => handleAddToCart({ buttonId: 1, title: "Outriders", price: "250,00" })}
                  title="Outriders"
                  price="R$ 250,00"
                  buttonId="1"
                  imageSrc="https://s3-alpha-sig.figma.com/img/667e/ac54/bb5fd4c459e5be05cd8f16b040df210a?Expires=1691366400&Signature=Ire0h3PCpt2lp9e~107XPFMj90ciG8WytvORaMgmZyszoUauh8~YlDAAGJgtTDnNl5vFBY69k29WzkTe5uFw8Q2p9BhEFwXVATkaOobghykypUY51LtZg9Hd8y7330Hpqcioog8A77mEP9iWOC0SG~hMrGoSuQl89dD9FAk7crSuJJl001aAf-0jjgejM9QTdy3wpbNjrbR2FTTQ5aosFSLua~inqnggZKA6rX7rGa~Xx7qjC4a~fv7~wJalhgzqpkpYhxxaCQ-xamhURbMHjt9OU1b9DGS3aNwJHSaeBESK8cAgmE8WaFuUiWh3-qqlj3XuEY6-uMxRlDJazMuHiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

                <Destaque addToCart={() => handleAddToCart({ buttonId: 2, title: "Cyberpunk", price: "274,00" })}
                  title="Cyberpunk"
                  price="R$ 274,00"
                  buttonId="2"
                  imageSrc="https://s3-alpha-sig.figma.com/img/eb3a/075a/3e59a63b565e3e85e77973be6e8b7661?Expires=1691366400&Signature=GerOd5e2ok7oVySwqn4Dket~Ix65sECJ2q~pn3IrWYuPuy0-sXS9WRlE6E~WnFecZt6zJAcmEieJ~7TLCEsv4iNKc1hUp4hJzZ1w7ySxTNx7Wp1K8~ke5KCRnSngXFh~KtcfjNGzJXnixuvxbmzrtVCxTjQhx2DcZhx03ZhufRxX-QhmKJvurapdzALvifcxHAa~q65zdkZ3D5kxvroCjD96bwEx0J5Prdga0B-qcLNEbzQ5aEm-Dv37kZ-f~~TJKMnEr46ZRasu7-Oa6PWdDUXQj6t1u1ebb5y7E67~ryihvgE6d6tNRvR38LzCWr2wqeezC3Uoq6cwGL9hVvEo6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

                <Destaque addToCart={() => handleAddToCart({ buttonId: 3, title: "Donkey Kong Country", price: "223,00" })}
                  title="Donkey Kong country"
                  price="R$ 223,00"
                  buttonId="3"
                  imageSrc="https://s3-alpha-sig.figma.com/img/b23d/a535/15201c4e368fbbe5414f08fae49d6e6c?Expires=1691366400&Signature=A2H8~KwHXzhddBjYaC3w0Mp3uY5WOEDoMwhUgE6ymQNWbR3nHfg8eWk2coJyS~fmB6s8wNa0VggLzgBlrCtVPicZixzpFhYXkrMgDOsRgF52-4JZ2MTtUr9uG8r3PjCoXgH2ihgHUda3ytidQKpCBXSNrKn5uEP9ykObNDO14l-HY5KvRfYou4EdYr-T8c6ES82tDjF2hv3X-I8bWyB120M5EsWcHjB8DyZ6waYIrq9ANS-InfcRuGW3odklPiqE3FHqODvuC8iRH9i5xd8~o378rj2DqfzHsfT4i1lq~u~Bsjg26WfOR~6Tkykh2KgWRbrjbFa~-6WPBOQNy9zLHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

              </Slider>
              <div className="arrow-container">
            {/* <p>{currentSlide + 1}/{games.length}</p> */}
            <button className="arrow-button" onClick={handlePrevSlide}>
              <FaChevronLeft />
            </button>
            <button className="arrow-button" onClick={handleNextSlide}>
              <FaChevronRight />
            </button>
          </div>
            </div>

          </div>
          <div className="bottom-container">
            <div className='recomendation-head'>
              <div className='container-title-shelf'>
                <img src={imgDestaque} alt=""></img>
                <p className='title-shelf'>Dicas de games</p>
              </div>
              <select className="select-recomendation" id="genreSelect" value={selectedGenre} onChange={handleGenreChange}>
                <option value="">Selecione a categoria</option>
                {gameGenres.map((genre) => (
                  <option key={genre.value} value={genre.value} selected={genre.selected}>
                    {genre.label}
                  </option>
                ))}
              </select>
            </div>
            <Recomendacoes filter={selectedGenre} />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </React.StrictMode>
    );
  }
  return (
    <React.StrictMode>
      <div className="app-container">
        <div className="navbar">
          <Navbar cartItems={cartItems} />
        </div>

        <div className="banner-slider">
          <BannerSlider />

          <div className="card-container">
            <div className="card-container-2">

              <Card
                title="The Legend of Zelda - Breath of th wild"
                imageSrc={imgZelda} />
              <Card
                title="SEKIRO - Shadows die twice"
                imageSrc={imgSekiro} />

            </div>
          </div>
        </div>

        <div className="middle-container">
          <div className='container-title-shelf'>
            <img src={imgDestaque} alt=""></img>
            <p className='title-shelf'>Produtos em destaque</p>
          </div>
          <div className="destaques-container">

            <Destaque addToCart={() => handleAddToCart({ buttonId: 1, title: "Outriders", price: "250,00" })}
              title="Outriders"
              price="R$ 250,00"
              buttonId="1"
              imageSrc="https://s3-alpha-sig.figma.com/img/667e/ac54/bb5fd4c459e5be05cd8f16b040df210a?Expires=1691366400&Signature=Ire0h3PCpt2lp9e~107XPFMj90ciG8WytvORaMgmZyszoUauh8~YlDAAGJgtTDnNl5vFBY69k29WzkTe5uFw8Q2p9BhEFwXVATkaOobghykypUY51LtZg9Hd8y7330Hpqcioog8A77mEP9iWOC0SG~hMrGoSuQl89dD9FAk7crSuJJl001aAf-0jjgejM9QTdy3wpbNjrbR2FTTQ5aosFSLua~inqnggZKA6rX7rGa~Xx7qjC4a~fv7~wJalhgzqpkpYhxxaCQ-xamhURbMHjt9OU1b9DGS3aNwJHSaeBESK8cAgmE8WaFuUiWh3-qqlj3XuEY6-uMxRlDJazMuHiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

            <Destaque addToCart={() => handleAddToCart({ buttonId: 2, title: "Cyberpunk", price: "274,00" })}
              title="Cyberpunk"
              price="R$ 274,00"
              buttonId="2"
              imageSrc="https://s3-alpha-sig.figma.com/img/eb3a/075a/3e59a63b565e3e85e77973be6e8b7661?Expires=1691366400&Signature=GerOd5e2ok7oVySwqn4Dket~Ix65sECJ2q~pn3IrWYuPuy0-sXS9WRlE6E~WnFecZt6zJAcmEieJ~7TLCEsv4iNKc1hUp4hJzZ1w7ySxTNx7Wp1K8~ke5KCRnSngXFh~KtcfjNGzJXnixuvxbmzrtVCxTjQhx2DcZhx03ZhufRxX-QhmKJvurapdzALvifcxHAa~q65zdkZ3D5kxvroCjD96bwEx0J5Prdga0B-qcLNEbzQ5aEm-Dv37kZ-f~~TJKMnEr46ZRasu7-Oa6PWdDUXQj6t1u1ebb5y7E67~ryihvgE6d6tNRvR38LzCWr2wqeezC3Uoq6cwGL9hVvEo6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

            <Destaque addToCart={() => handleAddToCart({ buttonId: 3, title: "Donkey Kong Country", price: "223,00" })}
              title="Donkey Kong country"
              price="R$ 223,00"
              buttonId="3"
              imageSrc="https://s3-alpha-sig.figma.com/img/b23d/a535/15201c4e368fbbe5414f08fae49d6e6c?Expires=1691366400&Signature=A2H8~KwHXzhddBjYaC3w0Mp3uY5WOEDoMwhUgE6ymQNWbR3nHfg8eWk2coJyS~fmB6s8wNa0VggLzgBlrCtVPicZixzpFhYXkrMgDOsRgF52-4JZ2MTtUr9uG8r3PjCoXgH2ihgHUda3ytidQKpCBXSNrKn5uEP9ykObNDO14l-HY5KvRfYou4EdYr-T8c6ES82tDjF2hv3X-I8bWyB120M5EsWcHjB8DyZ6waYIrq9ANS-InfcRuGW3odklPiqE3FHqODvuC8iRH9i5xd8~o378rj2DqfzHsfT4i1lq~u~Bsjg26WfOR~6Tkykh2KgWRbrjbFa~-6WPBOQNy9zLHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

          </div>

        </div>
        <div className="bottom-container">
          <div className='recomendation-head'>
            <div className='container-title-shelf'>
              <img src={imgDestaque} alt=""></img>
              <p className='title-shelf'>Dicas de games</p>
            </div>
            <select className="select-recomendation" id="genreSelect" value={selectedGenre} onChange={handleGenreChange}>
              <option value="">Selecione a categoria</option>
              {gameGenres.map((genre) => (
                <option key={genre.value} value={genre.value} selected={genre.selected}>
                  {genre.label}
                </option>
              ))}
            </select>
          </div>
          <Recomendacoes filter={selectedGenre} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
