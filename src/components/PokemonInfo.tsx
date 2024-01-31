import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

interface Pokemon {
  stats: any;
  types: any;
  id: number;
  name: string;
  sprites: {
    other: any;
  };
}
interface PokemonApiResults {
  url: string;
}

const PokeInfo: React.FC = () => {
  const [pokeData, setPokeData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState<string | undefined>();
  const [prevUrl, setPrevUrl] = useState<string | undefined>();

  const getPokemon = async (res: PokemonApiResults[]): Promise<void> => {
    const newPokeData: Pokemon[] = [];
    for (const item of res) {
      const result = await axios.get<Pokemon>(item.url);
      newPokeData.push(result.data);
    }
    setPokeData([...pokeData, ...newPokeData].sort((a, b) => a.id - b.id));
  };

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get<{
      results: PokemonApiResults[];
      next?: string;
      previous?: string;
    }>(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  useEffect(() => {
    pokeFun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return (
    <>
      <div>
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          <Card pokemon={pokeData} loading={loading} />

          <div className="flex text-center ">
            {prevUrl && (
              <button
                className="mx-10 text-2xl bg-blue-200 rounded-md mx-4 w-4/5 px-8"
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl || "");
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                className="mx-10 text-2xl bg-blue-200 rounded-md mx-4 w-4/5 px-8"
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeInfo;
