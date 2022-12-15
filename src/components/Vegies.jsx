import React, { useEffect } from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

function Vegies() {

  const [vegies, setVegies] = useState([]);

    useEffect(() => {
      getVegies();

    }, [])
    
    const getVegies = async() => {

      const check = localStorage.getItem("vegies");
      if(check){
        setVegies(JSON.parse(check));
      }

      else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_APIKEY}&number=9&tags=vegetarian`);
        const data = await api.json();

        localStorage.setItem("vegies", JSON.stringify(data.recipes));
        setVegies(data.recipes);
      }
    }

  return (
    <div>
        <Wrapper>
              <h3>Vegetarian Picks</h3>
              <br />

              <Splide options={
                {perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "5rem",
                }
              }>
                {vegies.map((recipe) => {
                  return(
                    <SplideSlide key={recipe.id}>
                      <Card>
                        <Link to={`/recipe/${recipe.id}`}>
                          <p>{recipe.title}</p>
                          <img src={recipe.image} alt="" />
                          <Gradient />
                        </Link>
                      </Card>
                     </SplideSlide>
                  );
              })}
              </Splide>
              <br />
              <View>
                <Link to={'/more/vegies'}><p>View All</p></Link>
              </View>

          </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
 margin: 4rem 0rem;
`;

const View = styled.div`
 padding: 0 2rem;
 display: flex;
 align-items: center;
 justify-content: flex-end;

 p{
  color: #313131;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
 }
`;

const Card = styled.div`
 min-height: 15rem;
 width: 15rem;
 border-radius: 2rem;
 overflow: hidden;
 position: relative;
 cursor: pointer;

 img{
   border-radius: 2rem;
   position: absolute;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
 }
 p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  text-align: center;
  font-weight: 600;
  font-size: 10px;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
 }
`;

const Gradient = styled.div`
 z-index: 3;
 position: absolute;
 width: 100%;
 height: 100%;
 background:  linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;
export default Vegies