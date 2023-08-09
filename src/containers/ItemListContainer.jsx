import styles from './styles.modules.css'
import React, { Component } from 'react';
const ItemListContainer = ({greeting}) =>{
    return(
        <div className={styles['titulo']}>
        
    <h1 className='titulo'>{greeting}</h1>
        </div>
    )
}
export default ItemListContainer;