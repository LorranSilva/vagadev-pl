import React, { useEffect, useState } from "react";
import axios from "axios";

const Recomendacoes = ({ filter }) => { 
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        params: {
          category: filter
        },
        headers: {
          'X-RapidAPI-Key': '2c9224961cmsh460a735e3218485p174cb0jsn9074eb1a0759',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setGameData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <>
      <div>
        {gameData.map((data) => (
          <img key={data.id} alt={data.title} src={data.thumbnail} />
        ))}
      </div>
    </>
  );
};

export default Recomendacoes;
