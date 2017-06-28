import React from 'react';
import './SearchField.css';

const SearchField = React.createClass({

    handleFilterChange(event) {
        this.props.updateFilter(event.target.value);
    },

    render() {

        return(
            <input
                type="text"
                onChange={this.handleFilterChange}
                placeholder="Enter the name"
                className="input-field"/>
        );
    }
});

export default SearchField;
