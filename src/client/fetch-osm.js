import axios from 'axios';

const OsmClient = axios.create({
    baseURL: 'http://nominatim.openstreetmap.org'
});

const defaultSearchParams = {
    q: 'minsk',
    format: 'json'
};

export function searchOsmLocations(params) {
    return OsmClient.get('/search', {
        params: Object.assign({}, defaultSearchParams, params)
    });
}
