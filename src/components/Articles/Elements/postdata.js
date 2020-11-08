import React from 'react';
import moment from 'moment';

import styles from '../articles.module.css';

const formatDate = (date) => {
    return moment(date).format(' DD-MM-YYYY');
}



const PostData = (props) => {
    return (
        <div className={styles.articlePostData}>
            <div>
                Date :
                <span>{formatDate(props.data.date)}</span>
            </div>
            <div>
                Author :
                <span>{props.data.author}</span>
            </div>
        </div>
    );
};

export default PostData;