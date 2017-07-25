import * as React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import {changeSearchText} from '../actions';
import './topbar.css';


const msgs = defineMessages({
    searchPlaceholder: {
        id: 'Topbar.searchPlaceholder',
        defaultMessage: 'search for locations...',
    }
});


interface ITopBarProps {
    onSearchTextChange: any
    intl: any
}

function Topbar({onSearchTextChange, intl}: ITopBarProps) {
    function onKeyPress(ev) {
        if (ev.key === 'Enter') {
            onSearchTextChange(ev.target.value);
        }

    }

    return (
        <div className="c-topbar">
            <input
                type="text"
                name="name"
                onKeyPress={onKeyPress}
                placeholder={intl.formatMessage(msgs.searchPlaceholder)}
            />
        </div>
    );
}

export default injectIntl(connect(null, mapDispatchToProps)(Topbar));

function mapDispatchToProps(dispatch) {
    return {
        onSearchTextChange: text => dispatch(changeSearchText(text))
    };
}
