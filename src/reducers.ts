import {combineReducers} from 'redux';
import {
    CHANGE_SEARCH_TEXT,
    LOAD_LOCATIONS_REQUEST,
    LOAD_LOCATIONS_SUCCESS,
    LOAD_LOCATIONS_ERROR
} from './actions';

// State shape
const initialStore = {
    searchText: 'initial',
    searchedLocations: {
        isLoading: false,
        errResp: null,
        items: []
    }
};


function searchText(state = initialStore.searchText, action) {
    switch (action.type) {
        case CHANGE_SEARCH_TEXT:
            return action.searchText;
        default:
            return state;
    }
}


function searchedLocations(state = initialStore.searchedLocations, action) {
    switch (action.type) {
        case LOAD_LOCATIONS_REQUEST:
            return Object.assign({}, state, {isLoading: true});
        case LOAD_LOCATIONS_SUCCESS:
            return {items: action.items, errResp: null, isLoading: false};
        case LOAD_LOCATIONS_ERROR:
            return {items: [], errResp: action.errResp, isLoading: false};
        default:
            return state;
    }
}


const appStoreReducer = combineReducers({
    searchText,
    searchedLocations
});
export default appStoreReducer;
