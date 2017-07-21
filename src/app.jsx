import React from 'react';
import Sidebar from 'sidebar/sidebar';
import Topbar from 'topbar/topbar';
import SearchResults from 'search-results/search-results';
import 'scss/app.scss';


export default function App() {

    return (
        <div className="l-page">
            <div className="l-page__topbar">
                <Topbar />
            </div>
            <div className="l-page__content">
                <div className="l-page__sidebar">
                    <Sidebar />
                </div>
                <div className="l-page__main">
                    <SearchResults />
                </div>
            </div>
        </div>
    );
}
