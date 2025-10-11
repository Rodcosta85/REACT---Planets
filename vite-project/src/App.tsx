import { useState } from 'react'

// import do json
import Data from './data.json';

// import de imagens/assets
import Stars from './assets/background-stars.svg'

// import de componentes
import Header from './Header'
import MobileContent from './MobileContent'

import type { PlanetProps } from './planet'

function App() {

  // estado/array que guarda as informações que vem do json (Data) levando em consideração a tipificação feita anteriormente com as interfaces
  const [planetDetails] = useState<PlanetProps[]>(Data);

  // estado que guarda o número das tabs para transformamos o nav em um sistema dinâmico de tabs
  const [activeTab, setActiveTab] = useState<number>(0)

  const [toggleHamb, setToggleHamb] = useState<boolean>(false);

  const handleMobileTabToggle = (index: any) => {
    setActiveTab(index);
    setToggleHamb(prevState => !prevState);
  }

  return (
    <div className='bg-very-dark-blue w-full h-[100vh] relative'>
      {/* <img src={Stars} alt="background pattern of stars " className='absolute top-0 left-0 z-1 w-[100vw] h-[100vh] object-cover' /> */}
      <Header
        planetDetails={planetDetails}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleMobileTabToggle={handleMobileTabToggle}
        toggleHamb={toggleHamb}
      />

      {/* conteudo de cada tab/planeta */}
      <div>
        <p className='text-white mobile:hidden'>{planetDetails[activeTab]?.overview?.content}</p>


        {/* conteúdo somente do mobile */}
        <MobileContent
          planetDetails={planetDetails}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          toggleHamb={toggleHamb}
        />
        {/* conteúdo somente do mobile */}


      </div>
      {/* conteudo de cada tab/planeta */}

    </div>
  )
}

export default App
