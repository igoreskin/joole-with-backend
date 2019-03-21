import React, { Component } from 'react';
import { connect } from 'react-redux';
import globalStyles from './bootstrap.min.module.css';
import cx from 'classnames';

import styles from './SearchForm.module.css';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
        }
    }

    render() {
        return (
            <div>
                <button className={cx(globalStyles.btn, globalStyles['btn-secondary'], 
                    globalStyles['dropdown-toggle'], styles.Button)} type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <input className={styles.searchInput} />&nbsp;
                <i class="fas fa-caret-down"></i>&nbsp;&nbsp;&nbsp;
                <i class="fas fa-search"></i>
            </div>
        )
    }
}

// className={cx(globalStyles.col, globalStyles['col-sm-2'], styles.column)}




export default SearchForm;