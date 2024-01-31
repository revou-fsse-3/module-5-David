import Link from "next/link";

const PokemonHeader = () => {
  return (
    <div className="flex flex-row bg-yellow-400 p-8 mb-4 font-bold text-stone-50 ">
      <h1 className="text-8xl basis-1/2">
        <Link href="/">PokeDex React!</Link>
      </h1>
      <Link href="/search">
        <button className="basis-1/8 bg-yellow-600 p-8 text-4xl rounded-full">
          Search
        </button>
      </Link>
    </div>
  );
};

export default PokemonHeader;
