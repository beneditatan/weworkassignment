import axios from 'axios';
import { CLANS, CLANS_GITHUB_URL } from '../constants/clans';

export const FETCH_REACT_STAT = "FETCH_REACT_STAT";
export const FETCH_VUE_STAT = "FETCH_VUE_STAT";
export const FETCH_ANGULAR_STAT = "FETCH_ANGULAR_STAT";

export const fetchReactStat = () => {
    const url = CLANS_GITHUB_URL[CLANS.REACT];
    const request = axios.get(url);

    console.log(`[GET] FETCH_REPO_STAT: ${request}`)

    return {
        type: FETCH_REACT_STAT,
        payload: request
    }
}

export const fetchVueStat = () => {
    const url = CLANS_GITHUB_URL[CLANS.VUE];
    const request = axios.get(url);

    console.log(`[GET] FETCH_REPO_STAT: ${request}`)

    return {
        type: FETCH_VUE_STAT,
        payload: request
    }
}

export const fetchAngularStat = () => {
    const url = CLANS_GITHUB_URL[CLANS.ANGULAR];
    const request = axios.get(url);

    console.log(`[GET] FETCH_REPO_STAT: ${request}`)

    return {
        type: FETCH_ANGULAR_STAT,
        payload: request
    }
}