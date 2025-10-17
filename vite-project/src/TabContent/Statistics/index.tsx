import React from 'react'

interface PlanetProps {
    rotation: string,
    revolution: string,
    radius: string,
    temperature: string,
}

interface StatsProps {
    planetDetails: PlanetProps[],
    activeTab: number
}

const index: React.FC<StatsProps> = ({ planetDetails, activeTab }) => {

    return (
        <div className='flex flex-col justify-between items-center gap-[0.5rem] mobile:pl-[1.5rem] mobile:pr-[2.25rem]
        desktop:flex-row desktop:justify-center desktop:gap-[1.88rem] desktop:pl-[2rem] desktop:pr-[2rem]
        tablet:flex-row tablet:pl-[2.5rem] tablet:pr-[2.5rem]
        '>

            <div className='flex justify-between items-center w-full min-h-[3rem] border-opaq-white border-[1px] pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem]
            desktop:w-[15.94rem] desktop:flex-col desktop:justify-center desktop:items-start desktop:min-h-[8rem]
            tablet:flex-col tablet:items-start tablet:min-h-[5.5rem]
            '>
                <p className='font-spartan font-bold text-opaq-white text-[0.5rem] tracking-[0.045rem]
                desktop:text-[0.6875rem]
                tablet:text-[0.5rem]
                '>
                    ROTATION TIME
                </p>
                <h3 className='font-antonio text-white text-[1.25rem] tracking-[-0.046rem]
                desktop:text-[2.5rem]
                tablet:text-[1.5rem]
                '>
                    {planetDetails[activeTab]?.rotation} </h3>
            </div>

            <div className='flex justify-between items-center w-full min-h-[3rem] border-opaq-white border-[1px] pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem]
            desktop:w-[15.94rem] desktop:flex-col desktop:justify-center desktop:items-start desktop:min-h-[8rem]
            tablet:flex-col tablet:items-start tablet:min-h-[5.5rem]
            '>
                <p className='font-spartan font-bold text-opaq-white text-[0.5rem] tracking-[0.045rem]
                desktop:text-[0.6875rem]
                tablet:text-[0.5rem]
                '>
                    REVOLUTION TIME
                </p>
                <h3 className='font-antonio text-white text-[1.25rem] tracking-[-0.046rem]
                desktop:text-[2.5rem]
                tablet:text-[1.5rem]
                '>
                    {planetDetails[activeTab]?.revolution}
                </h3>
            </div>

            <div className='flex justify-between items-center w-full min-h-[3rem] border-opaq-white border-[1px] pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem]
            desktop:w-[15.94rem] desktop:flex-col desktop:justify-center desktop:items-start desktop:min-h-[8rem]
            tablet:flex-col tablet:items-start tablet:min-h-[5.5rem]
            '>
                <p className='font-spartan font-bold text-opaq-white text-[0.5rem] tracking-[0.045rem]
                desktop:text-[0.6875rem]
                tablet:text-[0.5rem]
                '>
                    RADIUS
                </p>
                <h3 className='font-antonio text-white text-[1.25rem] tracking-[-0.046rem]
                desktop:text-[2.5rem]
                tablet:text-[1.5rem]
                '>
                    {planetDetails[activeTab]?.radius}
                </h3>
            </div>

            <div className='flex justify-between items-center w-full min-h-[3rem] border-opaq-white border-[1px] pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem]
            desktop:w-[15.94rem] desktop:flex-col desktop:justify-center desktop:items-start desktop:min-h-[8rem]
            tablet:flex-col tablet:items-start tablet:min-h-[5.5rem]
            '>
                <p className='font-spartan font-bold text-opaq-white text-[0.5rem] tracking-[0.045rem]
                desktop:text-[0.6875rem]
                tablet:text-[0.5rem]
                '>
                    AVERAGE TEMP.
                </p>
                <h3 className='font-antonio text-white text-[1.25rem] tracking-[-0.046rem]
                desktop:text-[2.5rem]
                tablet:text-[1.5rem]
                '>
                    {planetDetails[activeTab]?.temperature}
                </h3>
            </div>

        </div>
    )
}

export default index