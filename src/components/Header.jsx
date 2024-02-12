import React from 'react';
import './Header.css';
import { HiOutlineHeart } from "react-icons/hi";
import { MdPerson } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { MdArrowDropDown } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <div className='advertising first-advertising'>
        Order over £50 have free shipping
      </div>
      <nav className='nav'>
        <div className='logo-container'>
            <img src="/imagini/logo_2.png" alt="logo" className='logo'/>
            <div className="dropdown">
              <button className="dropdown-toggle">
                <HiOutlineGlobeAlt />
                <MdArrowDropDown />
              </button>
              <div className="dropdown-menu">
                <a href="#">English</a>
                <a href="#">Spanish</a>
                <a href="#">Romanian</a>
              </div>
            </div>
          </div>
        <div className='buttons'>
          <button className='btn acc-btn'><MdPerson /></button>
          <button className='btn fav-btn'><HiOutlineHeart /></button>
          <button className='btn cart-btn'><IoCartOutline /></button>
        </div>
        <form action="" className='search-container'>
          <input type='text' placeholder='Search...' className='search-input'/>
          <button type='submit' className='search-button'>Search</button>
        </form>
      </nav>
    </header>
  );
}

export default Header;
