import React from 'react';
import {connect} from 'react-redux';
import {setSearchText} from '../actions';
import './topbar.scss';

class Topbar extends React.Component {
    constructor({dispatch}) {
        super();
        this.state = {searchText: ''};
        this.onTextChange = this.onTextChange.bind(this);
        this.dispatch = dispatch;
    }

    onTextChange(ev) {
        console.log('onTextChange');
        // this.setState({searchText: ev.target.value});
        this.dispatch(setSearchText(ev.target.value));
    }


    render() {
        console.log('render', this.state);
        return (
            <div className="c-topbar">
                <input
                    type="text"
                    name="name"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    placeholder="search..."
                />
            </div>
        );
    }
}

Topbar = connect()(Topbar);

export default Topbar;
