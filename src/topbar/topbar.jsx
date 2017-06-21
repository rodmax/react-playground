import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {changeSearchText} from '../actions';
import './topbar.scss';


Topbar.propTypes = {
    onSearchTextChange: PropTypes.func.isRequired,
};

function Topbar({onSearchTextChange}) {
    function onKeyPress(ev) {
        if (ev.key === 'Enter') {
            onSearchTextChange(ev.target.value);
        }

    }
    return <div className="c-topbar">
        <input
            type="text"
            name="name"
            onKeyPress={onKeyPress}
            placeholder="search..."
        />
    </div>;
}

export default connect(null, mapDispatchToProps)(Topbar);

function mapDispatchToProps(dispatch) {
    return {
        onSearchTextChange: text => dispatch(changeSearchText(text))
    };
}
