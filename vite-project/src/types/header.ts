import type { PlanetProps } from './planet'; // Adjust the import path based on where PlanetProps is defined

export interface HeaderProps {
    planetDetails: PlanetProps[],
    handleMobileTabToggle: (index: any) => void,
}