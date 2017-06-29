import React, { Component } from 'react';
import './ListApp.css';

import SearchField from './SearchField.jsx';
import List from './List.jsx';
import studentsJSON from './studentsJSON.json';

const STUDENTS = studentsJSON.students;

export default class ListApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: STUDENTS,
            nameFilter: ''
        };

        this.searchChanged = this.searchChanged.bind(this);
    };

    searchChanged(filterText) {
        this.setState({
            nameFilter: filterText
        });
    };

    render() {
        const displayedItems = this.state.items.filter((student) =>
            student["name"].toLowerCase().indexOf(this.state.nameFilter.toLowerCase()) !== -1);

        return(
            <div>
                <SearchField updateFilter={this.searchChanged}/>
                <List items={displayedItems}/>
            </div>
        );
    }
}
