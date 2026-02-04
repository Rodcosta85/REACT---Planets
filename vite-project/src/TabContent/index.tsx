import { useState } from 'react'
import SourceP from '../../public'
import Statistics from './Statistics'
import type { PlanetProps } from '../types/planet'
import usePlanets from '../hooks/usePlanets'


interface ContentProps {
    planetDetails: PlanetProps[],
}

const index: React.FC<ContentProps> = ({ planetDetails }) => {

    const { toggleHamb, activeTab } = usePlanets();

    // preciso de uma explicação dessa lógica toda
    const [separateTabs, setSeparateTabs] = useState<(typeof sectionKeys)[number]>("overview");

    const currentPlanet = planetDetails[activeTab];
    const imageGeology = currentPlanet?.images?.geology;
    const currentImage = currentPlanet?.images[separateTabs === "geology" ? "overview" : separateTabs];
    const currentSource = currentPlanet?.[separateTabs]?.source;
    const currentContent = currentPlanet?.[separateTabs]?.content;

    const sectionKeys = ["overview", "structure", "geology"] as const;

    return (
        <div className='flex flex-col 
        desktop:gap-[5.44rem]
        tablet:gap-[3.5rem]
        mobile:gap-[6rem]
        '>
            <nav className={
                `desktop:hidden 
                tablet:hidden mobile:flex 
                justify-between gap-[2.69rem] 
                pl-[1.5rem] pr-[2.25rem] border-t-[1px] border-t-opaq-white 
                ${toggleHamb ? 'border-b-0 border-b-opaq-white' : 'border-b-[1px] border-b-opaq-white'} `
            }>
                {sectionKeys.map((key) => (
                    <button
                        key={key}
                        onClick={() => setSeparateTabs(key)}
                        className={`
                            text-opaq-white text-[0.5625rem] uppercase font-bold font-spartan cursor-pointer relative z-99 transition-all pt-[1rem] pb-[1rem]
                            ${separateTabs === key ? `${planetDetails[activeTab]?.borderBottomColor} border-b-[4px] text-white` : 'border-b-[4px] border-transparent'}
                            ${toggleHamb ? 'hidden' : 'flex'}
                        `}
                    >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                ))}
            </nav>

            {/* contém o nome do planeta, descrição (dependendo da tab selecionada entre as 3) e a fonte da informação */}
            <SourceP
                currentImage={currentImage}
                planetDetails={planetDetails}
                currentSource={currentSource}
                currentContent={currentContent}
                separateTabs={separateTabs}
                setSeparateTabs={setSeparateTabs}
                sectionKeys={sectionKeys}
                imageGeology={imageGeology}
            />

            {/* são os cards com as estatísticas de cada planeta */}
            <Statistics
                planetDetails={planetDetails}
            />
        </div>

    )
}

export default index