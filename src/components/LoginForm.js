import React from 'react';
import styles from './LoginForm.module.css';
import { Button } from 'react-bootstrap';
import globalStyles from './bootstrap.min.module.css';
import cx from 'classnames';

const LoginForm = (props) => {
    return (
        <form className={styles.inputForm}>
            <input 
            className={styles.Input} type='text' name='username' 
            placeholder='Username or Email'></input>
            {/* <i class="fas fa-user" style={{marginLeft: '-30px', color: '#a9a9a9'}}></i> */}
            <i class="fas fa-dog" style={{marginLeft: '-30px', color: '#a9a9a9'}}></i>
            
            <br/>
            <input className={styles.Input} type='password' placeholder='Password'></input>
            <i class="fas fa-lock" style={{marginLeft: '-30px', color: '#a9a9a9'}}></i><br></br>
            <Button className={styles.login} variant="primary">Dog in</Button> 

        </form>
    )
}

export default LoginForm;