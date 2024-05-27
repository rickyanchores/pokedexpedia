import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PokeAPI from './API/PokeApi'
import Ads from './Components/Ads/Ads'

const AdCards = [
  {
    id: 0,
    title: "Pokemon Originals",
    image: "https://img.odcdn.com.br/wp-content/uploads/2019/05/20190507084117.jpg"
  },
  {
    id: 1,
    title: "Pokemon New Series",
    image: "https://i.ytimg.com/vi/_c_hMehCORQ/hqdefault.jpg"
  },
  {
    id: 2,
    title: "Pokemon Games",
    image: "https://cdn.vox-cdn.com/thumbor/KlIlVaMxSyV61YxibUZhaTAcf7k=/0x0:3840x2160/1200x675/filters:focal(1613x773:2227x1387)/cdn.vox-cdn.com/uploads/chorus_image/image/69919398/Pokemon_UNITE___Team_Up._Take_Down.___Screenshot_1.0.png"
  }
]

const App = () => {

  const memoaizedAdCards = useMemo(() => AdCards, [])
  

  return (
    <div className='App min-h-screen flex justify-center items-center'>
      <div className="container bg-black p-5">
        <h1 className='title text-4xl font-semibold text-center p-4'>PokedeXpedia</h1>
        <PokeAPI />
        <div className="Ads-container grid grid-cols-1 md:grid-cols-3">
          {memoaizedAdCards.map((card) => (
            <Ads key={card.id} image={card.image} title={card.title}/>
          ))}
        </div>
        <div className="credits text-end font-mono p-4">Dev by Ricky 2024</div>
      </div>
    </div>
  )
}

export default App
