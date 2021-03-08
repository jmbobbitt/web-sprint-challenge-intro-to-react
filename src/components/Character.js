// Write your Character component here
import React from 'react';
// import styled from 'styled-components';

// const StyledCharacter = styled.div`
//   text-align: center;
//   align-items:center;
//   margin-top:1%;
//   display:flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   border: 1px solid black;
  
// `

function Character(props){ 
    console.log(props);

  return ( 
      <div className='Character'>      
          <p>Name: {props.data.name}</p> 
          <p>Weight: {props.data.mass}</p>
          <p>Gender: {props.data.gender}</p>
          <p>Date of Birth: {props.data.birth_year}</p>
          <p>Homeworld: {props.data.homeworld}</p>
          <p>Films: {props.data.films}</p>
      </div>
  )
} 

export default Character