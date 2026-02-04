import usePlanets from "../hooks/usePlanets"
import planetDetails from '../data.json'

interface TabProps {
    planet: string,
    index: number
}

const Tab:React.FC<TabProps> = ({ planet, index }) => {

    const { activeTab, setActiveTab } = usePlanets();

    return (
        <button
            className={`transition-all duration-300 ease-in-out cursor-pointer text-white opacity-[0.6] text-[0.6875rem] font-bold font-spartan uppercase tracking-[0.0625rem] pt-[1rem] h-[100%]
             ${activeTab === index ? `${planetDetails[activeTab]?.borderTopColor} border-t-[4px]` : 'border-t-[4px] border-transparent'} 
            `}
            onClick={() => setActiveTab(index)}
        >
            {planet}
        </button>
    )
}

export default Tab