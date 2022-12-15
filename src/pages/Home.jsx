import React from 'react'
import Popular from '../components/Popular'
import Vegies from '../components/Vegies'

function Home() {
  return (
    <div className='home'>
        <Vegies />
        <Popular />
    </div>
  )
}

export default Home