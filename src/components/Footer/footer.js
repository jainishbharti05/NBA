import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';

import { CURRENT_YEAR } from '../../config'

const Footer = () => {
    return (
        <div className= {styles.footer}>
            <Link to='/' className={styles.logo}>
            <img alt="nba logo" src="/images/logo/logo.png" />
            </Link>
            <div className={styles.right}>
                @NBA {CURRENT_YEAR} All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;