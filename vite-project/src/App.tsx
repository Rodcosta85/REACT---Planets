import planetDetails from './data.json';
import usePlanets from './hooks/usePlanets';
import Header from './Header/index'
import TabContent from './TabContent'

function App() {

  const { setToggleHamb, setActiveTab } = usePlanets();

  const handleMobileTabToggle = (index: any) => {
    setActiveTab(index);
    setToggleHamb();
  }

  return (
    <div className='bg-very-dark-blue bg-[url(/background-stars.svg)] w-full desktop:h-[100vh] relative pb-[3.5rem]
    tablet:h-full
    mobile:h-full
    '>
      <Header
        planetDetails={planetDetails}
        handleMobileTabToggle={handleMobileTabToggle}
      />
      {/* conteudo de cada tab/planeta */}
      <TabContent planetDetails={planetDetails} />
      {/* conteudo de cada tab/planeta */}

    </div>
  )
}

export default App
