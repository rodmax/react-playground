import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {setSearchText} from '../actions';
import './topbar.scss';


Topbar.propTypes = {
    onSearchTextChange: PropTypes.func.isRequired,
    searchText: PropTypes.string.isRequired
};

function Topbar({onSearchTextChange, searchText}) {
    return <div className="c-topbar">
        <input
            type="text"
            name="name"
            value={searchText}
            onChange={onSearchTextChange}
            placeholder="search..."
        />
    </div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);

function mapStateToProps({searchText}) {
    return {searchText};
}

function mapDispatchToProps(dispatch) {
    return {
        onSearchTextChange: ev => dispatch(setSearchText(ev.target.value))
    };
}
