import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const NavBar = ({onSearch}) => {
    return (
        
        <NavCtn>
            <div>
                <Link to='/'>
                    <span>Weather App</span>
                </Link>
            </div>

            <div>
                <SearchBar
                
                    onSearch={onSearch}
                />
            </div>

        </NavCtn>
            
    
    )
}

export default NavBar


const NavCtn = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 10px;
    margin: 0 20px;
    background: rgba(30,30,30,0.5);
    font-size: 18px;
    font-weight: bold;
    
    a{
        text-decoration: none;
        color: #fff;
        letter-spacing: 0.5px;
        font-size: 18px;
    }
    a:hover{
        color: #000;
    }

    @media screen and (max-width: 900px){
        display: flex;
        justify-content: center;
        padding: 6px;
        margin: 2px 12px;
        font-size: 14px;
        margin: 0;
        a{
            font-size:  16px;
            margin-right: 10px;
        }
    }
`


