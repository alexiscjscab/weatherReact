import React,{useState} from 'react';
import styled from 'styled-components';

const SearchBar = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
        <FormSearch onSubmit={(e) => {
            e.preventDefault();
            onSearch(city);
            setTimeout(() => {
                setCity('')
            },800);
        }}>
            <input 
                className='entrada'
                type='text'
                placeholder='City...'
                value={city}
                onChange={e => setCity(e.target.value)}
            />
            <input
                
                type='submit'
                value='Search'
                className='submit'
                
            ></input>
        </FormSearch>
    )
}

export default SearchBar


const FormSearch = styled.form`
    .submit {
     padding: 8px;
     border: none;
     border: 2px solid #000;
     margin: 0 10px;
     background-color: transparent;
     color: #fff;
     font-size:18px;
     font-weight: bold;
     border-radius: 4px;
     cursor: pointer;
    }

    .submit:hover {
        color: #000;
    }


    .entrada {
    padding: 7.2px;
    outline: none;
    background: transparent;
    border: 2px solid #000;
    margin-right: 20px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    text-transform: capitalize;
    width: 150px;
    }

    .entrada::placeholder {
    color: #fff;
    text-align: center;
    text-transform: capitalize;
}
`