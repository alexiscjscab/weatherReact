import React from 'react';
import styled from 'styled-components';

const City = ({city}) => {

    if(!city){
      return <div>No existe esa ciudad</div>
    }

    return (
        <CityCtn>
          <h2>{city.name}</h2>
          <img src={"https://openweathermap.org/img/wn/"+city.img+"@2x.png"} width="60" height="70" alt="" />
          <div className="info">
            <p><b>Temp:</b> <span>{city.temp} ºC .</span> </p>
            <p><b>Weather:</b> <span>{city.weather} .</span> </p>
            <p><b>Wind:</b> <span>{city.wind}km/h .</span> </p>
            <p><b>Clouds:</b> <span>{city.clouds} .</span> </p>
            <p><b>Latitude:</b> <span>{city.latitud}º .</span> </p>
            <p><b>Longitude:</b> <span>{city.longitud}º .</span> </p>
          </div>
          
        </CityCtn>
    )
}

export default City


const CityCtn = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #333;
  justify-content: center;
  border-radius: 50px;
  top: 12px;
  color: #fff;
  align-items: center;
  margin: 50px auto;
  width: 380px;
  height: 500px;
  background-color: rgba(30,30,30,0.5);
  transition: 0.1s;

  .info{
    font-size: 30px;
    display: flex;
    flex-direction: column;
  }

  span{
    margin-left: 20px;
    color: #ddd;
    font-weight: bold;
  }
  p{
    color: #fff

  }

  h2{
    font-size: 42px;
  }

  img{
    width: 120px;
    height: 120px;
  }
  &:hover{
    border: 2px solid #fff;
    transform: scale(1.05);
  }

  @media screen and (max-width: 600px){
    width: 340px;
    .info{
      font-size: 28px;
    }
  }
`
