import { useState } from "react";
import logo from "../../assets/CodeSandbox.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#1B0C4D]">
      {/* First div: Logo and heading */}
      <div className="flex justify-between items-center px-4 py-4 max-w-7xl mx-auto min-w-[320px]">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-[54px] w-[54px] mr-3" />
          <h1 className="text-white font-medium text-[34px]">CodeLearn</h1>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Middle div: Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white text-lg">
            Home
          </a>
          <a href="#courses" className="text-white text-lg">
            Courses
          </a>
          <a href="#about" className="text-white text-lg">
            About Us
          </a>
          <a href="#pricing" className="text-white text-lg">
            Pricing
          </a>
          <a href="#contact" className="text-white text-lg">
            Contact
          </a>
        </div>

        {/* Third div: Login and Signup buttons */}
        <div className="hidden md:flex space-x-4 text-xl font-medium">
          <button className="bg-[#EAE34A] text-[#10005A] w-[93px] h-[48px] rounded-md">
            Login
          </button>
          <button className="bg-[#37266F] text-white w-[93px] h-[48px] rounded-md">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1B0C4D]">
          <div className="flex flex-col space-y-4 px-4 py-2">
            <a href="#home" className="text-white text-lg">
              Home
            </a>
            <a href="#courses" className="text-white text-lg">
              Courses
            </a>
            <a href="#about" className="text-white text-lg">
              About Us
            </a>
            <a href="#pricing" className="text-white text-lg">
              Pricing
            </a>
            <a href="#contact" className="text-white text-lg">
              Contact
            </a>
            <div className="flex flex-col space-y-4">
              <button className="bg-[#EAE34A] text-[#10005A] w-full h-[48px] rounded-md">
                Login
              </button>
              <button className="bg-[#37266F] text-white w-full h-[48px] rounded-md">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
