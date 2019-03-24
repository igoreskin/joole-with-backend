import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './MainContainer.module.css';
import globalStyles from './bootstrap.min.module.css';
import cx from 'classnames';
import LoginForm from './LoginForm';
import SearchForm from './SearchForm';
import * as actions from '../actions/userActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        console.log(this.props.users)
        this.props.actions.loadRegisteredUsers(); 
    }

    logIn = () => {
        this.setState({ loggedIn: true }, () => console.log(this.state.loggedIn))
    }

    render() {
        return (
            <div className={styles.container}>

                {this.isLoggedIn ? <div className={styles.signup}>Sign up</div> : null}

                <div className={styles.logoContainer}>
                    <div className={cx(globalStyles['container-fluid'])}>
                        <div className={cx(globalStyles.row, styles.logo)}>
                            <div className={cx(globalStyles.col, globalStyles['col-sm-2'], styles.column)}>j</div>
                            <div className={cx(globalStyles.col, globalStyles['col-sm-6'], styles.column)}>
                            <img src='../../third-attempt-logo.svg' alt='' className={styles.svgLogo} />
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

                <Route exact path='/' render={() => <p><Link className={styles.linkToLogin} to={`/login`}>
                    Please click here to login!</Link></p>} />
                <Route exact path='/login' render={(routeProps) => <LoginForm {...routeProps} users={this.props.users} logIn={this.logIn}/>} />
                <Route exact path='/search' render={() => (this.state.loggedIn || sessionStorage.getItem('currentUser') ? 
                    (<SearchForm />) : (<Redirect to='/login'/>))} />

                {/* {this.state.loggedIn || sessionStorage.getItem('currentUser') ? <Route exact path='/search' component={SearchForm} /> : null} */}

            </div> /* className=styles.container */
        )
    }


}

const mapStateToProps = (state) => {
    console.log(state.users.users)
    return {
        users: state.users.users}
  }

const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
