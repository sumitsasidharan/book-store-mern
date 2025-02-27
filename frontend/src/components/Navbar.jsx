import { Link } from 'react-router-dom';
import { LiaBarsSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6" >
      <nav className="flex justify-between items-center" >
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4" >
          <Link to="/">
            <LiaBarsSolid className="size-6" />
          </Link>

          {/* search input */}

        </div>

        {/* right side */}
        <div>
        <CiSearch /> 
        <input type="text" placeholder="Searh here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none" />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
// 1:11:00