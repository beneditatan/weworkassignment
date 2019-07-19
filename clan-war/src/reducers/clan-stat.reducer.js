import { 
    FETCH_REACT_STAT,
    FETCH_VUE_STAT,
    FETCH_ANGULAR_STAT,
 } from '../actions';

const initialState = {
    stargazers_count: 0,
    forks_count: 0,
    open_issues_count: 0
};

export const reactStat = (state=initialState, action) => {
    switch(action.type){
        case FETCH_REACT_STAT:
            const { stargazers_count, forks_count, open_issues_count } = action.payload.data;
            return { stargazers_count, forks_count, open_issues_count };
        default:
            return state;
    }
}

export const vueStat = (state=initialState, action) => {
    switch(action.type){
        case FETCH_VUE_STAT:
            const { stargazers_count, forks_count, open_issues_count } = action.payload.data;
            return { stargazers_count, forks_count, open_issues_count };
        default:
            return state;
    }
}

export const angularStat = (state=initialState, action) => {
    switch(action.type){
        case FETCH_ANGULAR_STAT:
            const { stargazers_count, forks_count, open_issues_count } = action.payload.data;
            return { stargazers_count, forks_count, open_issues_count };
        default:
            return state;
    }
}