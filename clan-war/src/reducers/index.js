import { combineReducers } from 'redux';

import { reactStat, vueStat, angularStat } from './clan-stat.reducer'

const rootReducer = combineReducers({
    reactStat,
    vueStat,
    angularStat
});

export default rootReducer;