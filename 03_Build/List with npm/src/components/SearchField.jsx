import React from 'react';
import * as styles from './SearchField.css';

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
                className={styles.inputField}/>
        );
    }
});

export default SearchField;
