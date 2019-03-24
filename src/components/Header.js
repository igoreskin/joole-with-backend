import React, { Component } from 'react';

import styles from './Header.module.css';

const header = (props) => {

    return (
        <div className={styles.headerContainer}>
            <p>In the Header</p>
        </div>
    )

}

export default header;