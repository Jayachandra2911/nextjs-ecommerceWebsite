import Link from "next/link"; 
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";


const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
        <div className="flex items-center justify-between h-full md:hidden">
            {/* Mobile Navbar */}
            <Link href="/">
                <div className="text-2xl tracking-wide">Zudio</div>
            </Link>
            <Menu />
                </div>
            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center justify-center h-full gap-8">
            {/*left side*/}
            <div className="w-1/3">
                <Link href="/" className="flex items-center  gap-3">
                    <img src="/logo.png" alt="Zudio" width={24} height={24} />
                    <div className="text-2xl tracking-wide">Zudio</div>
                </Link>
            </div>
            {/*Right side*/}
            <div className="w-2/3 flex items-center justify-between gap-8">
                <SearchBar />
                <NavIcons />
            </div>
        </div>
    </div>
  );
}

export default Navbar;