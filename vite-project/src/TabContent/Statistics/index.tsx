import usePlanets from "../../hooks/usePlanets"
import type { PlanetProps } from "../../types/planet"

interface StatsProps {
    planetDetails: PlanetProps[],
}

const Statistics: React.FC<StatsProps> = ({ planetDetails }) => {

    const { toggleHamb, activeTab } = usePlanets();

    const details = [
        {
            name: "ROTATION TIME",
            value: planetDetails[activeTab]?.rotation,
        },
        {
            name: "REVOLUTION TIME",
            value: planetDetails[activeTab]?.revolution,
        },
        {
            name: "RADIUS",
            value: planetDetails[activeTab]?.radius,
        },
        {
            name: "AVERAGE TEMP.",
            value: planetDetails[activeTab]?.temperature,
        },
    ];

    return (
        <div className={`
        flex flex-col justify-between items-start gap-[0.5rem] mobile:pl-[1.5rem] mobile:pr-[2.25rem]
        desktop:flex-row desktop:justify-center desktop:gap-[1.88rem] desktop:pl-[2rem] desktop:pr-[2rem]
        tablet:flex-row tablet:pl-[2.5rem] tablet:pr-[2.5rem]
        ${toggleHamb ? 'hidden' : 'flex'}
        `}>
            {details.map((item, index) => (
                <div key={index} className='flex justify-between items-center w-full min-h-[3rem] border-opaq-white border-[1px] pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem]
                desktop:w-[15.94rem] desktop:flex-col desktop:justify-center desktop:items-start desktop:min-h-[8rem]
                tablet:flex-col tablet:items-start tablet:min-h-[5.5rem]
                '>
                    <p className='font-spartan font-bold text-opaq-white text-[0.5rem] tracking-[0.045rem]
                    desktop:text-[0.6875rem]
                    tablet:text-[0.5rem]
                    '>{item.name}</p>
                    <h3 className='font-antonio text-white text-[1.25rem] tracking-[-0.046rem]
                    desktop:text-[2.5rem]
                    tablet:text-[1.5rem]
                    '>{item.value}</h3>
                </div>
            ))}
        </div>
    )
}

export default Statistics