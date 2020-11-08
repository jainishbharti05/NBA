import React from 'react';

import styles from '../videosList.module.css';
import VideosTemplate from '../VideosListTemplate';

const VideosRelated = (props) => {   
    return (
        <div className={styles.relatedWrapper}>
            <VideosTemplate 
                data={props.data}
                teams={props.teams} 
            />
        </div>  
    )
}
    
    
    

    
        
    


export default VideosRelated;