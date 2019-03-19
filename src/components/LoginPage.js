import React, { Component } from 'react';
import styles from './LoginPage.module.css';
import { Button } from 'react-bootstrap';

class LoginPage extends Component {

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.signup}>Sign up</div>
                <p>Building Product Selection Platform</p>

                <form className={styles.inputForm}>
                    <input 
                    className={styles.Input} type='text' name='username' 
                    placeholder='Username or Email'></input><i class="fas fa-user"></i><br/>
                    <input className={styles.Input} type='password' placeholder='Password'></input><i class="fas fa-lock"></i><br></br>
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