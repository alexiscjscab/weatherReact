import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Card = ({max, min, name , img, id, onClose}) => {
    return (
        <CardCtn>
          <div className='button'>
            <button onClick={onClose}>X</button>
          </div>
          <Link to={`/ciudad/${id}`}>
            <h2 className='infoName'>{name}</h2>
          </Link>
          <hr/>
          
          <div className='info'>
            <div className='img'>
              <img src={"https://openweathermap.org/img/wn/"+img+"@2x.png"} width="60" height="70" alt="" />
            </div>
            
            <div className='temperatura'>
              <div>
                <span>Min: {min}°</span>
                <span>Max: {max}°</span>
              </div>             
            </div>
            
            
          </div>
         
          
        </CardCtn>
    )
}

export default Card;

const CardCtn = styled.div`
    background-color: rgba(30,30,30,0.5);
    width: 400px;
    height: 250px;
    margin: 30px;

    a{
      text-decoration: none;
      color: #fff;
      letter-spacing: 5px;
    }
    h2{
      text-align: center;
      font-size: 28px;
    }
   
    hr{
      margin: 2px 30px;
    }
    .button{
      display: flex;
      justify-content: flex-end;
      margin: 12px 12px;
      button{
        padding: 5px;
        font-size: 20px;
        background: transparent;
        border: none;
        color : #fff;
        cursor: pointer;
        transition: 0.2s
      }

      button:hover{
        transform: scale(1.5); 
        color : #f00;
      }
    }
  
    .temperatura{
      display: flex;
      justify-content: center;
    
  
    span{ 
      margin: 30px;
      font-size: 22px;
      font-weight: bold;
      color : #fff;
      letter-spacing: 2px;
    }
  }
 
  .img{
    display: flex;
    justify-content: center;
    img{
      height: 110px;
      width: 110px;
      border: 2px solid #fff;
      border: none;
    }
  }

  &:hover{
    transform: scale(1.05);
    border: 1px solid #fff;

  }


  @media screen and (max-width: 900px){
    width: 340px;
  }
`



