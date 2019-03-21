import React, { Component } from 'react';
import styles from './LoginForm.module.css';
import { Button } from 'react-bootstrap';
// import globalStyles from './bootstrap.min.module.css';
// import cx from 'classnames';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '' 
        }
    }

    loginClick = (event) => {
        event.preventDefault()
        console.log("Login clicked!");
        console.log(this.state);
        // this.setState({

        // })
    }

    handleOnChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
        console.log(this.state)
      }

    render() {
        return (
            <form className={styles.inputForm} onSubmit={this.loginClick}>
                <input 
                className={styles.Input} type='text' name='username' 
                placeholder='Username or Email' onChange={this.handleOnChange}></input>
                {/* <i class="fas fa-user" style={{marginLeft: '-30px', color: '#a9a9a9'}}></i> */}
                <i class="fas fa-dog" style={{marginLeft: '-30px', color: '#a9a9a9'}}></i>
                
                <br/>
                <input className={styles.Input} type='password' name='password' placeholder='Password' onChange={this.handleOnChange}></input>
                <i class="fas fa-lock" style={{marginLeft: '-30px', color: '#a9a9a9'}}></i><br></br>
                <Button type='submit' className={styles.login} variant="primary">Dog in</Button> 

            </form>
        )
    }
}

export default LoginForm;