import React from 'react'
import Header from '../../components/Header/Header'
import styles from './yourList.module.css'
import ListPage from '../../components/list/ListPage'

const yourList = () => {
  return (
    <div>
      <Header showLoginButton = {false} showRegisterButton = {true}/>
      <ListPage/>
    </div>
  )
}

export default yourList