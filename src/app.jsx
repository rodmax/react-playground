import React from 'react';
import Sidebar from 'sidebar/sidebar';
import Topbar from 'topbar/topbar';
import SearchResults from 'search-results/search-results';
import 'scss/app.scss';


class App extends React.Component {

    render() {
        return (
            <div className="l-page">
                <div className="l-page__topbar">
                    <Topbar></Topbar>
                </div>
                <div className="l-page__content">
                    <div className="l-page__sidebar">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="l-page__main">
                        <SearchResults></SearchResults>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
