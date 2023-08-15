import styles from './TitleH1.module.css';

import React from 'react';


function TitleH1({ children }) {
    return(
        <div className={styles.divisorParagraph}>
            <h1 className={styles.TitleH1}>{children}</h1>
        </div>
    )
}

export default TitleH1;