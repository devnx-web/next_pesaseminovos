import Headercontato from "../../components/headercontato.js"
import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import Banner from "../estoque/banner.js"
import Maquinas from "../estoque/maquinas.js"

export default function Estoque() {
    return(
    <div>
        <Headercontato/>
        <Header/>
        <Banner/>
        <Maquinas/>
        <Footer/>
    </div>
    )
}