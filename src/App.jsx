import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PokeAPI from './API/PokeApi'


const App = () => {


  return (
    <div className='App min-h-screen flex justify-center items-center'>
      <div className="container bg-black p-5">
        <h1 className='title text-4xl font-semibold text-center p-4'>PokedeXpedia</h1>
        <PokeAPI />
        <div className="credits text-end font-mono p-4">Dev by Ricky 2024</div>
      </div>
    </div>
  )
}

export default App
