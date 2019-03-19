import React, { Component } from 'react';
import styles from './LoginPage.module.css';
import { Button } from 'react-bootstrap';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import cx from 'classnames';

class LoginPage extends Component {

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.signup}>Sign up</div>

                <div className={styles.logo}>joole</div>

                <div className={cx(globalStyles.container)}>
                    <div className={cx(globalStyles.row)}>
                        <div className={cx(globalStyles.col, globalStyles['col-sm-2'])}>in column</div>
                        <div className={cx(globalStyles.col, globalStyles['col-sm-6'])}>in column</div>
                        <div className={cx(globalStyles.col, globalStyles['col-sm-2'])}>in column</div>
                        <div className={cx(globalStyles.col, globalStyles['col-sm-2'])}>in column</div>
                    </div>
                </div>

                <p>Building Product Selection Platform</p>

                <form className={styles.inputForm}>
                    {/* <span class="input-group-addon"><i class="fas fa-user"></i></span> */}
                    <input 
                    className={styles.Input} type='text' name='username' 
                    placeholder='Username or Email'></input>
                    <i class="fas fa-user" style={{marginLeft: '-30px', color: '#a9a9a9'}}></i>
                    
                    <br/>
                    <input className={styles.Input} type='password' placeholder='Password'></input>
                    <i class="fas fa-lock" style={{marginLeft: '-30px', color: '#a9a9a9'}}></i><br></br>
                    <Button className={styles.login} variant="primary">Log in</Button> 

                </form>

                <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
                </svg>
            </div>
        )
    }


}

export default LoginPage;