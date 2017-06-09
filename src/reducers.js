import {combineReducers} from 'redux';
import {SET_SEARCH_TEXT} from './actions';

const appStoreReducer = combineReducers({
    searchText
});
export default appStoreReducer;


function searchText(state=null, action) {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return action.text;
        default:
            return state;
    }
}
