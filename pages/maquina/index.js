import Headercontato from "../../components/headercontato.js"
import Header from "../../components/header.js"
import Banner from "./banner.js"
import Detalhes from "./detalhes.js"
import Destaques from "../home/destaques.js"
import Footer from "../../components/footer.js"

export default function Maquina() {
    return (
        <div>
            <Headercontato/>
            <Header/>
            <Banner/>
            <Detalhes/>
            <Destaques/>
            <Footer/>
        </div>
    )
}