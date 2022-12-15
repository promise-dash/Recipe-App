import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {

  const [details, setDetails] = useState({});
  let params = useParams();
  const [activeTab, setActiveTab] = useState('instructions')

  const fetchDetails = async() => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_APIKEY}`);
    const detailData = await data.json();

    setDetails(detailData);
  }

  useEffect(() => {
    fetchDetails();
  }, [params.id]);
  

  return (
    <DetailWrapper>
      <Image>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </Image>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>

        {activeTab === 'instructions' && (
          <div>
            <br />
            <h5 dangerouslySetInnerHTML={{__html: details.instructions }}></h5>
            <br />
            <h5 dangerouslySetInnerHTML={{__html: details.summary }}></h5>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <div>
            <br />
            {details.extendedIngredients.map((ingredient) => {
              return (
                <li key={ingredient.key}>{ingredient.original}</li>
              );
            })}
          </div>
        )}
      </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div`
 margin-top: 5rem;
 margin-bottom: 3rem;
 display: flex;

 .active{
  color: white;
  background: linear-gradient(35deg, #494949, #313131);
 }
 h2{
  margin-bottom: 2rem;
  text-align: start;
 }
 h5{
  font-weight: 500;
  font-size: 15px;
 }
 li{
  font-size: 1rem;
  line-height: 2.3rem;
  font-weight: 500;
 }
 ul{
  margin-top: 1rem;
 }
`;

const Image = styled.div`
 flex-basis: 50%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: flex-start;
 img{
  width: 20rem;
 }
`;

const Info = styled.div`
 margin-left: 5rem;
 flex-basis: 50%;
`;

const Button = styled.button`
 padding: 1rem 2rem;
 color: #313131;
 background: transparent;
 border: 2px solid black;
 margin-right: 1rem;
 font-weight: 600;
 cursor: pointer;
`;

export default Recipe