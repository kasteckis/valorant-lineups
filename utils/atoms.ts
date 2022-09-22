import {atom} from "recoil";
import {Agent} from "../pages/api/agents";
import {ValorantMap} from "../pages/api/maps";

export const selectedAgent = atom<Agent | undefined>({
    key: 'selectedAgent',
    default: undefined,
});

export const selectedMap = atom<ValorantMap | undefined>({
    key: 'selectedMap',
    default: undefined,
});
