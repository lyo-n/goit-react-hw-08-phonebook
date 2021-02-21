import React from 'react';
import propTypes from 'prop-types';
import styles from './filter.module.css';
import { TextField } from '@material-ui/core';

const Filter = ({value, changeOnFilter}) => (  
    <div className={styles.searchBlock}>
        Find contacts by name
          <TextField variant="standard" type="text" value={value} onChange = {(e) => changeOnFilter(e.target.value)}/>
    </div>
)

Filter.propTypes = {
    value: propTypes.string.isRequired,
    changeOnFilter: propTypes.func.isRequired,
};

export default Filter;

