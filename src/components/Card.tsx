import React, { FC } from "react";

interface Pokemon {
  stats: any;
  types: any;
  id: number;
  name: string;
  sprites: {
    other: any;
  };
}

interface CardProps {
  pokemon: Pokemon[];
  loading: boolean;
}

const Card: FC<CardProps> = ({ pokemon, loading }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          console.log(item);
          return (
            <>
              <div className="grid grid-cols-2 text-xl p-3 font-bold text-stone-800 capitalize bg-blue-200 mx-4 w-full rounded-md shadow-lg">
                <div className="flex flex-col">
                  <h2 className="tracking-tighter bg-yellow-600 rounded-full text-white w-1/6 text-center">
                    {item.id}
                  </h2>
                  <img
                    className="mt-6 w-24"
                    src={item.sprites.other.showdown.front_default}
                    alt={item.name}
                  />
                  <h2 className="pt-8">{item.name}</h2>
                </div>
                <div>
                  <h3>Types : </h3>
                  <div className="type">
                    {item.types.map((types: any, index: any) => (
                      <div key={index}>
                        <h4 className="text-base">{types.type.name}</h4>
                      </div>
                    ))}
                  </div>
                  <div className="base-stat">
                    <h2>Base Stats:</h2>
                    {item.stats.map((stat: any, index: any) => (
                      <div key={index}>
                        <h3 className="text-base">
                          {stat.stat.name}: {stat.base_stat}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
