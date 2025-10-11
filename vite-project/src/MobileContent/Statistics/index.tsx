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
        <div className='flex flex-col justify-between items-center gap-[0.5rem] pl-[1.5rem] pr-[2.25rem] mt-[1.75rem]'>
            
            <div className='flex justify-between items-center w-full h-[3rem] border-opaq-white border-[1px] pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem]'>
                <p className='font-spartan font-bold text-opaq-white text-[0.5rem] tracking-[0.045rem]'>ROTATION TIME</p>
                <h3 className='font-antonio text-white text-[1.25rem] tracking-[-0.046rem]'>{planetDetails[activeTab]?.rotation} </h3>
            </div>

            <div className='flex justify-between items-center w-full h-[3rem] border-opaq-white border-[1px] pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem]'>
                <p className='font-spartan font-bold text-opaq-white text-[0.5rem] tracking-[0.045rem]'>REVOLUTION TIME</p>
                <h3 className='font-antonio text-white text-[1.25rem] tracking-[-0.046rem]'>{planetDetails[activeTab]?.revolution} </h3>
            </div>

            <div className='flex justify-between items-center w-full h-[3rem] border-opaq-white border-[1px] pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem]'>
                <p className='font-spartan font-bold text-opaq-white text-[0.5rem] tracking-[0.045rem]'>RADIUS</p>
                <h3 className='font-antonio text-white text-[1.25rem] tracking-[-0.046rem]'>{planetDetails[activeTab]?.radius} </h3>
            </div>

            <div className='flex justify-between items-center w-full h-[3rem] border-opaq-white border-[1px] pl-[1.5rem] pr-[1.5rem] pt-[1rem] pb-[1rem]'>
                <p className='font-spartan font-bold text-opaq-white text-[0.5rem] tracking-[0.045rem]'>AVERAGE TEMP.</p>
                <h3 className='font-antonio text-white text-[1.25rem] tracking-[-0.046rem]'>{planetDetails[activeTab]?.temperature} </h3>
            </div>

        </div>
    )
}

export default index