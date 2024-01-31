import { Outlet } from "react-router-dom";
import PokemonHeader from "./PokemonHeader";

const Navbar = () => {
  return (
    <div>
      <PokemonHeader />
      <Outlet />
    </div>
  );
};

export default Navbar;
