import * as React from 'react';
import Sidebar from 'sidebar/Sidebar';
import Topbar from 'topbar/Topbar';
import SearchResults from 'search-results/SearchResults';

import 'core/reset.css';
import './App.css';


export default function App() {

    return (
        <div className="App">
            <div className="App__topbar">
                <Topbar />
            </div>
            <div className="App__content">
                <div className="App__sidebar">
                    <Sidebar />
                </div>
                <div className="App__main">
                    <SearchResults />
                </div>
            </div>
        </div>
    );
}
