import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { useStateValue } from './Stateprovider';
import { auth } from './firebase';




function Header() {

    const [{basket,user},dispatch] = useStateValue();


    const handleClick=()=>{
        if(user){
            auth.signOut();
        }
    }

  return (
    <div className='header'>
    <Link to="/">
    <img className='header-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBZsOV_lhvC7eymRovQqQ4bbxGVZ_JfgBWA&usqp=CAU'
        alt=''
    />
    </Link>
    
    <div className='header-search'>
    <input className='header-search-input'
        type="text"
    />
    <SearchIcon className="header-searchIcon"/>

    </div>
    <div className='header-nav'>
       <Link to={!user && "/login"}>
       <div onClick={handleClick} className='header-option'>
        <span className='header-optionLineOne'>
            hello {user?.email.slice(0,4)}
        </span>
        <span className='header-optionLineTwo'>
            {user?"Sign out":"sign in"}
        </span>
        </div>
       </Link>
        <div className='header-option'>
        <span className='header-optionLineOne'>
            retuns
        </span>
        <span className='header-optionLineTwo'>
            &orders
        </span>
            
        </div>
        <div className='header-option'>
        <span className='header-optionLineOne'>
            your
        </span>
        <span className='header-optionLineTwo'>
            prime
        </span>
            
        </div>
        <Link to="/checkout">
        <div className='header-optionBasket'>
        
        <ShoppingCartIcon/>
        
        
        <span className='header-optionLineTwo
         header-basketCount'>
         {basket?.length}

        </span>

            
        </div>
        </Link>
    </div>
    
    
    </div>
  )
}

export default Header