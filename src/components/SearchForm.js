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
            clicked: false
        }
    }

    handleSearchClick = () => {
        console.log("Search clicked")
        const clicked = this.state.clicked;
        this.setState({ clicked: !clicked }, () => { console.log(this.state) })
    }

    render() {
        return (
            <div>
                <button className={cx(globalStyles.btn, globalStyles['btn-secondary'], 
                    globalStyles['dropdown-toggle'], styles.Button)} type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Mechanical &nbsp;&nbsp;
                </button>
                <input className={styles.searchInput} placeholder="search..."/>&nbsp;

                <i class="fas fa-caret-down" style={{position: 'relative', marginLeft: '-63px', zIndex: "10"}} onClick={this.handleSearchClick}></i>&nbsp;&nbsp;&nbsp;
                <i class="fas fa-search" style={{ position: 'relative', marginLeft: '-3px', zIndex: "10" }} onClick={this.handleSearchClick}></i>
                
                {this.state.clicked ? 
                <div>
                    <input className={styles.drop} value="HVAC Fans"/>
                </div> : null
                }
            </div>
        )
    }
}



export default SearchForm;