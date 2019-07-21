import _ from 'lodash';
import { CLANS } from '../constants/clans';
import { 
    FETCH_REACT_STAT,
    FETCH_VUE_STAT,
    FETCH_ANGULAR_STAT,
    FETCH_REACT_STARGAZERS,
    FETCH_VUE_STARGAZERS,
    FETCH_ANGULAR_STARGAZERS
 } from '../actions';


const statInitialData = {
    stargazers_count: 0,
    forks_count: 0,
    open_issues_count: 0
}

export const reactStat = (state=statInitialData, action) => {
    switch(action.type) {
        case FETCH_REACT_STAT:
            const { stargazers_count, forks_count, open_issues_count } = action.payload.data;
            return { stargazers_count, forks_count, open_issues_count };
        default:
            return state;
    }
}

export const vueStat = (state=statInitialData, action) => {
    switch(action.type) {
        case FETCH_VUE_STAT:
            const { stargazers_count, forks_count, open_issues_count } = action.payload.data;
            return { stargazers_count, forks_count, open_issues_count };
        default:
            return state;
    }
}

export const angularStat = (state=statInitialData, action) => {
    switch(action.type) {
        case FETCH_ANGULAR_STAT:
            const { stargazers_count, forks_count, open_issues_count } = action.payload.data;
            return { stargazers_count, forks_count, open_issues_count };
        default:
            return state;
    }
}

// export const clanStargazers = (state=initialState, action) => {
//     switch(action.type) {
//         case FETCH_REACT_STARGAZERS:
//             var stargazers = _.forEach(action.payload.data, (sg) => {
//                     const { login, avatar_url, url } = sg;
//                     return { login, avatar_url, url } ;
//                 });
//             state.stargazers_data[CLANS.REACT] = stargazers;
//             return state;
//         case FETCH_VUE_STARGAZERS:
//             var stargazers = _.forEach(action.payload.data, (sg) => {
//                 const { login, avatar_url, url } = sg;
//                 return { login, avatar_url, url } ;
//             });
//             state.stargazers_data[CLANS.VUE] = stargazers;
//             return state;
//         case FETCH_ANGULAR_STARGAZERS:
//             var stargazers = _.forEach(action.payload.data, (sg) => {
//                 const { login, avatar_url, url } = sg;
//                 return { login, avatar_url, url } ;
//             });
//             state.stargazers_data[CLANS.ANGULAR] = stargazers;
//             return state;
//         default:
//             return state;
//     }
// }