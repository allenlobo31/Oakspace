import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ContactsIcon from '@mui/icons-material/Contacts';

function Navbar(){
    const { cartItemsCount, searchQuery, setSearchQuery, isAdmin } = useApp();
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (showSearch) setShowSearch(false);
    };

    return(
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent hover:bg-white transition-all ease-in-out duration-700 group">    
            {/* Top Navigation */}
            <div className="container mx-auto flex justify-between items-center py-[25px] px-[30px]">
                {/* Left Side - Cart, Like & Contact Icons (Mobile) */}
                <div className="flex items-center space-x-4 md:hidden">
                    <a href="/" className="text-white group-hover:text-black transition-all ease-in-out duration-700">
                        <PersonOutlineIcon className="text-2xl" />
                    </a>
                    <a href="/" className="text-white group-hover:text-black transition-all ease-in-out duration-700">
                        <FavoriteBorderIcon className="text-2xl" />
                    </a>
                    <a href="/" className="text-white group-hover:text-black transition-all ease-in-out duration-700">
                        <ShoppingCartOutlinedIcon className="text-2xl" />
                    </a>
                </div>

                {/* Desktop Search (Hidden on Mobile) */}
                <ul className="hidden md:flex space-x-8 items-center">
                    <li className="flex items-center space-x-2">
                        <div className="flex items-center border border-white group-hover:border-black px-1 py-2 transition-all duration-700">
                            <input 
                                type="text"
                                placeholder="Search your dream furniture"
                                className="bg-transparent text-white placeholder-white group-hover:placeholder-black group-hover:text-black outline-none w-[264px] transition-all duration-700"
                            />
                            <button className="text-white group-hover:text-black transition-all ease-in-out duration-700 hover:scale-110 ml-2">
                                <SearchOutlinedIcon className="text-2xl" />
                            </button>
                        </div>
                    </li>
                </ul>

                {/* Center Logo */}
                <Link to="/" className="text-white group-hover:text-black transition-all ease-in-out duration-700 text-2xl font-bold hover:scale-105">
                    OakSpace
                </Link>

                {/* Right Side Mobile Controls */}
                <div className="flex items-center space-x-4 md:hidden">
                    <a href="/" className="text-white group-hover:text-black transition-all ease-in-out duration-700">
                        <ContactsIcon className="text-2xl" />
                    </a>
                    <button 
                        onClick={toggleSearch}
                        className="text-white group-hover:text-black transition-all duration-700"
                    >
                        {showSearch ? (
                            <CloseIcon className="text-2xl" />
                        ) : (
                            <SearchOutlinedIcon className="text-2xl" />
                        )}
                    </button>
                    <button 
                        onClick={toggleMenu}
                        className="text-white group-hover:text-black transition-all duration-700"
                    >
                        {isMenuOpen ? <CloseIcon className="text-2xl" /> : <MenuIcon className="text-2xl" />}
                    </button>
                </div>

                {/* Desktop Navigation (Hidden on Mobile) */}
                <ul className="hidden md:flex md:space-x-4 lg:space-x-8 items-center">
                    <li><Link to="/admin" className="text-white group-hover:text-black transition-all ease-in-out duration-700 hover:scale-110">
                        <PersonOutlineIcon className="text-3xl" />
                    </Link></li>
                    <li><a href="#contact" className="text-white group-hover:text-black transition-all ease-in-out duration-700 hover:scale-110">
                        <ContactsIcon className="text-3xl" />
                    </a></li>
                    <li><a href="#favorites" className="text-white group-hover:text-black transition-all ease-in-out duration-700 hover:scale-110">
                        <FavoriteBorderIcon className="text-3xl" />
                    </a></li>
                    <li><Link to="/cart" className="text-white group-hover:text-black transition-all ease-in-out duration-700 hover:scale-110 relative">
                        <ShoppingCartOutlinedIcon className="text-3xl" />
                        {cartItemsCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                                {cartItemsCount}
                            </span>
                        )}
                    </Link></li>
                    <li>
                        <Link to="/admin" className="bg-transparent text-white group-hover:text-black border border-white group-hover:border-black px-6 py-2.5 rounded-full transition-all ease-in-out duration-700 hover:scale-105 text-sm font-medium tracking-wider uppercase">
                            {isAdmin ? 'Admin' : 'Login'}
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Search Dropdown */}
            <div className={`md:hidden transition-all duration-700 overflow-hidden ${showSearch ? 'h-16' : 'h-0'}`}>
                <div className="container mx-auto px-[35px]">
                    <div className="flex items-center border border-white group-hover:border-black rounded-lg overflow-hidden">
                        <input 
                            type="text"
                            placeholder="Search your dream furniture"
                            className="w-full px-4 py-2 bg-transparent text-white placeholder-white group-hover:placeholder-black group-hover:text-black outline-none transition-all duration-700"
                            autoFocus={showSearch}
                        />
                        <button className="px-4 py-2 text-white group-hover:text-black transition-all duration-700">
                            <SearchOutlinedIcon className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop Categories Menu */}
            <div className="hidden md:flex flex-col justify-center items-center w-full pb-3 hover:bg-white/10 transition-all duration-700">
                {/* First Row - Navigation Links */}
                <ul className="flex items-center justify-center w-full md:space-x-8 lg:space-x-8 lg:mb-1 md:mb-0 md:mt-3">
                    <li><Link to="/" className="text-white md:text-[20px] group-hover:text-black transition-all ease-in-out duration-700 hover:scale-110 text-sm font-medium tracking-wide">
                        Home
                    </Link></li>
                    <li><Link to="/products" className="text-white md:text-[20px] group-hover:text-black transition-all ease-in-out duration-700 hover:scale-110 text-sm font-medium tracking-wide">
                        All Products
                    </Link></li>
                    <li><Link to="/products" className="text-white md:text-[20px] group-hover:text-black transition-all ease-in-out duration-700 hover:scale-110 text-sm font-medium tracking-wide">
                        Living Room
                    </Link></li>
                    <li><Link to="/products" className="text-white md:text-[20px] group-hover:text-black transition-all ease-in-out duration-700 hover:scale-110 text-sm font-medium tracking-wide">
                        Bedroom
                    </Link></li>
                    <li><Link to="/products" className="text-white md:text-[20px] group-hover:text-black transition-all ease-in-out duration-700 hover:scale-110 text-sm font-medium tracking-wide">
                        Office
                    </Link></li>
                </ul>

                {/* Second Row - More Categories */}
                <ul className="flex items-center justify-center w-full md:space-x-10 lg:space-x-8">
                    <li><Link to="/products" className="text-white md:text-[20px] group-hover:text-black transition-all ease-in-out duration-700 hover:scale-110 text-sm font-medium tracking-wide">
                        Dining Room
                    </Link></li>
                    <li><Link to="/cart" className="text-white md:text-[20px] group-hover:text-black transition-all ease-in-out duration-700 hover:scale-110 text-sm font-medium tracking-wide">
                        Cart ({cartItemsCount})
                    </Link></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-700 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className={`fixed right-0 top-0 h-full w-64 bg-white/30 backdrop-blur-md transform transition-transform duration-700 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 bg-transparent">
                        {/* Close Button */}
                        <button 
                            onClick={toggleMenu}
                            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-300"
                        >
                            <CloseIcon className="text-3xl hover:scale-110 transition-transform duration-300" />
                        </button>

                        {/* Mobile Navigation Links */}
                        <div className="space-y-4 mt-8">
                            <a href="/" className="block text-white hover:text-gray-200 transition-colors duration-300">Best Seller</a>
                            <a href="/" className="block text-white hover:text-gray-200 transition-colors duration-300">Antique Furniture</a>
                            <a href="/" className="block text-white hover:text-gray-200 transition-colors duration-300">New Arrivals</a>
                            <a href="/" className="block text-white hover:text-gray-200 transition-colors duration-300">Mandir</a>
                            <a href="/" className="block text-white hover:text-gray-200 transition-colors duration-300">Office Furniture</a>
                            <a href="/" className="block text-white hover:text-gray-200 transition-colors duration-300">Home Decors</a>
                            <a href="/" className="block text-white hover:text-gray-200 transition-colors duration-300">Children's Section</a>
                        </div>

                        {/* Mobile Login Button */}
                        <button className="w-full bg-white/20 hover:bg-white/30 text-white px-6 py-2.5 rounded-full transition-all duration-300 mt-4 backdrop-blur-sm">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </nav> 
    );
}

export default Navbar;