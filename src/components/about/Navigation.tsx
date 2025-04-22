
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-blue-600">Ratan</span>{" "}
          <span className="text-orange-500">Constructions</span>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="font-medium text-gray-600 hover:text-blue-800">Home</Link>
          <Link to="/about" className="font-medium text-blue-800 border-b-2 border-blue-800">About</Link>
          <a href="#" className="font-medium text-gray-600 hover:text-blue-800">Services</a>
          <a href="#" className="font-medium text-gray-600 hover:text-blue-800">Projects</a>
          <a href="#" className="font-medium text-gray-600 hover:text-blue-800">Clientele</a>
          <a href="#" className="font-medium text-gray-600 hover:text-blue-800">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
