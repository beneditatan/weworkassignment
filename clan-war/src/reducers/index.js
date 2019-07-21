import { combineReducers } from 'redux';

import { reactStat, angularStat, vueStat 
    // clanStargazers 
} from './app.reducer'

const rootReducer = combineReducers({
    reactStat, angularStat, vueStat,
    // clanStargazers
});

export default rootReducer;