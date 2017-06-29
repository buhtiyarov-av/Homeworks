import React, { Component } from 'react';
import * as styles from './SearchField.css';

export default class SearchField extends Component {

    constructor(props) {
        super(props);

        this.handleFilterChange = this.handleFilterChange.bind(this);
    };

    handleFilterChange(event) {
        this.props.updateFilter(event.target.value);
    };

    render() {

        return(
            <input
                type="text"
                onChange={this.handleFilterChange}
                placeholder="Enter the name"
                className={styles.inputField}/>
        );
    }
}
