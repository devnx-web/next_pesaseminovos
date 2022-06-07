import Headercontato from "../components/headercontato.js"
import Header from "../components/header.js"
import Banner from "../pages/home/banner.js"
import Cards from "../pages/home/cards.js"
import Destaques from "../pages/home/destaques.js"
import Vantagens from "../pages/home/vantagens.js"
import Seminovos from "../pages/home/seminovos.js"
import Footer from "../components/footer.js"

export default function Home() {
  return (
    <div>
      <Headercontato/>
      <Header/>
      <Banner/>
      <Cards/>
      <Destaques/>
      <Vantagens/>
      <Seminovos/>
      <Footer/>
    </div>
  )
}
