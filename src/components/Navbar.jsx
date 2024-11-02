import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-[#1f861f] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Sapucraft!</h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Inicio</Link>
          <Link to="/jugadores" className="text-white hover:text-gray-300">Jugadores</Link>
          <Link to="/memories" className="text-white hover:text-gray-300">Recuerdos</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
