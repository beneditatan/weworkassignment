import axios from 'axios';
import { CLANS, CLANS_GITHUB_URL, CLANS_STARGAZERS } from '../constants/clans';

export const FETCH_REACT_STAT = "FETCH_REACT_STAT";
export const FETCH_VUE_STAT = "FETCH_VUE_STAT";
export const FETCH_ANGULAR_STAT = "FETCH_ANGULAR_STAT";
export const FETCH_REACT_STARGAZERS = "FETCH_REACT_STARGAZERS";
export const FETCH_VUE_STARGAZERS = "FETCH_VUE_STARGAZERS";
export const FETCH_ANGULAR_STARGAZERS = "FETCH_ANGULAR_STARGAZERS";

export const fetchReactStat = () => {
    const url = CLANS_GITHUB_URL[CLANS.REACT];
    const request = axios.get(url);
    // const request = {
    //     data: {
    //         stargazers_count: 1,
    //         forks_count: 2,
    //         open_issues_count: 3
    //     }

    // }
    console.log(`[GET] FETCH REACT STAT: ${request}`)

    return {
        type: FETCH_REACT_STAT,
        payload: request
    }
}

export const fetchVueStat = () => {
    const url = CLANS_GITHUB_URL[CLANS.VUE];
    const request = axios.get(url);
    // const request = {
    //     stargazers_count: 1,
    //     forks_count: 2,
    //     open_issues_count: 3
    // }

    console.log(`[GET] FETCH VUE STAT: ${request}`)

    return {
        type: FETCH_VUE_STAT,
        payload: request
    }
}

export const fetchAngularStat = () => {
    const url = CLANS_GITHUB_URL[CLANS.ANGULAR];
    const request = axios.get(url);
    // const request = {
    //     stargazers_count: 1,
    //     forks_count: 2,
    //     open_issues_count: 3
    // }

    console.log(`[GET] FETCH ANGULAR STAT: ${request}`);

    return {
        type: FETCH_ANGULAR_STAT,
        payload: request
    }
}

export const fetchReactStargazers = (page) => {
    const url = `${CLANS_STARGAZERS[CLANS.REACT]}&page=${page}`;
    const request = axios.get(url);

    console.log(`[GET] FETCH REACT STARGAZERS: ${request}`);

    return {
        type: FETCH_REACT_STARGAZERS,
        payload: request
    }
}

export const fetchVueStargazers = (page) => {
    const url = `${CLANS_STARGAZERS[CLANS.VUE]}&page=${page}`;
    const request = axios.get(url);

    console.log(`[GET] FETCH VUE STARGAZERS: ${request}`);

    return {
        type: FETCH_VUE_STARGAZERS,
        payload: request
    }
}

export const fetchAngularStargazers = (page) => {
    const url = `${CLANS_STARGAZERS[CLANS.ANGULAR]}&page=${page}`;
    const request = axios.get(url);

    console.log(`[GET] FETCH ANGULAR STARGAZERS: ${request}`);

    return {
        type: FETCH_ANGULAR_STARGAZERS,
        payload: request
    }
}