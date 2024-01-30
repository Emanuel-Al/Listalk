import React from 'react'
import styles from './ListItem.module.css'

interface ListItemProps{
    content: string;
}

const ListItem = ({content}:ListItemProps) => {
  return (
    <div className={styles.container}>
        <p>{content}</p>
    </div>
  )
}

export default ListItem