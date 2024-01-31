import { default as Axios } from "axios";
import { useState } from "react";

function SearchPokemon() {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [pokemonChosen, setPokemonChosen] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<{
    name: string;
    height: number;
    weight: number;
    img: string;
    hp: string;
    attack: string;
    defense: string;
    type: string;
  }>({
    name: "",
    height: 0,
    weight: 0,
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const searchPokemon = (): void => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
      (response: any) => {
        setPokemon({
          name: pokemonName,
          height: response.data.height,
          weight: response.data.weight,
          img: response.data.sprites.other.showdown.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defense: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonChosen(true);
      }
    );
  };

  return (
    <div className="App">
      <div className="flex flex-col bg-yellow-400 p-8 text-8xl font-bold text-stone-50 ">
        <input
          type="text"
          className="self-center my-2 mt-8 w-1/4 rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
          placeholder="Type here!"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        />
        <button
          className="self-center my-2 bg-yellow-600 w-1/4 rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-center focus:ring-2 focus:ring-inset focus:ring-yellow-900 sm:text-sm sm:leading-6"
          onClick={searchPokemon}
        >
          Search Pokemon
        </button>
      </div>
      <div className="flex flex-col items-center">
        {!pokemonChosen ? (
          <h1 className="text-4xl font-bold"> Search a Pokemon! </h1>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-stone-800 py-4 capitalize m-4 bg-blue-200 w-1/4 rounded-md shadow-lg">
              {pokemon.name}
            </h1>
            <img className="w-60" src={pokemon.img} alt={pokemon.name} />

            <h3 className="text-4xl font-bold text-stone-800 py-4 capitalize m-1 bg-blue-200 w-1/4 rounded-md shadow-lg">
              Type: {pokemon.type}
            </h3>
            <h4 className="text-4xl font-bold text-stone-800 py-4 capitalize m-1 bg-blue-200 w-1/4 rounded-md shadow-lg">
              HP: {pokemon.hp}
            </h4>
            <h4 className="text-4xl font-bold text-stone-800 py-4 capitalize m-1 bg-blue-200 w-1/4 rounded-md shadow-lg">
              Attack: {pokemon.attack}
            </h4>
            <h4 className="text-4xl font-bold text-stone-800 py-4 capitalize m-1 bg-blue-200 w-1/4 rounded-md shadow-lg">
              Defense: {pokemon.defense}
            </h4>
            <h4 className="text-4xl font-bold text-stone-800 py-4 capitalize m-1 bg-blue-200 w-1/4 rounded-md shadow-lg">
              Height: {pokemon.height}
            </h4>
            <h4 className="text-4xl font-bold text-stone-800 py-4 capitalize m-1 bg-blue-200 w-1/4 rounded-md shadow-lg">
              Weight: {pokemon.weight}
            </h4>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchPokemon;
