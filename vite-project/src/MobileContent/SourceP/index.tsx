// imagens/assets
import SourceImg from './../../assets/icon-source.svg'

import type { PlanetProps } from '../../planet'

interface SourceProps {
    separateTabs: string
    sections: any
    planetDetails: PlanetProps[]
    activeTab: number
}

const index:React.FC<SourceProps> = ({ planetDetails, activeTab, separateTabs, sections }) => {
  return (
    <div className='flex flex-col gap-[2rem] pl-[1.5rem] pr-[2.25rem]'>
                <div className='flex flex-col gap-[1rem]'>
                    <h1 className='text-white text-[2.5rem] text-center font-antonio uppercase'>{planetDetails[activeTab]?.name}</h1>
                    <p className='text-white text-[0.6875rem] text-center font-spartan'>{sections[separateTabs]?.content}</p>
                </div>

                <div className='flex justify-center items-center gap-[4px] text-opaq-white text-[0.75rem] font-spartan'>
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
  )
}

export default index