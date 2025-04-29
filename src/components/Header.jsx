// import { FaSearch, FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-slate-200 shadow-md">
//       <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
//         {/* Logo */}
//         <Link to="/">
//           <h1 className="font-bold text-lg sm:text-xl flex flex-wrap">
//             <span className="text-slate-500">Estate</span>
//             <span className="text-slate-700">Ease</span>
//           </h1>
//         </Link>

//         {/* Search Bar */}
//         <form className="bg-slate-100 p-2 rounded-lg flex items-center w-full sm:w-auto max-w-md me-5">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-transparent focus:outline-none w-full sm:w-64 px-2"
//           />
//           <button>
//             <FaSearch className="text-slate-600" />
//           </button>
//         </form>

//         {/* Mobile Menu Button */}
//         <button
//           className="sm:hidden text-slate-700"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <FaBars size={20} />
//         </button>

//         {/* Desktop Navigation */}
//         <ul className="hidden sm:flex gap-4">
//           <Link to="/">
//             <li className="text-slate-700 hover:underline">Home</li>
//           </Link>
//           <Link to="/about">
//             <li className="text-slate-700 hover:underline">About</li>
//           </Link>
//           <Link to="/login">
//             <li className="text-slate-700 hover:underline">Sign in</li>
//           </Link>
//         </ul>
//       </div>

//       {/* Mobile Navigation (Dropdown) */}
//       {menuOpen && (
//         <ul className="sm:hidden flex flex-col gap-3 p-3 bg-slate-100 border-t">
//           <Link to="/" onClick={() => setMenuOpen(false)}>
//             <li className="text-slate-700 hover:underline">Home</li>
//           </Link>
//           <Link to="/about" onClick={() => setMenuOpen(false)}>
//             <li className="text-slate-700 hover:underline">About</li>
//           </Link>
//           <Link to="/login" onClick={() => setMenuOpen(false)}>
//             <li className="text-slate-700 hover:underline">Sign in</li>
//           </Link>
//         </ul>
//       )}
//     </header>
//   );
// }
// 



import { FaBars, FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        {/* Logo with larger size */}
        <Link to="/" className="flex items-center">
          <h1 className="font-bold text-2xl sm:text-3xl flex flex-wrap">
            <span className="text-blue-600">Estate</span>
            <span className="text-blue-800">Ease</span>
          </h1>
        </Link>

        {/* Desktop Navigation with perfect spacing */}
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className="group flex flex-col items-center">
            <FaHome className="text-blue-600 text-xl group-hover:text-blue-800 transition-colors" />
            <span className="text-slate-700 text-sm group-hover:text-blue-800 font-medium transition-colors">
              Home
            </span>
          </Link>
          
          <Link to="/about" className="group flex flex-col items-center">
            <FaInfoCircle className="text-blue-600 text-xl group-hover:text-blue-800 transition-colors" />
            <span className="text-slate-700 text-sm group-hover:text-blue-800 font-medium transition-colors">
              About
            </span>
          </Link>
          
          <Link to="/contact" className="group flex flex-col items-center">
            <FaPhone className="text-blue-600 text-xl group-hover:text-blue-800 transition-colors" />
            <span className="text-slate-700 text-sm group-hover:text-blue-800 font-medium transition-colors">
              Contact
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Button with better styling */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <FaBars className="text-slate-700 text-2xl" />
        </button>
      </div>

      {/* Mobile Navigation with enhanced design */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col space-y-4 p-4">
            <Link 
              to="/" 
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <FaHome className="text-blue-600 text-xl" />
              <span className="text-slate-700 font-medium">Home</span>
            </Link>
            
            <Link 
              to="/about" 
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <FaInfoCircle className="text-blue-600 text-xl" />
              <span className="text-slate-700 font-medium">About</span>
            </Link>
            
            <Link 
              to="/contact" 
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <FaPhone className="text-blue-600 text-xl" />
              <span className="text-slate-700 font-medium">Contact</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}