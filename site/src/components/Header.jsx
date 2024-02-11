import React from 'react';
import './Header.css';
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs"; 
import { FaRegHeart } from "react-icons/fa"; 
import { MdAccountBox } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <div className='advertising first-advertising'>
        Order over £50 have free shipping
      </div>
      <nav className='nav'>
        <img src="/imagini/logo_2.png" alt="logo" className='logo'/>
        <form action="" className='search-container'>
          <input type='text' placeholder='Search...' className='search-input'/>
          <button type='submit' className='search-button'><HiMagnifyingGlass className='mglass'/></button>
        </form>
        <div className='buttons'>
          <button className='btn acc-btn'><MdAccountBox /></button>
        </div>
        <div className='buttons'>
          <button className='btn fav-btn'><FaRegHeart /></button>
        </div>
        <div className='buttons'>
          <button className='btn cart-btn'><BsCart2 /></button>
        </div>
      </nav>
    </header>
  );
}

export default Header;