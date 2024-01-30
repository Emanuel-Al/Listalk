import React from 'react'
import Header from '../../components/Header/Header'
import styles from './about.module.css'
const about = () => {
  return (
    <div className={styles.container}>
        <Header showLoginButton={true} showLogoutButton={false} showRegisterButton={true}/>
        <h1 className={styles.title}>About Listalk</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, fugiat voluptas amet saepe in provident itaque, a quos autem id iusto laudantium, vero animi sunt iure explicabo laborum omnis. Assumenda.</p>
    </div>
  )
}

export default about