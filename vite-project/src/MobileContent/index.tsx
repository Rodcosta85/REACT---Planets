import { useState } from 'react'

// componentes
import SourceP from './SourceP'
import Statistics from './Statistics'

// tipificação
import type { PlanetProps } from '../planet'

interface SectionData {
    content: string,
    source: string
}

interface ContentProps {
    planetDetails: PlanetProps[],
    activeTab: number
    setActiveTab: (arg0: number) => void,
    toggleHamb: boolean
}

const index: React.FC<ContentProps> = ({ planetDetails, activeTab, toggleHamb }) => {

    // preciso de uma explicação dessa lógica toda
    const [separateTabs, setSeparateTabs] = useState<(typeof sectionKeys)[number]>("overview");
    const currentPlanet = planetDetails[activeTab];
    const sectionKeys = ["overview", "structure", "geology"] as const;

    const sections: Record<(typeof sectionKeys)[number], SectionData> =
        sectionKeys.reduce((acc, key) => {
            if (currentPlanet) {
                acc[key] = currentPlanet[key];
            }
            return acc;
        }, {} as Record<(typeof sectionKeys)[number], SectionData>);


    return (
        <div className='flex flex-col mobile:hidden'>
            <nav className='desktop:hidden tablet:hidden mobile:flex justify-between gap-[2.69rem] h-[3rem] ml-[1.5rem] mr-[2.25rem]'>
                {sectionKeys.map((key) => (
                    <button
                        key={key}
                        onClick={() => setSeparateTabs(key)}
                        className={`text-opaq-white text-[0.5625rem] uppercase font-bold font-spartan cursor-pointer relative z-99 transition-all pt-[1rem] pb-[1rem]
                            ${separateTabs === key ? 'border-blue-300 border-b-[4px] text-white' : 'border-0'}
                            ${toggleHamb ? 'hidden' : 'flex'}
                            `}
                    >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                ))}
            </nav>

            {/* contém o nome do planeta, descrição (dependendo da tab selecionada entre as 3) e a fonte da informação */}
            <SourceP
                planetDetails={planetDetails}
                sections={sections}
                separateTabs={separateTabs}
                activeTab={activeTab}
            />

            <Statistics
                planetDetails={planetDetails}
                activeTab={activeTab}
            />


        </div>

    )
}

export default index