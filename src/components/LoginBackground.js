import React from 'react';
import styles from './LoginBackground.module.css';
import globalStyles from './bootstrap.min.module.css';
import cx from 'classnames';

const LoginBackground = (props) => {
    return (
        <div className={styles.Fragment}>
            <div className={styles.logoContainer}>
                <div className={cx(globalStyles['container-fluid'])}>
                    <div className={cx(globalStyles.row)}>
                        <div className={cx(globalStyles.col, globalStyles['col-sm-2'], styles.column)}>j</div>
                        <div className={cx(globalStyles.col, globalStyles['col-sm-6'], styles.column)}>
                            <img src='../../third-attempt-logo.svg' alt='' className={styles.svgLogo} />
                            
                        </div>
                        <div className={cx(globalStyles.col, globalStyles['col-sm-2'], styles.column)}>l</div>
                        <div className={cx(globalStyles.col, globalStyles['col-sm-2'], styles.column)}>e</div>
                    </div>
                </div>
            </div>

            <p className={styles.building}>Building Product Selection Platform</p>
        </div>
    )
}

export default LoginBackground;



{/* <span><svg width="52" height="52" className={styles.circle}>
    <circle cx="26" cy="26" r="25" fill="#1F4F7B" opacity="0.4" />
    </svg></span>
    <span><svg width="52" height="52" className={styles.circle}>
    <circle cx="26" cy="26" r="25" fill="#1F4F7B" opacity="0.4" />
</svg></span> */}