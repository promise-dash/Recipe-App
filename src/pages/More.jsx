import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components';

function More() {

    const [vegies, setVegies] = useState([]);
    const [popular, setPopular] = useState([]);

    let params = useParams();

    const vegiesURL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_APIKEY}&number=20&tags=vegetarian`;
    const popularURL = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_APIKEY}&number=20`;

    const fetchMore = async(type) => {
        if(type === 'vegies'){
            const result = await fetch(vegiesURL);
            const data = await result.json();
            setVegies(data.recipes);
        }
        else{
            const result = await fetch(popularURL);
            const data = await result.json();
            setPopular(data.recipes);
        }
    }

    useEffect(() => {
        fetchMore(params.type);

    }, [params.type]);
    

  return (
    <>
    <h3>{params.type === 'vegies' ? "Vegetarian Picks" : "Popular Picks"}</h3>
    <Grid>
        {(params.type === 'vegies' ? vegies : popular)?.map((item) => {
            return (
                    <Card key={item.id}>
                        <Link to={`/recipe/${item.id}`}>
                        <img src={item.image} alt="" />
                        <h4>{item.title}</h4>
                        </Link>
                    </Card>
                );
            }
        )}
    </Grid>
    </>
  );

}

const Grid = styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
 grid-gap: 3rem;
 margin: 4rem 0rem;
`;

const Card = styled.div`
 cursor: pointer;
 img{
  width: 100%;
  border-radius: 2rem;
 }
 a{
  text-decoration: none;
 }
 h4{
  text-align: center;
  padding: 1rem;
  font-size: small;
 }
`


export default More