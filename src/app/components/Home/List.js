"use client";

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Data from '../../pages/shared/Data';

function GameList({ onGameSelect }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (Data?.List) {
      setGames(Data.List);
    }
  }, []);

  const handleGameClick = (gameName) => {
    if (onGameSelect) onGameSelect(gameName);
  };

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {games.length > 0 ? (
        games.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => handleGameClick(item.name)}
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 shadow-md group-hover:scale-105 transition-transform duration-300">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <p className="mt-2 text-center text-sm font-semibold text-gray-700 group-hover:text-black">
              {item.name}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No games available</p>
      )}
    </div>
  );
}

export default GameList;
