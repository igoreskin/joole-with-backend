import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainContainer.module.css';
import globalStyles from './bootstrap.min.module.css';
import cx from 'classnames';
import LoginForm from './LoginForm';
import SearchForm from './SearchForm';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.signup}>Sign up</div>

                {/* <div className={styles.logo}>joole</div> */}

                <div className={styles.logoContainer}>
                    <div className={cx(globalStyles['container-fluid'])}>
                        <div className={cx(globalStyles.row, styles.logo)}>
                            <div className={cx(globalStyles.col, globalStyles['col-sm-2'], styles.column)}>j</div>
                            <div className={cx(globalStyles.col, globalStyles['col-sm-6'], styles.column)}>
                            <img src='../../third-attempt-logo.svg' className={styles.svgLogo} />
                            {/* <span><svg width="52" height="52" className={styles.circle}>
                                <circle cx="26" cy="26" r="25" fill="#1F4F7B" opacity="0.4" />
                            </svg></span>
                            <span><svg width="52" height="52" className={styles.circle}>
                                <circle cx="26" cy="26" r="25" fill="#1F4F7B" opacity="0.4" />
                            </svg></span> */}
                            </div>
                            <div className={cx(globalStyles.col, globalStyles['col-sm-2'], styles.column)}>l</div>
                            <div className={cx(globalStyles.col, globalStyles['col-sm-2'], styles.column)}>e</div>
                        </div>
                    </div>
                </div>

                <p className={styles.building}>Building Product Selection Platform</p>

                {/* <LoginForm /> */}
                <Route exact path='/' render={() => <p><Link className={styles.linkToLogin} to={`/login`}>
                    Please click here to login!</Link></p>} />
                <Route exact path='/login' component={LoginForm} /> 
                <Route exact path='/search' component={SearchForm} /> 

            </div> /* className=styles.container */
        )
    }


}

export default MainContainer;