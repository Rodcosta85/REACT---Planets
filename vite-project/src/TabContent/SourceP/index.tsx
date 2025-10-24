// components



// imagens/assets
import SourceImg from './../../assets/icon-source.svg'

import type { PlanetProps } from '../../planet'


interface SourceProps {
    separateTabs: string,
    setSeparateTabs: any,
    currentSource: string;
    planetDetails: PlanetProps[]
    activeTab: number,
    sectionKeys: ReadonlyArray<string>,
    currentImage: string;
    currentContent: string;
    imageGeology: string;
}



const index: React.FC<SourceProps> = ({
    planetDetails,
    activeTab,
    separateTabs,
    setSeparateTabs,
    currentSource,
    sectionKeys,
    currentImage,
    currentContent,
    imageGeology,
}) => {

    return (
        <div className='flex desktop:flex-row justify-center desktop:gap-[18.69rem] desktop:pl-[1.5rem] desktop:pr-[2.25rem] desktop:pt-[7.94rem] w-[100%]
        tablet:flex-col tablet:gap-[5rem] tablet:pt-[3rem] tablet:pl-[2.5rem] tablet:pr-[2.5rem]
        mobile:flex-col mobile:items-center mobile:gap-[2.75rem] mobile:pt-0
        '>
            <div className='relative
            desktop:h-[25rem]
            tablet:h-[18rem]
            mobile:h-[12rem]'>
                <img
                    src={currentImage}
                    className='desktop:w-[18.125rem] desktop:h-[18.125rem]
                tablet:w-[11.5rem] tablet:h-[11.5rem]
                mobile:w-[6.9375rem] mobile:h-[6.9375rem]
                '
                />
                {separateTabs === "geology" && (
                    <img
                        src={imageGeology}
                        className='absolute 
                        desktop:w-[9.875rem] desktop:left-[4rem] desktop:bottom-[2rem]
                        tablet:w-[8rem] tablet:left-[1.7rem] tablet:bottom-[1rem]
                        mobile:w-[6rem] mobile:left-[0.3rem] mobile:bottom-[-1rem]
                        '
                    />
                )}
            </div>
            <aside className='flex desktop:flex-col tablet:flex-row desktop:gap-[2.44rem] gap-[1.5rem] tablet:gap-[4.31rem] mobile:items-center tablet:items-start desktop:w-[21.88rem] w-full'>

                <div className='flex flex-col gap-[1rem] justify-start 
                tablet:justify-between
                mobile:pl-[1.5rem] mobile:pr-[1.5rem]
                '>
                    <h1 className='text-white text-[2.5rem] desktop:text-left tablet:text-left mobile:text-center font-antonio uppercase'>{planetDetails[activeTab]?.name}</h1>
                    <p className='text-opaq-white text-[0.875rem] text-left tablet:text-left mobile:text-center font-spartan desktop:w-[21.875rem] tablet:w-[21.1875rem]  desktop:h-[9.38rem]'>
                        {currentContent}
                    </p>
                    <div className='flex desktop:justify-start items-center gap-[4px] text-opaq-white text-[0.75rem] font-spartan
                    tablet:justify-start
                    mobile:justify-center
                    '>
                        <p>Source:</p>
                        <span>
                            <a
                                href={currentSource}
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