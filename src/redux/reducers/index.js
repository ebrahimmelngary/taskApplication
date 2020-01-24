import { combineReducers } from 'redux';

// Make sure you add all reducers her 

import LoadingReducer from './Loading';

import HomeReducer from './Home';

export default combineReducers({
    loading: LoadingReducer,
    Home:HomeReducer,
 

})