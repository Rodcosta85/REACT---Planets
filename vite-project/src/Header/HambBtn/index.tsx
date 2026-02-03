import usePlanets from "../../hooks/usePlanets"

interface ButtonProps {
  handleMobileTabToggle: (index: any) => void,
  toggleHamb: boolean
}

const index: React.FC<ButtonProps> = ({ handleMobileTabToggle }) => {

  const { toggleHamb } = usePlanets();
  
  return (
    <button
      onClick={handleMobileTabToggle}
      className="flex flex-col justify-between mobile:gap-[0.25rem] mobile:h-[1.0625rem] relative z-99 desktop:hidden tablet:hidden">
      
      <div
        className={`line w-[1.5rem] h-[0.1875rem] bg-white transition duration-100
          ${toggleHamb ? 'rotate-45 translate-y-[10px]' : ''}
          `}
        id="first">
      </div>

      <div
        className={`line w-[1.5rem] h-[0.1875rem] bg-white transition duration-100
          ${toggleHamb ? 'opacity-0' : 'opacity-100'}
          `}
        id="second">
      </div>

      <div
        className={`line w-[1.5rem] h-[0.1875rem] bg-white transition duration-100
          ${toggleHamb ? '-rotate-45 translate-y-[-4px]' : ''}
          `}
        id="third">
      </div>

    </button>
  )
}

export default index