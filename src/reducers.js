import {combineReducers} from 'redux';
import {SET_SEARCH_TEXT} from './actions';

// State shape
// {
//      searchText: 'text input by user'
// }

const appStoreReducer = combineReducers({
    searchText
});
export default appStoreReducer;


function searchText(state='initial', action) {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return action.searchText;
        default:
            return state;
    }
}
