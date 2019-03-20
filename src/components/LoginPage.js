import React, { Component } from 'react';
import styles from './LoginPage.module.css';
import { Button } from 'react-bootstrap';
import globalStyles from './bootstrap.min.module.css';
import cx from 'classnames';
import LoginForm from './LoginForm';

class LoginPage extends Component {

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

                <LoginForm />

                

                {/* <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
                </svg> */}
            </div> /* className=styles.container */
        )
    }


}

export default LoginPage;