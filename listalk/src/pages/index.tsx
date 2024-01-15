import styles from './page.module.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'

export default function Home() {
  return (
    <main>
      <Header showLoginButton = {true} showRegisterButton = {true}/>
      <Footer/>
    </main>
  )
}
