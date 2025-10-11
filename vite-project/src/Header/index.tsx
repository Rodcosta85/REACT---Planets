import { useState } from "react"
import HambMenu from './../assets/icon-hamburger.svg'
import Chevron from './../assets/icon-chevron.svg'

interface PlanetProps {
    name: string
}

interface HeaderProps {
    planetDetails: PlanetProps[],
    activeTab: any
    setActiveTab: (arg0: number) => void,
    handleMobileTabToggle: (index: any) => void,
    toggleHamb: boolean
}

const index: React.FC<HeaderProps> = ({ planetDetails, setActiveTab, handleMobileTabToggle, toggleHamb }) => {
    return (
        <header className="flex desktop:flex-row justify-between items-center pl-[2rem] pt-[1.37rem] pr-[2.56rem] border-b-[1px] border-b-opaq-white
        tablet:flex-col tablet:gap-[2.44rem] tablet:pt-[2rem]
        mobile:flex-row mobile:gap-[2.81rem] mobile:ml-[1.5rem] mobile:mr-[2.25rem] mobile:pl-0 mobile:pr-0 mobile:pb-[1rem]
        ">
            <div className="flex items-center desktop:justify-between tablet:justify-center mobile:justify-between w-full">
                <h1 className="font-antonio text-[1.75rem] text-white tracking-[-0.065rem]">THE PLANETS</h1>
                <button
                    onClick={handleMobileTabToggle}
                    className="w-[1.5rem] h-[1rem] relative z-99 desktop:hidden tablet:hidden mobile:block"
                >
                    <img
                        src={HambMenu}
                        alt="a hamburger-style menu"
                        className=" mobile:w-[1.5rem] mobile:h-[1rem]"
                    />
                </button>
            </div>

            <nav className='desktop:flex tablet:flex flex-row gap-[2.06rem] mobile:hidden'>
                {/* map para mostrar todos os nomes dos planetas e colocá-los dentro de um botão para usar o sistema de tab */}
                {planetDetails.map((planet: any, index: number) => (
                    <div key={index}>
                        <button
                            className='transition-all duration-300 ease-in-out cursor-pointer text-white opacity-[0.6] text-[0.6875rem] font-bold font-spartan uppercase tracking-[0.0625rem]'
                            onClick={() => setActiveTab(index)}
                        >
                            {planet.name}
                        </button>
                    </div>
                ))}
            </nav>

            {/* esse nav é somente do mobile, visto que ele tem um estilo completamente diferente do que está presente tanto no desktop como no tablet */}
            <nav className={`hidden gap-[2.06rem] ${toggleHamb ? 'mobile:flex' : 'mobile:hidden'} mobile:flex-col mobile:absolute mobile:top-[7rem] mobile:left-0 z-99 w-full pl-[1.5rem] pr-[2.25rem] bg-very-dark-blue`}>
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