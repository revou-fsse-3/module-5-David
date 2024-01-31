import Navbar from "@/components/Navbar";
import PokeInfo from "@/components/PokemonInfo";
import SearchPokemon from "@/components/SearchPokemonIndex";

const Home = () => {
  return (
    <>
      <Navbar />
      <SearchPokemon />
      <PokeInfo />
    </>
  );
};

export default Home;
