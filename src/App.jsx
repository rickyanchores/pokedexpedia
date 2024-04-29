import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PokeAPI from './API/PokeApi'


const App = () => {
  return (
    <div className='App min-h-screen flex justify-center items-center'>
      <div className="container bg-black p-5">
        <h1>PokedeXpedia</h1>
        <PokeAPI />
      </div>
    </div>
  )
}

export default App
