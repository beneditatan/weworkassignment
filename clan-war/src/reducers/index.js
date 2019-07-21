import { combineReducers } from 'redux';

import { reactStat, angularStat, vueStat,
    reactStargazers, vueStargazers, angularStargazers
    // clanStargazers 
} from './app.reducer'

const rootReducer = combineReducers({
    reactStat, angularStat, vueStat,
    reactStargazers, vueStargazers, angularStargazers
    // clanStargazers
});

export default rootReducer;