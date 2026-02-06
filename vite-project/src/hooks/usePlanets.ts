import { create } from "zustand";

interface PlanetsState {
    toggleHamb: boolean,
    activeTab: number,

    setToggleHamb: () => void,
    setActiveTab: (index: number) => void
}

const usePlanets = create<PlanetsState>((set) => ({
    toggleHamb: false,
    activeTab: 0,

    setToggleHamb: () => set(_ => ({})),
    setActiveTab: (index) => set(state => ({ ...state, activeTab: index }))
}));

export default usePlanets;