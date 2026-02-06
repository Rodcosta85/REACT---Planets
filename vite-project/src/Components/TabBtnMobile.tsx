import Chevron from './../../public/icon-chevron.svg'
import type { PlanetProps } from '../types/planet';

interface TabProps {
    planet: PlanetProps,
    index: number,
    handleMobileTabToggle: (index: number) => void
}

const TabBtnMobile: React.FC<TabProps> = ({ planet, index, handleMobileTabToggle }) => {
    return (
        <button
            key={index}
            className="flex justify-between items-center border-b-opaq-white border-b-[1px] border-opacity-[0.6] pb-[1.25rem] cursor-pointer"
            onClick={() => handleMobileTabToggle(index)}
        >
            <div className="flex gap-[1.5rem]">
                <div className={`w-[1.25rem] h-[1.25rem] rounded-full ${planet.color}`}></div>
                <h2 className='text-white text-[0.9375rem] font-bold font-spartan uppercase tracking-[0.0625rem]'>
                    {planet.name}
                </h2>
            </div>
            <img src={Chevron} alt="a chevron-type arrow pointing to the right" />
        </button>
    )
}

export default TabBtnMobile