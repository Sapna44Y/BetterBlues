import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDonateClick = () => {
    navigate("/donate");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-800">
          BetterBlues
        </Link>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/events" className="text-gray-700 hover:text-blue-600">
            Social Events
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Donate Button - hidden on mobile when menu is open */}
        <button
          onClick={handleDonateClick}
          className={`bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 ${
            isMenuOpen ? "hidden" : "block"
          } md:block`}
        >
          Donate
        </button>

        {/* Mobile Menu Button - hidden on desktop */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation - shown when menu is open */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/events"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Social Events
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button
              onClick={() => {
                handleDonateClick();
                setIsMenuOpen(false);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full"
            >
              Donate
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
