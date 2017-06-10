export const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
export function setSearchText(searchText) {
    return {
        type: SET_SEARCH_TEXT,
        searchText
    };
}
