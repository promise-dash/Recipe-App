import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import {Routes, Route} from "react-router-dom";
import Searched from './Searched';
import Recipe from './Recipe';
import More from './More';

function Pages() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/search/:searchInput' element={<Searched />} />
        <Route path='/recipe/:id' element={<Recipe />} />
        <Route path='/more/:type' element={<More />} />
    </Routes>
  )
}

export default Pages