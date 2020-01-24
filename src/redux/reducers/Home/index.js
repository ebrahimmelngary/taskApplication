import { FETCH_HOME_SUCCESS } from '../../actions/actionTypes';


// set initial state
const INITIALSTATE = {
    homeData: []
}


export default (state = INITIALSTATE, action) => {
    switch (action.type) {

        case FETCH_HOME_SUCCESS:
            return { homeData: action.payload };
        default:
            return state;
    }

}