import axios from 'axios';

const OsmClient = axios.create({
    baseURL: '//nominatim.openstreetmap.org'
});

const defaultSearchParams = {
    q: 'minsk',
    format: 'json'
};

export function fetchLocations(params) {
    return OsmClient.get('/search', {
        params: Object.assign({}, defaultSearchParams, params)
    });
}
