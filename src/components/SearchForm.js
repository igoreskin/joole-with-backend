import React, { Component } from 'react';
import { connect } from 'react-redux';
import globalStyles from './bootstrap.min.module.css';
import cx from 'classnames';
import { Fragment } from 'react';
import { Redirect } from 'react-router';

import styles from './SearchForm.module.css';
import LoginBackground from './LoginBackground';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            clicked: false,
            redirect: false
        }
    }

    handleSearchClick = () => {
        console.log("Search clicked")
        const clicked = this.state.clicked;
        this.setState({ clicked: !clicked }, () => { console.log(this.state) })
    }

    handleFansClick = () => {
        this.setState({redirect: true}, () => console.log(this.state.redirect))
    }

    renderRedirect = () => {
        if(this.state.redirect) {
            return <Redirect to='/products' />
        }
    }

    render() {
        return (
            <Fragment>
                <LoginBackground />
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
                        {this.renderRedirect()}
                        <input className={styles.drop} value="HVAC Fans" onClick={this.handleFansClick}/>
                    </div> : null
                    }
                </div>
            </Fragment>
        )
    }
}



export default SearchForm;