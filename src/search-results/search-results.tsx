import * as React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';


interface ILocationItem {
    osm_id: number
}


function SearchResults({items}: {items: ReadonlyArray<ILocationItem>}) {
    return (
        <div className="c-search-results">
            <h4>Total results: {items.length}</h4>
            {items.map(item => {
                return <pre key={item.osm_id}>{JSON.stringify(item, null, 4)}</pre>;
            })}
        </div>
    );
}

export default connect(mapStateToProps)(SearchResults);

function mapStateToProps({searchedLocations}) {
    return {items: searchedLocations.items};
}
