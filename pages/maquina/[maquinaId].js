import Headercontato from "../../components/headercontato.js"
import Header from "../../components/header.js"
import Banner from "./banner.js"
import Detalhes from "./detalhes.js"
import Footer from "../../components/footer.js"

function Maquina({ data }){

    if (data.error) {
        return <MaquinaNaoEncontrada />
    }

    return(
        <div>
            <Headercontato/>
            <Header/>
            <Banner
                nomemaq={data.nomemaq}
            />
            <Detalhes 
                imgPrincipal={data.imgPrincipal}
                nome={data.nome}
                valor={data.valor}
                ano={data.ano}
                horas={data.horas}
                marca={data.marca}
                description={data.description}
                categoria={data.categoria}
            />
            <Footer/>
        </div>
    )
}const MaquinaNaoEncontrada = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div> Maquina não encontrada </div>
        </div>
    )
}
// This gets called on every request
export async function getServerSideProps(context) {
    const res = await fetch(`http://phpstack-666249-2511573.cloudwaysapps.com/api/pesaforest/page/${context.params.maquinaId}`)
    const data = await res.json()

    return { props: { data } }
}

export default Maquina