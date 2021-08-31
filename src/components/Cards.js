import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const Cards = ({cities, onClose}) => {
    
    
    return (
        <CardsCtn>
            <div className='grid'>
            {
                cities ? 
                cities.map(c => <Card
                    key={c.id}
                    max={c.max}
                    min={c.min}
                    name={c.name}
                    img={c.img}
                    onClose={() => onClose(c.id)}
                    id={c.id}
                />)
                : <div> Sin ciudades </div>
            }
            </div>
        </CardsCtn>
    )
}

export default Cards


const CardsCtn = styled.div`
  display: flex;
  justify-content: center;
  .grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 900px) {
    .grid{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
  }
`