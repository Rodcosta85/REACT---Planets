import type { PlanetProps } from './planet'; // Adjust the import path based on where PlanetProps is defined

export interface HeaderProps {
    planetDetails: PlanetProps[],
    activeTab: number,
    setActiveTab: (arg0: number) => void,
    handleMobileTabToggle: (index: any) => void,
    toggleHamb: boolean
}