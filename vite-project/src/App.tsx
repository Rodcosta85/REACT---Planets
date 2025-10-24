import { useState } from 'react'

// import do json
import Data from './data.json';

// import de componentes
import Header from './Header'
import TabContent from './TabContent'

import type { PlanetProps } from './planet'

function App() {

  // estado/array que guarda as informações que vem do json (Data) levando em consideração a tipificação feita anteriormente com as interfaces
  const [planetDetails] = useState<PlanetProps[]>(Data);

  // estado que guarda o número das tabs para transformamos o nav em um sistema dinâmico de tabs
  const [activeTab, setActiveTab] = useState<number>(0)

  // estado que guarda o estado do botão para fazer o nav específico do mobile aparecer
  const [toggleHamb, setToggleHamb] = useState<boolean>(false);

  const handleMobileTabToggle = (index: any) => {
    setActiveTab(index);
    setToggleHamb(prevState => !prevState);
  }

  return (
    <div className='bg-very-dark-blue bg-[url(assets/background-stars.svg)] w-full desktop:h-[100vh] relative pb-[3.5rem]
    tablet:h-full
    mobile:h-full
    '>
      <Header
        planetDetails={planetDetails}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        handleMobileTabToggle={handleMobileTabToggle}
        toggleHamb={toggleHamb}
      />
      {/* conteudo de cada tab/planeta */}
      <TabContent
        planetDetails={planetDetails}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        toggleHamb={toggleHamb}
      />
      {/* conteudo de cada tab/planeta */}

    </div>
  )
}

export default App
