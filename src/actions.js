export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export function setSearchText(searchText) {
    return {
        type: SET_SEARCH_TEXT,
        searchText
    };
}

export const LOAD_SEARCH_RESULTS = 'LOAD_SEARCH_RESULTS';
export function loadSearchResults(searchResults) {
    return {
        type: LOAD_SEARCH_RESULTS,
        searchResults
    };
}
