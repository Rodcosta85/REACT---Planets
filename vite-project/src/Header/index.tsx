// components
import HambBtn from './HambBtn';

// assets
import Chevron from './../../public/icon-chevron.svg'

// importação da tipificação
import type { PlanetProps } from "../planet"

interface HeaderProps {
    planetDetails: PlanetProps[],
    activeTab: number,
    setActiveTab: (arg0: number) => void,
    handleMobileTabToggle: (index: any) => void,
    toggleHamb: boolean
}

const index: React.FC<HeaderProps> = ({ planetDetails, activeTab, setActiveTab, handleMobileTabToggle, toggleHamb }) => {
    return (
        <header className="flex desktop:flex-row justify-between desktop:items-start 
        desktop:justify-center desktop:h-[70px] pl-[2rem] pr-[2.56rem] desktop:pt-0 
        tablet:flex-col tablet:items-center tablet:gap-[2.44rem] tablet:pt-[2rem]
        mobile:flex-row mobile:gap-[2.81rem] mobile:pt-[0.5rem] mobile:pl-[1.5rem] mobile:pr-[2.25rem] mobile:pb-[1rem]
        ">
            <div className="flex items-center desktop:justify-between tablet:justify-center mobile:justify-between w-full">
                <h1 className="font-antonio text-[1.75rem] text-white tracking-[-0.065rem]">THE PLANETS</h1>
                <HambBtn
                    handleMobileTabToggle={handleMobileTabToggle}
                    toggleHamb={toggleHamb}
                />
            </div>
            <nav className='desktop:flex tablet:flex flex-row gap-[2.06rem] mobile:hidden'>
                {/* map para mostrar todos os nomes dos planetas e colocá-los dentro de um botão para usar o sistema de tab */}
                {planetDetails.map((planet: any, index: number) => (
                    <div key={index}>
                        <button
                            className={`transition-all duration-300 ease-in-out cursor-pointer text-white opacity-[0.6] text-[0.6875rem] font-bold font-spartan uppercase tracking-[0.0625rem] pt-[1rem] h-[100%]
                                ${activeTab === index ? `${planetDetails[activeTab]?.borderTopColor} border-t-[4px]` : 'border-t-[4px] border-transparent'} 
                            `}
                            onClick={() => setActiveTab(index)}
                        >
                            {planet.name}
                        </button>
                    </div>
                ))}
            </nav>

            {/* esse nav é somente do mobile, visto que ele tem um estilo completamente diferente do que está presente tanto no desktop como no tablet */}
            <nav className={`
            hidden gap-[2.06rem] 
            z-99 w-full h-[100vh] pl-[1.5rem] pr-[2.25rem] bg-very-dark-blue    
            ${toggleHamb ? 'mobile:flex' : 'mobile:hidden'} mobile:flex-col mobile:absolute mobile:top-[6.5rem] mobile:left-0 
            `}>
                {/* map para mostrar todos os nomes dos planetas e colocá-los dentro de um botão para usar o sistema de tab */}
                {planetDetails.map((planet: any, index: number) => (
                    <button
                        key={index}
                        className="flex justify-between items-center border-b-opaq-white border-b-[1px] border-opacity-[0.6] pb-[1.25rem] cursor-pointer"
                        onClick={() => handleMobileTabToggle(index)}
                    >
                        <div className="flex gap-[1.5rem]">
                            <div className={`w-[1.25rem] h-[1.25rem] rounded-full ${planet.color}`}></div>
                            <h2
                                className='text-white text-[0.9375rem] font-bold font-spartan uppercase tracking-[0.0625rem]'
                            >
                                {planet.name}
                            </h2>
                        </div>
                        <img src={Chevron} alt="a chevron-type arrow pointing to the right" />
                    </button>
                ))}
            </nav>
        </header>
    )
}

export default index