import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
    const [searched, setSearched] = useState([]);
    const params = useParams();
  
    const getSearched = async(name) => {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_APIKEY}&query=${name}`);
      const recipes = await data.json();
      setSearched(recipes.results);
    }

    useEffect(() => {
      getSearched(params.searchInput);
    }, [params.searchInput]);
    

  return (
    <Grid>
      {searched.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipe/${item.id}`}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
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

export default Searched;