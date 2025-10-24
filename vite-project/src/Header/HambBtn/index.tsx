interface ButtonProps {
  handleMobileTabToggle: (index: any) => void;
}

const index: React.FC<ButtonProps> = ({ handleMobileTabToggle }) => {



  return (
    <button
      onClick={handleMobileTabToggle}
      className="flex flex-col justify-between mobile:gap-[0.25rem] mobile:h-[1.0625rem] relative z-99 desktop:hidden tablet:hidden">
      
      <div
        className="line w-[1.5rem] h-[0.1875rem] bg-white"
        id="first">
      </div>

      <div
        className="line w-[1.5rem] h-[0.1875rem] bg-white"
        id="second">
      </div>

      <div
        className="line w-[1.5rem] h-[0.1875rem] bg-white"
        id="third">
      </div>

    </button>
  )
}

export default index