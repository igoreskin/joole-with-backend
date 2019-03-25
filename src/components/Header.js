import React from 'react';
import cx from 'classnames';

import styles from './Header.module.css';
import globalStyles from './bootstrap.min.module.css';

const header = (props) => {

    return (
        <div className={cx(styles.headerContainer, globalStyles['container-fluid'])}>
            <div className={cx(globalStyles.row, styles.headerRow)}>

                <div className={cx(globalStyles.col, globalStyles['col-sm-2'])}>
                    <div className={cx(globalStyles['container-fluid'])}>
                        <div className={cx(globalStyles.row, styles.logo)}>
                            <div className={cx(globalStyles.col, globalStyles['col-sm-2'], styles.column)}>j</div>
                            <div className={cx(globalStyles.col, globalStyles['col-sm-3'], styles.column)}>
                                <img src='../../third-attempt-logo.svg' alt='' className={styles.svgLogo} />

                            </div>
                            <div className={cx(globalStyles.col, globalStyles['col-sm-2'], styles.column)}>le</div>
                            <div className={cx(globalStyles.col, globalStyles['col-sm-5'], styles.column2)}></div>
                        </div>
                    </div>
                </div>

                <div className={cx(globalStyles.col, globalStyles['col-sm-8'])}>
                    <div>
                        <button className={cx(globalStyles.btn, globalStyles['btn-secondary'],
                            globalStyles['dropdown-toggle'], styles.Button)} type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            HVAC Fans &nbsp;&nbsp;
                        </button>
                        <input className={styles.searchInput} placeholder="search..." />&nbsp;
    
                    <i class="fas fa-caret-down" 
                        style={{ position: 'relative', marginLeft: '-63px', zIndex: "10", cursor: "pointer" }}></i>&nbsp;&nbsp;&nbsp;
                    <i class="fas fa-search" 
                        style={{ position: 'relative', marginLeft: '-3px', zIndex: "10", cursor: "pointer" }}></i>

                        {/* {this.state.clicked ?
                            <div>
                                <input className={styles.drop} value="HVAC Fans" />
                            </div> : null
                        } */}
                    </div>
                </div>

                <div className={cx(globalStyles.col, globalStyles['col-sm-2'])} style={{fontSize: '19px'}}>Projects</div>
            </div>
        </div>
    )

}

export default header;

// onClick = { this.handleSearchClick }