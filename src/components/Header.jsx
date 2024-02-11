import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
      <div className='advertising first-advertising'>
        Order over £50 have free shipping
      </div>
      <nav className='nav'>
        <img src="/imagini/logo_2.png" alt="logo" className='logo'/>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </nav>
    </header>
  );
}

export default Header;