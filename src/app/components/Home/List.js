"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Data from '../../pages/shared/Data';

function GameList({ onGameSelect }) { // Receive the onGameSelect prop
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (Data && Data.List) {
      setGames(Data.List);
    }
  }, []);

  const handleGameClick = (gameName) => {
    onGameSelect(gameName); // Trigger the search based on game name
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {games.length > 0 ? (
        games.map((item) => (
          <div key={item.id} className="flex flex-col items-center group">
            <div 
              className="relative w-16 h-16 overflow-hidden rounded-full bg-gray-200 mt-6 group-hover:scale-105 transition-transform duration-300"
              onClick={() => handleGameClick(item.name)} // Handle game click
            >
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 4rem, (max-width: 1200px) 5rem, 6rem"
                className="w-full h-full"
              />
            </div>
            <p className="mt-2 text-center text-sm font-semibold">{item.name}</p>
          </div>
        ))
      ) : (
        <p>No games available</p>
      )}
    </div>
  );
}

export default GameList;
