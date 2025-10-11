import { useState } from 'react'
import Data from './data.json';
import Header from './Header'
import Stars from './assets/background-stars.svg'

interface Overview {
  content: string,
  source: string
}

interface Structure {
  content: string,
  source: string
}

interface GeologyProps {
  content: string,
  source: string
}

interface Images {
  planet: string,
  internal: string,
  geology: string
}

interface PlanetProps {
  name: string,
  overview: Overview,
  structure: Structure,
  geology: GeologyProps,
  rotation: string,
  revolution: string,
  radius: string,
  temperature: string,
  images: Images
}

function App() {

  // estado/array que guarda as informações que vem do json (Data) levando em consideração a tipificação feita anteriormente com as interfaces
  const [planetDetails] = useState<PlanetProps[]>(Data);

  // estado que guarda o número das tabs para transformamos o nav em um sistema dinâmico de tabs
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <div className='bg-very-dark-blue w-full h-[100vh] relative'>
      <img src={Stars} alt="background pattern of stars " className='absolute top-0 left-0 z-1 w-[100vw] h-[100vh] object-cover'/>
      <Header
        planetDetails={planetDetails}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {/* conteudo de cada tab/planeta */}
      <div>
        <p className='text-white'>{planetDetails[activeTab]?.overview?.content}</p>
      </div>
    </div>
  )
}

export default App
