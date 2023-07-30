import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/header/header';
import BannerSlider from './components/banner/banner';
import Card from './components/cards/cards';
import Destaque from './components/produtosDestaque/destaques';
import Footer from './components/footer/footer';
import './app.scss';
import Recomendacoes from './components/recomendacoes/recomendacoes';

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [selectedGenre, setSelectedGenre] = React.useState('');

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const gameGenres = [
    { label: 'MMORPG', value: 'mmorpg' },
    { label: 'Tiro', value: 'shooter' },
    { label: 'MOBA', value: 'moba' },
    { label: 'Anime', value: 'anime' },
    { label: 'Battle Royale', value: 'battle-royale' },
    { label: 'Estratégia', value: 'strategy' },
    { label: 'Fantásia', value: 'fantasy' },
    { label: 'Sci-Fi', value: 'sci-fi' },
    { label: 'Card Games', value: 'card' },
    { label: 'Corrida', value: 'racing' },
    { label: 'Luta', value: 'fighting' },
    { label: 'Social', value: 'social' },
    { label: 'Esportes', value: 'sports' },
  ];

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <React.StrictMode>
      <div className="app-container">
        <div className="navbar">
          <Navbar cartItems={cartItems} />
        </div>

        <div className="banner-slider">
          <BannerSlider />
        </div>
        <div className="card-container">
          <Card
            title="Ni No Kuni II"
            text="RPG"
            imageSrc="https://gamerspoilerbrasil.b-cdn.net/wp-content/uploads/2023/07/nnk2_game-thumbnail.jpg"
          />
          <Card
            title="Ni No Kuni I"
            text="RPG"
            imageSrc="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/pt_BR/games/switch/n/ni-no-kuni-wrath-of-the-white-witch-switch/hero"
          />
        </div>
        <p>Produtos em destaque</p>
        <div className="destaques-container">
            <Destaque addToCart={() => handleAddToCart({ title: "Outriders", price: "250,00"  })}
            title="Outriders"
            price="250,00"
            imageSrc="https://s3-alpha-sig.figma.com/img/667e/ac54/bb5fd4c459e5be05cd8f16b040df210a?Expires=1691366400&Signature=Ire0h3PCpt2lp9e~107XPFMj90ciG8WytvORaMgmZyszoUauh8~YlDAAGJgtTDnNl5vFBY69k29WzkTe5uFw8Q2p9BhEFwXVATkaOobghykypUY51LtZg9Hd8y7330Hpqcioog8A77mEP9iWOC0SG~hMrGoSuQl89dD9FAk7crSuJJl001aAf-0jjgejM9QTdy3wpbNjrbR2FTTQ5aosFSLua~inqnggZKA6rX7rGa~Xx7qjC4a~fv7~wJalhgzqpkpYhxxaCQ-xamhURbMHjt9OU1b9DGS3aNwJHSaeBESK8cAgmE8WaFuUiWh3-qqlj3XuEY6-uMxRlDJazMuHiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            
            <Destaque addToCart={() => handleAddToCart({ title: "Cyberpunk", price: "274,00"  })} 
            title="Cyberpunk"
            price="274,00"
            imageSrc="https://s3-alpha-sig.figma.com/img/eb3a/075a/3e59a63b565e3e85e77973be6e8b7661?Expires=1691366400&Signature=GerOd5e2ok7oVySwqn4Dket~Ix65sECJ2q~pn3IrWYuPuy0-sXS9WRlE6E~WnFecZt6zJAcmEieJ~7TLCEsv4iNKc1hUp4hJzZ1w7ySxTNx7Wp1K8~ke5KCRnSngXFh~KtcfjNGzJXnixuvxbmzrtVCxTjQhx2DcZhx03ZhufRxX-QhmKJvurapdzALvifcxHAa~q65zdkZ3D5kxvroCjD96bwEx0J5Prdga0B-qcLNEbzQ5aEm-Dv37kZ-f~~TJKMnEr46ZRasu7-Oa6PWdDUXQj6t1u1ebb5y7E67~ryihvgE6d6tNRvR38LzCWr2wqeezC3Uoq6cwGL9hVvEo6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            
            <Destaque addToCart={() => handleAddToCart({ title: "Donkey Kong Country", price: "223,00"  })} 
            title="Donkey Kong country"
            price="223,90"
            imageSrc="https://s3-alpha-sig.figma.com/img/b23d/a535/15201c4e368fbbe5414f08fae49d6e6c?Expires=1691366400&Signature=A2H8~KwHXzhddBjYaC3w0Mp3uY5WOEDoMwhUgE6ymQNWbR3nHfg8eWk2coJyS~fmB6s8wNa0VggLzgBlrCtVPicZixzpFhYXkrMgDOsRgF52-4JZ2MTtUr9uG8r3PjCoXgH2ihgHUda3ytidQKpCBXSNrKn5uEP9ykObNDO14l-HY5KvRfYou4EdYr-T8c6ES82tDjF2hv3X-I8bWyB120M5EsWcHjB8DyZ6waYIrq9ANS-InfcRuGW3odklPiqE3FHqODvuC8iRH9i5xd8~o378rj2DqfzHsfT4i1lq~u~Bsjg26WfOR~6Tkykh2KgWRbrjbFa~-6WPBOQNy9zLHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        </div>
        <div>
          <p>Dicas de games</p>
          <div>
            <select id="genreSelect" value={selectedGenre} onChange={handleGenreChange}>
              <option value="">Selecione a categoria</option>
              {gameGenres.map((genre) => (
                <option key={genre.value} value={genre.value}>
                  {genre.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Recomendacoes filter={selectedGenre}/>
          </div>
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
