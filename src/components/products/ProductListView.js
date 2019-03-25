import React from 'react';
import globalStyles from '../bootstrap.min.module.css';
import cx from 'classnames';
import styles from './ProductListView.module.css';

const ProductListView = (props) => {
    return(
        <div className={styles.listView}>

            <p className={styles.verified}>Verified 08/21/2016</p>

            <div className={styles.largeDataDiv}>
                <div className={styles.largeDataLine}>Emerson</div>
                <div className={styles.largeDataLine}>Luray Eco Series</div>
                <div className={styles.largeDataLine}>CF860</div>
            </div>

            <div className={styles.strip}>
                <div className={styles.listViewData}>CFM</div>
                <div className={styles.listViewData}>W at max speed</div>
                <div className={styles.listViewData}>dBA at max speed</div>
                <div className={styles.listViewData}>fan sweep diameter</div>
            </div>

            <div className={styles.pastSpecs}>
                <div className={styles.pastSpecsLine}>Past specifications:</div>
                <div className={styles.pastSpecsLine}>10 firm / 1492 global</div>
            </div>


            <div className={styles.compareAdd}>
                <div className={cx(globalStyles["custom-control"], globalStyles["custom-checkbox"])}>
                    <input type="checkbox" className={cx(globalStyles["custom-control-input"], styles.customInput)} id="customCheck" />
                    <label className={cx(globalStyles["custom-control-label"], styles.customLabel)} for="customCheck">Compare</label>
                </div>
            </div>

        </div>
    )

}

export default ProductListView;

// className={cx(globalStyles.col, globalStyles['col-sm-2'], styles.column)}