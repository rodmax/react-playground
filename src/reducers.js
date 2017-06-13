import {combineReducers} from 'redux';
import {SET_SEARCH_TEXT, LOAD_SEARCH_RESULTS} from './actions';

// State shape
const initialStore = {
    searchText: 'initial',
    searchResults: []
};

const appStoreReducer = combineReducers({
    searchText,
    searchResults
});
export default appStoreReducer;


function searchText(state=initialStore.searchText, action) {
    switch (action.type) {
        case SET_SEARCH_TEXT:
            return action.searchText;
        default:
            return state;
    }
}


function searchResults(state=initialStore.searchResults, action) {
    switch (action.type) {
        case LOAD_SEARCH_RESULTS:
            return action.searchResults;
        default:
            return state;
    }
}
