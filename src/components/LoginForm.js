import React, { Component } from 'react';
import styles from './LoginForm.module.css';
import { Button } from 'react-bootstrap';
import * as actions from '../actions/userActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

    componentDidMount() {
        console.log(this.props.users)
    }

    loginClick = (event) => {
        event.preventDefault()
        console.log("Login clicked!");
        this.setState({
            username: event.target.username,
            password: event.target.password
        })
        // console.log(this.state);
        console.log(this.props.users)
    }

    handleOnChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
        // console.log(this.state)
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

const mapStateToProps = (state) => {
    // console.log(state.users.users)
    // const users = state.users.users;
    // console.log(users)
    // return users
  }

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

// export default LoginForm;