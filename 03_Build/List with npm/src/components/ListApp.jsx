import React from 'react';
import './ListApp.css';

import SearchField from './SearchField.jsx';
import List from './List.jsx';
import students from './students.json';

const STUDENTS = students.students;

const ListApp = React.createClass({

    getInitialState() {
        return {
            items: STUDENTS,
            nameFilter: ''
        };
    },

    searchChanged(filterText) {
        this.setState({
            nameFilter: filterText
        });
    },

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
});

export default ListApp;
