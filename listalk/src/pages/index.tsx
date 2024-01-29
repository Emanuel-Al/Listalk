import styles from './page.module.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/Header/Header'
import HomeContent from '../../components/HomeContent/HomeContent'
import CategoryComponent from '../../components/category/CategoryComponent'
export default function Home() {
  return (
    <main>
      {/* <Header showLoginButton = {true} showRegisterButton = {true}/> */}
      <CategoryComponent/>
      {/* <Footer/>  */}
    </main>
  )
}
