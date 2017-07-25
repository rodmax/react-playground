import {fetchLocations} from 'client/fetch-osm';
import {takeLatest, put, call} from 'redux-saga/effects';

export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
export function changeSearchText(searchText) {
    return {
        type: CHANGE_SEARCH_TEXT,
        searchText
    };
}

export const LOAD_LOCATIONS_REQUEST = 'LOAD_LOCATIONS_REQUEST';
export function loadLocationsRequest() {
    return {
        type: LOAD_LOCATIONS_REQUEST,
    };
}

export const LOAD_LOCATIONS_SUCCESS = 'LOAD_LOCATIONS_SUCCESS';
export function loadLocationsSuccess(items) {
    return {
        type: LOAD_LOCATIONS_SUCCESS,
        items
    };
}

export const LOAD_LOCATIONS_ERROR = 'LOAD_LOCATIONS_ERROR';
export function loadLocationsError(errResp) {
    return {
        type: LOAD_LOCATIONS_ERROR,
        errResp
    };
}

export function* loadLocationsSaga() {
    yield takeLatest(CHANGE_SEARCH_TEXT, loadLocations);
}

function* loadLocations(action) {
    yield put(loadLocationsRequest());
    try {
        const resp = yield call(fetchLocations, {q: action.searchText});
        yield put(loadLocationsSuccess(resp.data));
    } catch (e) {
        yield put(loadLocationsError(e));
    }
}
