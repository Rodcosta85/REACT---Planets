import { useState } from 'react'
import Data from './data.json';

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
    <div>
      <nav className='flex flex-row gap-1'>
        {planetDetails.map((planet, index) => (
        <div key={index}>
            <button
            className='transition-all duration-300 ease-in-out cursor-pointer rounded-[6px] bg-blue-300'
            onClick={() => setActiveTab(index)}
            >{planet.name}</button>
        </div>
      ))}
      </nav>
      <div>
        <p>{planetDetails[activeTab].overview.content}</p>
      </div>
    </div>
  )
}

export default App
