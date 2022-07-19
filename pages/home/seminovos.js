import css from "./seminovos.module.css"
import {Row, Col, Container} from "reactstrap"
import Link from "next/link"

export default function Seminovos() {
    return (
        <div>
            <div className={css.bgbanner}>
                <Container>
                    <Col md={6}>
                    <div className={css.title}><span style={{color: '#ffc700'}}>Manutenção certificada CAT</span> em todos os equipamentos</div>

                    <div className={css.card}>
                        <div className={css.text}>
                        Na PESA você encontra um amplo estoque de máquinas, plataformas, empilhadeiras, tratores e 
                        equipamentos seminovos. Nosso mix de produtos é pensado para atender os mais diversos tipos 
                        de operação. Antes de chegar até você, nossos equipamentos passam por um processo de revisão, 
                        testes e aprovação, garantindo qualidade e eficiência
                        </div>
                        <Link href="/estoque"><a><button className={css.button}>Ver seminovos</button></a></Link>
                    </div>
                    </Col>
                </Container>
            </div>
        </div>
    )
}