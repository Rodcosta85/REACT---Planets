// components



// imagens/assets
import SourceImg from './../../assets/icon-source.svg'
import Jupiter from './../../assets/planet-jupiter.svg'

import type { PlanetProps } from '../../planet'

interface SourceProps {
    separateTabs: string,
    setSeparateTabs: any,
    sections: any
    planetDetails: PlanetProps[]
    activeTab: number,
    sectionKeys: ReadonlyArray<string>
}

const index: React.FC<SourceProps> = ({ planetDetails, activeTab, separateTabs, setSeparateTabs, sections, sectionKeys }) => {


    return (
        <div className='flex desktop:flex-row justify-center desktop:gap-[18.69rem] desktop:pl-[1.5rem] desktop:pr-[2.25rem] desktop:pt-[7.94rem] w-[100%]
        tablet:flex-col tablet:gap-[5rem] tablet:pt-[5rem] tablet:pl-[2.5rem] tablet:pr-[2.5rem]
        mobile:flex-col mobile:items-center mobile:gap-[2.75rem] mobile:pt-0
        '>
            <img
                src={Jupiter}
                alt=""
                className='desktop:w-[18.125rem] desktop:h-[18.125rem]
                tablet:w-[11.5rem] tablet:h-[11.5rem]
                mobile:w-[6.9375rem] mobile:h-[6.9375rem]
                '
            />
            <aside className='flex desktop:flex-col tablet:flex-row desktop:gap-[2.44rem] gap-[1.5rem] tablet:gap-[4.31rem] mobile:items-center tablet:items-start desktop:w-[21.88rem] w-full'>
                
                <div className='flex flex-col gap-[1rem] justify-start tablet:justify-between'>
                    <h1 className='text-white text-[2.5rem] desktop:text-left tablet:text-left mobile:text-center font-antonio uppercase'>{planetDetails[activeTab]?.name}</h1>
                    <p className='text-opaq-white text-[0.875rem] text-left tablet:text-left mobile:text-center font-spartan desktop:w-[21.875rem] tablet:w-[21.1875rem]  desktop:h-[9.38rem]'>{sections[separateTabs]?.content}</p>
                    <div className='flex justify-start items-center gap-[4px] text-opaq-white text-[0.75rem] font-spartan'>
                        <p>Source:</p>
                        <span>
                            <a
                                href={sections[separateTabs]?.source}
                                className='flex items-center gap-[3px] font-bold underline cursor:pointer'
                            >
                                Wikipedia
                                <img
                                    src={SourceImg}
                                    alt="a square with an arrow pointing to the upper right corner"
                                    className='w-[12px] h-[12px]'
                                />
                            </a>
                        </span>
                    </div>
                </div>




                <div className='mobile:hidden tablet:flex tablet:flex-col tablet:gap-[1rem] w-full'>
                    {sectionKeys.map((key: string, index: number) => (
                        <button
                            key={key}
                            onClick={() => setSeparateTabs(key)}
                            className={`text-white text-[0.75rem] uppercase font-bold font-spartan cursor-pointer relative z-99 transition-all pt-[0.7rem] pb-[0.7rem] pl-[1.75rem] border-[1px] border-opaq-white
                            flex gap-[1.56rem]
                            ${separateTabs === key ? `${planetDetails[activeTab]?.backgroundColor}` : 'bg-transparent'}
                        `}
                        >
                            <span className='text-opaq-white'>0{index + 1}</span>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </button>
                    ))}
                </div>

            </aside>

        </div>
    )
}

export default index